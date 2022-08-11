
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "./store/actions/order";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import "./busket.css";


export default function Basket() {
    let cart = useSelector(state => state.ord.cart);
    console.log(cart)
    let dis = useDispatch();
const navigate=useNavigate()
    const [sum,setSum] = useState()

    useEffect(()=>{
        let s = 0
        cart.forEach(item=>{
            s+=(item.price*item.amount)
        })
        setSum(s)
       },[cart])
   

       function finishOrder() {

            navigate(`/complateOrder`)
       
    }

      
   

    // let addToCart = (e, item) => {
    //     // let p = [...cart]
    //     // console.log(p[index])
    //     // p[index].productInOrder.quantityOrdered = e.target.value
    //     console.log(item._id,+e.target.value)
    //     dis(updateProduct(item._id,e.target.value))
    // }
    return (
        <div id="busket">
            {
                cart.map((item,index) =><div key={item._id}>
                    <h2>{item.name}</h2>
                    <br></br>
                     <h2 id="amount">יחידות: {item.amount}</h2>
                    <button  id="addBut" onClick={()=>dis(updateCart(item._id,item.amount+1))} ><AddIcon></AddIcon></button>
                    {/* <input type="text" value={item.amount}/> */}
                  
                    {/* <h1>{item.amount}</h1> */}
                    <button disabled={item.amount==0}  onClick={()=>dis(updateCart(item._id,item.amount-1))} ><HorizontalRuleIcon></HorizontalRuleIcon></button>
                     {/* <input type="button" value="סיום הזמנה" /> */}
                    </div>)
                    
            } 
           {sum>0&&<Box sx={{ '& button': { m: 1 } }}>
                        <div>
                            <Button onClick={finishOrder} variant="contained" size="large">
                               סיום הזמנה
                            </Button>
                        </div>
                    </Box>}
    
           {sum>0&&<h3>סה"כ לתשלום: {sum} ש"ח</h3>}
        </div>
    )
}
                