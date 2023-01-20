import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import "./Contact.css"

export default function Contact({nom,id}) {
  const { removeSelected, removingArr } = useSelector((state)=>state);
  const [checked,setchecked] = useState(removingArr.includes(id));
  const dispatch = useDispatch();
  const select = (e)=>{
    setchecked(!checked);
    let action = {
      type:"CANCEL",
      payload:id
    }
    if (e.target.checked){
      action.type = "REM"
    }
    dispatch(action);
  }
  const [Navigator,setNavigator] = useState(<></>)
  const view = ()=>{
    dispatch({
      type:"VIEW",
      payload:id
    })
    setNavigator(<Navigate to={"view"}/>)
  }


  return (
    <div className="Contact" key={id} onClick={()=>!removeSelected ? view() : {}}>
      <input type={"checkbox"} checked={removingArr.includes(id)} style={{"display":removeSelected ? "inline" : "none"}} onChange={select} />
      {nom}
      {Navigator}
    </div>
  )
}
