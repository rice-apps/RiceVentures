import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <div>
            <div className = "titleContainer">
                <h1 className = "title">
                    CONTACT US
                </h1>
            </div>
            <div className = "bottomContainer">
                <div className = "messageContainer">
                    <h2 className = "messageTitle">
                        MESSAGE
                    </h2>
                    <input className = "smallInput" />
                    <input className = "smallInput" style={{top:"472px"}}/>
                    <input className = "largeInput" />
                    {/* send button?? */}
                </div>
                <div className = "followContainer">
                    <h2 className = "followTitle">
                        FOLLOW US
                    </h2>
                    <div className = "logoContainer">
                        <button className = "firstButton" >FB</button>
                        <button className = "secondButton" >IG</button>
                        <button className = "thirdButton">SC</button>
                    </div>
                    <h2 className = "newsletterTitle">
                        NEWSLETTER
                    </h2>
                    <div className = "newsletter"></div>
                    
                    
                    
                </div>

            </div>
        </div>
        
        
    )
}

export default Contact;