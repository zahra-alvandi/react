// import React form 'react'
import "./modal.css"

function Modal(children) {
    return (
        <div>
            <div className="cd-popup is-visible" role="alert">
                <div className="cd-popup-container">
                    {children}
                    <a href="#" className="cd-popup-close img-replace">Close</a>
                </div>
            </div>
        </div>
    )
}

export default Modal