import React from 'react'
import "./Profile.css"

const Contact = () => {
    return (
        <div>
            <div className="form_contact">
                <input style={{marginTop:"0"}} type="text" className="input_form" placeholder="Name"/>
                <input type="text" className="input_form" placeholder="Subject"/>
                <textarea rows="5" className="input_form" placeholder="Message"></textarea>
                <button className="button button_form">Submit</button>
            </div>
        </div>        
    )
}

export default Contact
