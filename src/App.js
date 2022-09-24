import './App.css';
import { useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav} from 'react-bootstrap';
import bg from './img/bg.png';
import data from './Components/data.js';
import Detail from './Pages/Detail.js';
import Cart from './Pages/Cart.js';


function App() {

  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={()=>{ navigate('/') }}>ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail') }}>Detail</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/cart') }}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

{/* 
      <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link> */}

      <Routes>
          <Route path="/" element={
          <>
            <div className="main-bg" style={{ backgroundImage : 'url('+ bg +')'}}></div>
              <div className="container">
              <div className="row">

            {
              shoes.map((a,i)=>{
                return (
                  <Card shoes={shoes[i]} i={i} />
                )
              })
            }
          </div>
        </div>
          </>
        }/>
        <Route path="/detail" element={<div>detail페이지</div>} />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="/cart" element={<Cart/>}/>
        
        <Route path="*" element={<div>없는페이지입니다.</div>} />
    </Routes>

    
      
    
    </div>
  );
}

function Card(props) {
  return (
        <div className="col-md-4">
          <img src={'https://codingapple1.github.io/shop/shoes'+ (props.i+1) +'.jpg'} 
            width="80%"/>
          <h4>{props.shoes.title}</h4>
          <p>{props.shoes.price}</p>
        </div>
  )
}

export default App;
