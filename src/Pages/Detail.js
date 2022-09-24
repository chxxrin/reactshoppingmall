import { useParams } from "react-router-dom";
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { addItem } from '../store.js'
import { useDispatch } from "react-redux";

function Detail(props) {


    let [count, setCount] = useState(0)
    let [alert, setAlert] = useState(true)
    let {id} = useParams();
    let 찾은상품 = props.shoes.find(x => x.id == id);
    let dispatch = useDispatch()

    useEffect(()=>{
        let a = setTimeout(()=>{ setAlert(false)}, 2000)

        return ()=>{
            clearTimeout(a)

        }
    }, [])

    return (
        <div className="container">
            {
                alert == true
                ? <div className="alert alert-warning">
                    2초이내 구매시 할인
                  </div>
                : null
            }

            { count }
            <button onClick={()=>{ setCount(count+1)}}>button</button>
            <div className="row">
                <div className="col-md-6">
                    <img src='https://codingapple1.github.io/shop/shoes1.jpg' width="100%"/>
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{찾은상품.title}</h4>
                    <p>{찾은상품.content}</p>
                    <p>{찾은상품.price}원</p>
                    <button className="btn btn-danger" onClick={()=>{
                        dispatch(addItem( {id:1, name:'Red Knit', count:1}))
                    }}>주문하기</button> 
                </div>
            </div>
        </div> 
    )
}

export default Detail;