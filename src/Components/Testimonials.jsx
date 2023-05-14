import React from "react";

function Testimonials(){
    return(
        <>
        <div className="testimonials" id="testimonials">
            <div className="testimonials_content">
                <div className="testimonials_content_heading">WHAT MY CLIENTS ARE SAYING</div>
                <div className="testimonials_content_desc">
                    <div className="testimonials_content_desc_left"><img src={require("../assets/Vector 2.png")} alt="left" width={"50px"} /></div>
                    <div className="testimonials_content_desc_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue ipsum, odio id id et in. Luctus suscipit quam gravida etiam arcu. Rhoncus, felis, integer nisl habitant tortor, ac dignissim. Vitae.. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue ipsum, odio id id et in. Luctus suscipit quam gravida etiam arcu. Rhoncus, felis, integer nisl habitant tortor, ac dignissim. Vitae.</div>
                    <div className="testimonials_content_desc_right"><img src={require("../assets/Vector 1.png")} alt="right" width={"50px"} /></div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Testimonials;