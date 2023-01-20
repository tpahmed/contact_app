import { useSelector } from "react-redux";
import "./Contact_list.css";
import Contact from "./Contact_list/Contact";

export default function Contact_list() {
    const { contacts } = useSelector((state)=>state);

    
  return (
    <div className="Contact_list">
        {contacts.map((e)=><div key={e.id}><Contact id={e.id} nom={e.name}/></div>)}
    </div>
  )
}
