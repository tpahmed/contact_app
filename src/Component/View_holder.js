import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import "./Add_holder.css"
import { useSelector } from 'react-redux';
import "./View_holder.css"

export default function View_holder() {
    const { view, contacts} = useSelector(state=>state);
  const [Navigator,setNavigator] = useState(<></>);
  const { name, ville, tel} = contacts.filter((e)=>e.id === view)[0];
  const Back = ()=>{
    setNavigator(<Navigate to={"/"}/>)
  }
  return (
    <div className="View_holder">
        <button className='goBackv' onClick={Back}>
          <ArrowBackIcon/>
        </button>
        <h4>Name:</h4>
        <input type={"text"} readOnly className={"viewInp"} value={name}/>
        <h4>Number:</h4>
        <input type={"number"} readOnly className={"viewInp"} value={tel}/>
        <h4>City:</h4>
        <input type={"text"} readOnly className={"viewInp"} value={ville}/>
        
        {Navigator}
    </div>
  )
}