import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import {v4} from "uuid"
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import "./Add_holder.css"
import { useDispatch } from 'react-redux';

export default function Add_holder() {
  const [Name,setName] = useState("")
  const [City,setCity] = useState("")
  const [Tel,setTel] = useState("")
  const dispatch = useDispatch();
  const [Navigator,setNavigator] = useState(<></>)
  const Back = ()=>{
      setNavigator(<Navigate to={"/"}/>)
  }
  const Add = ()=>{
      dispatch({
        type:"ADD",
        payload:{id:v4(),name:Name,ville:City,tel:Tel}
      })
      Back()
  }
  return (
    <div className="Add_holder">
        <button className='goBack' onClick={Back}>
          <ArrowBackIcon/>
        </button>
        <input type={"text"} className={"addInp"} placeholder={"Name"} onChange={(e)=>setName(e.target.value)} value={Name}/>
        <input type={"number"} className={"addInp"} placeholder={"Number"} onChange={(e)=>setTel(e.target.value)} value={Tel}/>
        <input type={"text"} className={"addInp"} placeholder={"City"} onChange={(e)=>setCity(e.target.value)} value={City}/>
        <button className='Add' onClick={Add}>
          <AddIcon/>
        </button>
        
        {Navigator}
    </div>
  )
}