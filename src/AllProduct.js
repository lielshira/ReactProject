import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
// import { addToCart } from "./store/actions/order";
import { deleteProduct, saveProducts } from "./store/actions/product";
// import { useState } from "react";
import { addToCart } from "./store/actions/order";
import { useEffect } from "react";
import "./allProducts.css";





import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


import SendIcon from '@mui/icons-material/Send';









export default function AllProducts() {
    let arr = useSelector(state => state.prod.productsArr);
    let currentUser = useSelector(state => state.us.currentUser);
    let dispatch = useDispatch();


    var image = require('../src/publicImg/color.jpg');
  


    useEffect(() => {
        bringProducts();
        // alert (JSON.stringify(currentUser));

    }, [])


    //let [prod,setProd]=useState({name:"",descreption:"",img:"",price:0,isGluten:false});
    const bringProducts = () => {
        axios.get("http://localhost:4500/product").then(res => {
            console.log(res);
            dispatch(saveProducts(res.data))
        }
        ).catch(err => {
            console.log(err)
        });

    }


    const deleteProd = (e, item) => {
        axios.delete(`http://localhost:4500/product/${item._id}`).then(res => {
            console.log(res);
            dispatch(deleteProduct(res.data))
        }
        ).catch(err => {
            console.log(err)
        });
    }
    function cart(item) {
        //   let c={}
        //   c.productInOrder=item
        //   c.invitingId=currentUser._id
        //     axios.post("http://localhost:4500/order",c).then(res=>{
        //         console.log(res.data);
        //         dispatch(addToCart(res.data))
        //     }
        //     )
        //         .then(res => {
        //             console.log(res.data);
        dispatch(addToCart(item, 1))

        // })
   
    }

    return (
        
        <>
            <br></br>
            {
                arr.map(item => {
                    return (
                        <>
                        <div class="allProducts">
                            < Card className="card">

                                <Typography gutterBottom variant="h4"  component="div">
                                  <h3>{item.name}</h3>  
                                </Typography>
                                <CardMedia
                                className="img"
                                    component="img"
                                    height="140"
                                    image={item.img}
                                    
                                //  image={`./public/${item.img}`}
                                // image1={`../src/publicImg/${item.img}`}
                                
                                // <img src={item.img}/>
                                // {/* <img src={`./public/${item.img}`}></img */}
                                // alt={item.img}
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                      
                                    <h2 id="des">   תיאור:  {item.descreption}</h2> 
                                       
                                    <h2>  מחיר: {item.price} ש"ח</h2>  
                                   
                                    <h2>  {item.isGluten ?   ' מכיל גלוטן ':'לא מכיל גלוטן'}</h2>  

                                        {/* <img src={`../src/publicImg/${item.img}`}/> */}
                                <br></br>
                                
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    
                                    {/* {currentUser && currentUser.job ? <input id="butDel" type="button" value="מחק מוצר" onClick={(e) => deleteProd(e, item)} /> : <input id="add" type="button" value="הוסף לסל" onClick={() => cart(item)} />} */}
                                    {currentUser && currentUser.job ? <Button id="delete"  onClick={(e) => deleteProd(e, item)} startIcon={<DeleteIcon />}>מחק מוצר</Button> : <Button id="addtocart" onClick={() => cart(item)}color="primary" aria-label="add to shopping cart" >  <AddShoppingCartIcon fontSize="large" /></Button>
                                     /* {currentUser && currentUser.job ? <Button  onClick={(e) => deleteProd(e, item)}variant="outlined" startIcon={<DeleteIcon />} >מחק מוצר</Button> : <button type="button" value="הוסף לסל" onClick={() => cart(item)} > <Button ><AddShoppingCartIcon /><Button/>  */}
                               {/* מחק מוצר
                            </Button></button>} */}
                                </CardActions>
                            </Card>

                            <br></br>
                             {/* <IconButton color="primary" aria-label="add to shopping cart">
                               
                            </IconButton>  */}

                             {/* <Button variant="outlined" startIcon={<DeleteIcon />}> 
                               מחק מוצר
                            </Button>  */}
                            

      
</div>

                        </>
                    )
                })
            }


        </>

    )

}