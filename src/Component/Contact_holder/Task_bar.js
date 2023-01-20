import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from 'react-router-dom';
import CancelIcon from '@mui/icons-material/Cancel';
import AddIcon from '@mui/icons-material/Add';
import "./Task_bar.css";
import { useState } from 'react';

export default function Task_bar() {
    const { removeSelected, search } = useSelector((state)=>state);
    const dispatch = useDispatch();
    const [Navigator,setNavigator] = useState(<></>)
    const Add = ()=>{
        setNavigator(<Navigate to={"add"}/>)
    }
    const remove = ()=>{
        dispatch({
            type:"SHOW"
        })
    }
    const confirm = ()=>{
        dispatch({
            type:"DEL"
        })
    }
    const clear = ()=>{
        dispatch({
            type:"HIDE"
        })
    }
    const searchEv = (e)=>{
        dispatch({
            type:"SEARCH",
            payload:e.target.value
        })
    }
  return (<>
    <div className="Task_bar">
        <ul>
            <li style={{"display": !removeSelected ? "inline" : "none"}}>
                <button onClick={Add}>
                    <AddIcon/>
                    <br/>
                    <b>Add</b>
                </button>
            </li>
            <li  style={{"display": !removeSelected ? "inline" : "none","marginLeft":"30%"}}>
                <button onClick={remove}>
                    <PersonRemoveIcon/>
                    <br/>
                    <b>Remove</b>
                </button>
            </li>
            <li  style={{"display": removeSelected ? "inline" : "none"}}>
                <button onClick={clear}>
                    <CancelIcon/>
                    <br/>
                    <b>Cancel</b>
                </button>
            </li>
            <li  style={{"display": removeSelected ? "inline" : "none","marginLeft":"30%"}}>
                <button onClick={confirm}>
                    <PersonRemoveIcon/>
                    <br/>
                    <b>Confirm</b>
                </button>
            </li>
            
        </ul>
    </div>
        <input type={"text"} className={"searchInp"} placeholder={"Search by City"} onChange={searchEv} value={search}/>
      {Navigator}
  </>
  )
}
