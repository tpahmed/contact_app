import Contact_list from "./Contact_holder/Contact_list"
import Task_bar from "./Contact_holder/Task_bar"
import "./Contact_holder.css"

export default function Contact_holder() {
  return (
    <div className="Contact_holder">
        <Task_bar/>
        <Contact_list/>
    </div>
  )
}
