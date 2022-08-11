import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "./store/actions/user";
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import "./login.css";





export default function Login() {

    const navigate = useNavigate();
    let dis = useDispatch();
    let [user, setUser] = useState({ name: "", password: 0 });
    let change = (e) => {
        let { name, value, type } = e.target;
        if (type == "number")
            value =+ value;
        let u = { ...user };
        u[name] = value;
        setUser(u);
    }
    let login = (e) => {
        e.preventDefault();
        axios.post("http://localhost:4500/user/login", user).then(res => {
            console.log(res.data);
            dis(addUser(res.data))
            console.log(user)
             navigate(`/AllProduct`)
        })
    }
    return (
        <>
        <div id="log">
            <form onSubmit={login}>
                <br></br>
                <br></br>
                <br></br>

                <TextField type="text" placeholder="הכנס שם" name="name" onChange={change} />
                <br></br>
                <br></br>
                <TextField type="number" placeholder="הכנס סיסמא" name="password" onChange={change} />
               
                <br></br>
                <br></br>
                {/* <input type="submit"  value="כניסה" /> */}
                <Box sx={{ '& button': { m: 1 } }}>
                        <div>
                            <Button  type="submit" variant="contained" size="large">
                                כניסה
                            </Button>
                        </div>
                    </Box>
            </form>
            </div>
        </>
    )



}