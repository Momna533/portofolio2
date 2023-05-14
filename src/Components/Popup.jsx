import React from "react";
import { Link } from "react-router-dom";

function Popup({popup,setPopup}){
    return(
        <>
        <div className={popup ? "show_popup" : "hide_popup"}>
            <div className="contact_form_content">
                <div className="contact_form_heading">contact me</div>
                <div className="contact_form_desc">contact me for more info</div>
            <form action="" className="contact_form">
                <input className="contact_form_input" type="text" placeholder="name" />
                <input className="contact_form_input" type="mail" placeholder="mail" />
                <textarea className="contact_form_input" name="" id="" cols="30" rows="10" placeholder="message"></textarea>
                <button className="contact_form_submit" type="submit">submit</button>
                <Link className="close" onClick={()=> setPopup(!popup)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></Link>
            </form>
            </div>
        </div>
        </>
    )
}

export default Popup;