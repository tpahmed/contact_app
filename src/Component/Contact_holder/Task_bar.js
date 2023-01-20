import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { useSelector, useDispatch } from "react-redux";
import { Link, Navigate } from 'react-router-dom';
import CancelIcon from '@mui/icons-material/Cancel';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import "./Task_bar.css";
import { useState } from 'react';

export default function Task_bar() {
    const { removeSelected } = useSelector((state)=>state);
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
  return (
    <div className="Task_bar">
        <ul>
            <li style={{"display": !removeSelected ? "inline" : "none"}}>
                <button onClick={Add}>
                    <AddIcon/>
                    <br/>
                    <b>Add</b>
                </button>
            </li>
            <li>
                <button>
                    <SearchIcon/>
                    <br/>
                    <b>Search</b>
                </button>
            </li>
            <li  style={{"display": !removeSelected ? "inline" : "none"}}>
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
            <li  style={{"display": removeSelected ? "inline" : "none"}}>
                <button onClick={confirm}>
                    <PersonRemoveIcon/>
                    <br/>
                    <b>Confirm</b>
                </button>
            </li>
            
        </ul>
        {Navigator}
    </div>
  )
}
