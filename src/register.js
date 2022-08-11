import { useState } from "react";
import axios from "axios";
import { useDispatch ,useSelector} from "react-redux";
import { addUser } from "./store/actions/user";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import "./register.css";
import { useNavigate } from "react-router-dom";


export default function Register() {
    const navigate=useNavigate();
    let dis = useDispatch();
    let adminPassword = useSelector(state => state.us.adminPassword);
    // let currentUs = useSelector(state => state.us.currnetUser)
    let [user, setUser] = useState({ name: "", password: 0, mail: "", job:0, country: "", city: "", street: "", numHouse: 0, phone: "" });
    let change = (e) => {
        debugger
        let { name, value, type } = e.target;
         let u = { ...user };
         if(type=="checkbox")
         value=e.target.checked;
        if (type == "number")
            u[name] += Number(value) ;
        u[name] = value;
        setUser(u);
    }

    let register = (e) => {
        debugger
        e.preventDefault();
        if(adminPassword==user.password)
          user.job=1;
        axios.post("http://localhost:4500/user",user)
        .then(res => {
            debugger
            console.log(res.data);
            dis(addUser(res.data))
        })
        .catch(err=>console.log(err))

        navigate(`/AllProduct`)
    }
    return (
        <>
        <div id="reg">
            <form onSubmit={(e)=>register(e)}>
                <br></br>
                {/* <input type="text" placeholder="הכנס שם" name="name" onChange={change} /> */}
                <TextField type="text" placeholder="הכנס שם" name="name" onChange={change} />
                <br></br>
                <br></br>
                {/* <input type="number" placeholder="הכנס סיסמא" name="password" onChange={change} /> */}
                <TextField type="number" placeholder="הכנס סיסמא" name="password" onChange={change}  inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}/>
                <br></br>
                <br></br>
                {/* <input type="email" placeholder="הכנס מייל" name="mail" onChange={change} /> */}
                <TextField type="email" placeholder="הכנס מייל" name="mail" onChange={change} />
                {/* <br></br> */}
                {/* <label>הכנס סטטוס</label>
                <input type="checkbox"  name="job" onChange={change} /> */}
                <br></br>
                <br></br>
                {/* <input type="text" placeholder="הכנס מדינה" name="country" onChange={change} /> */}
                <TextField type="text" placeholder="הכנס מדינה" name="country" onChange={change} />
                <br></br>
                <br></br>
                {/* <input type="text" placeholder="הכנס עיר" name="city" onChange={change} /> */}
                <TextField type="text" placeholder="הכנס עיר" name="city" onChange={change} />
                <br></br>
                <br></br>
                {/* <input type="text" placeholder="הכנס רחוב" name="street" onChange={change} /> */}
                <TextField type="text" placeholder="הכנס רחוב" name="street" onChange={change} />
                <br></br>
                <br></br>
                {/* <input type="number" placeholder="הכנס מספר בית" name="numHome" onChange={change} /> */}
                <TextField type="number" placeholder="הכנס מספר בית" name="numHome" onChange={change} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}/>
                <br></br>
                <br></br>
                {/* <input type="text" placeholder="הכנס מספר טלפון" name="phone" onChange={change} /> */}
                <TextField type="text" placeholder="הכנס מספר טלפון" name="phone" onChange={change} />
                <br></br>
                <br></br>
                {/* <input type="submit"  value="הירשם" onClick={register}/> */}
                <Box sx={{ '& button': { m: 1 } }}>
                        <div>
                            <Button  type="submit" variant="contained" size="large">
                                הירשם
                            </Button>
                        </div>
                    </Box>
            </form>
            </div>
        </>
    )



}