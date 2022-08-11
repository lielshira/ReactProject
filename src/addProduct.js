import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct } from "./store/actions/product";
import { useState } from "react";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import "./addproduct.css";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

// import "../src/public/Australia 003.jpg";


export default function AddProduct() {
    const Input = styled('input')({
        display: 'none',
    });





    let dis = useDispatch();
    let [prod, setProd] = useState({ name: "", descreption: "", img: "", price: 0, isGluten: false });
    let change = (e) => {
        let { name, value, type } = e.target;
        if (type == "number")
            value = +value;

        if (type == "checkbox")
            value = e.target.checked;
        if (type == "file") {
            var im = value.substring(12);
            var image1 = require(`../src/publicImg/${im}`)
            value = image1
            console.log(image1);

        }

        let p = { ...prod };
        p[name] = value;
        setProd(p);
    }
    let save = (e) => {
        e.preventDefault();
        axios.post("http://localhost:4500/product", prod).then(res => {
            console.log(res.data);
            dis(addProduct(res.data))
        })


    }
    return (


        <>
            <br></br>
            <div id="form">

                <form>

                    <br></br>
                    <br></br>
                    <TextField className="add"
                        type="text" name="name" onChange={change}

                        label="שם מוצר"
                    />
                    {/* <input type="text" name="name" onChange={change} placeholder="שם" /> */}
                    <br></br>
                    <br></br>
                    {/* <input type="text" name="descreption" onChange={change} placeholder="תיאור" /> */}
                    <TextField className="add"
                        name="descreption" onChange={change}
                        label="תיאור מוצר"
                    />
                    <br></br>
                    <br></br>
                    <label>בחר תמונה</label>
                    {/* type="file" */}
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <label htmlFor="icon-button-file">
                            <Input className="add" name="img" onChange={change} placeholder="תמונה" accept="image/*" id="icon-button-file" type="file" />
                            <IconButton className="add" color="primary" aria-label="upload picture" component="span">
                                <PhotoCamera className="add" />
                            </IconButton>
                        </label>
                    </Stack>
                    {/* <input type="text" name="img" onChange={change}placeholder="תמונה" /> */}
                    <br></br>

                    <TextField className="add" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                        name="price" onChange={change}
                        // helperText="Please enter your name"
                        // id="demo-helper-text-misaligned"
                        label="מחיר מוצר"
                    />

                    {/* <input type="number" name="price" onChange={change} placeholder="מחיר" /> */}
                    <br></br>
                    <br></br>
                    <Checkbox className="add"
                        type="checkbox"
                        {...label}
                        // defaultChecked
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                        name="isGluten" onChange={change}
                    />


                    {/* <input type="checkbox" name="isGluten" onChange={change} /> */}
                    <label>?מכיל גלוטן</label>
                    <br></br>
                    {/* <input type="submit" onClick={save} value="הוסף מוצר" /> */}
                    <Box sx={{ '& button': { m: 1 } }}>
                        <div>
                            <Button className="add" onClick={save} type="submit" variant="contained" size="large">
                                הוסף מוצר
                            </Button>
                        </div>
                    </Box>
                </form>
            </div>
        </>
    )
}

