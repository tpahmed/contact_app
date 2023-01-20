import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import "./Add_holder.css"

export default function Add_holder() {
  const [Navigator,setNavigator] = useState(<></>)
    const Back = ()=>{
        setNavigator(<Navigate to={"/"}/>)
    }
  return (
    <div className="Add_holder">
        <button className='goBack' onClick={Back}>
          <ArrowBackIcon/>
        </button>
        {Navigator}
    </div>
  )
}