import { useSelector } from "react-redux";
import "./Contact_list.css";
import Contact from "./Contact_list/Contact";

export default function Contact_list() {
    const { contacts,search } = useSelector((state)=>state);

    
  return (
    <div className="Contact_list">
        {contacts
        .filter((e)=>e.ville.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
        .map((e)=><div key={e.id}><Contact id={e.id} nom={e.name}/></div>)}
    </div>
  )
}
