import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import "./completeOrder.css";
import * as React from 'react';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { addDays, getDate } from "date-fns";




export default function ComplateOrder() {
    const navigate = useNavigate();
    let currentUs = useSelector(state => state.us.currentUser);
    let currentProd = useSelector(state => state.ord.cart);
    const [value, setValue] = React.useState(null);

    Date.prototype.addDays = function(days) {
        this.setDate(this.getDate() + parseInt(days));
        return this;
    };

    let nameRef = useRef(null);
    let emailRef = useRef(null);
    let phoneRef = useRef(null);
    let cityRef = useRef(null);
    let streetRef = useRef(null);
    let numHomeRef = useRef(null);
    let passwordRef = useRef(null);
    let countryRef = useRef(null);
    let useOrd = {orderDate :new Date(),getDate:new Date().addDays(4)}
    let finish = (e) => {
        e.preventDefault();
       
        useOrd.idCustomer = currentUs?._id;
        alert(useOrd.idCustomer)
       
        // useOrd.getDate = e.target.DatePicker.value

        useOrd.productsArr = [...currentProd]
        alert(currentProd)
        navigate(`/finishOrder`)

        axios.post("http://localhost:4500/orders", useOrd).then(res => {

            console.log(res.data);


        })
            .catch(err => console.log(err))
    }

    return (
        <>
            <form onSubmit={(e) => finish(e)}>
                {/* {/* name:String,
password:Number,
mail:String,
job:{type:Boolean,default:0},
country:String,
city:String,
street:String,
numHouse:Number,
phone:{type:String ,length:10} */}


                <div id="ord">

                    <h5> שם</h5>
                    {/* <input type="text"  defaultValue={currentUs ? currentUs.name : ''} ref={nameRef} /> */}
                    <TextField type="text" defaultValue={currentUs ? currentUs.name : ''} ref={nameRef}  ></TextField>
                    <br />
                    <h5> סיסמא</h5>
                    {/* <input type="number"  defaultValue={currentUs ? currentUs.password : ''} ref={passwordRef} /> */}
                    <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} type="number" defaultValue={currentUs ? currentUs.password : ''} ref={passwordRef} />
                    <br />
                    <h5>כתובת אימייל</h5>
                    <TextField type="text" placeholder="כתובת אימייל" defaultValue={currentUs ? currentUs.mail : ''} ref={emailRef} />
                    {/* <input type="text" placeholder="כתובת אימייל" defaultValue={currentUs ? currentUs.mail : ''} ref={emailRef} /> */}
                    <br />
                    <h5>מדינה</h5>
                    {/* <input type="text" placeholder="מדינה" defaultValue={currentUs ? currentUs.country : ''} ref={countryRef} /> */}
                    <TextField type="text" placeholder="מדינה" defaultValue={currentUs ? currentUs.country : ''} ref={countryRef} />
                    <br />
                    <h5>עיר</h5>
                    {/* <input type="text" placeholder="עיר" defaultValue={currentUs ? currentUs.city : ''} ref={cityRef} />
             */}
                    <TextField type="text" placeholder="עיר" defaultValue={currentUs ? currentUs.city : ''} ref={cityRef} />
                    <br />

                    {/* <h6>עיר</h6>
            <input type="text" placeholder="עיר" defaultValue={currentUs? currentUs.city : ''} ref={cityRef} />
            <br /> */}
                    <h5>רחוב</h5>
                    {/* <input type="text" placeholder="רחוב" defaultValue={currentUs ? currentUs.street : ''} ref={streetRef} /> */}
                    <TextField type="text" placeholder="רחוב" defaultValue={currentUs ? currentUs.street : ''} ref={streetRef} />
                    <br />
                    <h5>מספר בית</h5>
                    {/* <input type="number" placeholder="מספר בית" defaultValue={currentUs ? currentUs.numHouse : ''} ref={numHomeRef} /> */}
                    <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} type="number" placeholder="מספר בית" defaultValue={currentUs ? currentUs.numHouse : ''} ref={numHomeRef} />
                    <h5>מספר טלפון</h5>
                    {/* <input type="text" placeholder=" מספר טלפון" defaultValue={currentUs ? currentUs.phone : ''} ref={phoneRef} /> */}
                    <TextField type="text" placeholder=" מספר טלפון" defaultValue={currentUs ? currentUs.phone : ''} ref={phoneRef} />

                    <br />
                    <h5>תאריך יעד</h5>
                    {/* <input id='date'  type="date" defaultValue={new Date().toISOString().split('T')[0]} />  */}

                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                           // fmat="dd/MM/yyyy"
                            label="תאריך יעד"
                            minDate={new Date().addDays(4)}
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                    <br />
                    {/* <input type="submit" value="אישור הזמנה" />
             */}
                    <Box sx={{ '& button': { m: 1 } }}>
                        <div>
                            <Button className="add" type="submit" variant="contained" size="large">
                                אישור הזמנה
                            </Button>
                        </div>
                    </Box>
                </div>
            </form >

        </>
    )
}


