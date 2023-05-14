import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Footer(){

    const [linkClicked,setLinkClicked] = useState(false)

function handleLink(e){
    setLinkClicked(!linkClicked)
    e.preventDefault()
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    let position = element.offsetTop - 60;
    window.scrollTo({
        top:position,
        left:0,
    });
}
    return(
        <>
        <div className="footer">
            <div className="footer_content">
                <div className="footer_content_links">
                        <NavLink to="/services" className="header_content_link" onClick={handleLink}>Services</NavLink>
                        <NavLink to="/contact" className="header_content_link" onClick={handleLink}>contact</NavLink>
                    </div>
                <div className="footer_content_social_links">
                        <NavLink to="https://www.facebook.com" className="footer_content_social_link"><svg className="footer_content_social_link_svg" xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 24 24"
                         fill="currentColor" stroke="currentColor"
                         stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></NavLink>
                        <NavLink to="https://www.twitter.com" className="footer_content_social_link"><svg className="footer_content_social_link_svg" xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 24 24" 
                         fill="currentColor" stroke="currentColor"
                         stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg></NavLink>
                        <NavLink to="https://www.instagram.com" className="footer_content_social_link"><svg className="footer_content_social_link_svg" xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 24 24" 
                         fill="none" stroke="currentColor"
                         stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></NavLink>
                    </div>
                <div className="copyright">COPYRIGHT@2023|MOMNA</div>
            </div>
        </div>
        </>
    )
}

export default Footer;