import React, { Component } from 'react'
import "./modal.css"

// function Modal() {
//     return (
//         <div>
//             <div className="cd-popup is-visible" role="alert">
//                 <div className="cd-popup-container">
//                     <p>{props.message}</p>
//                     <ul className="cd-buttons">
//                         <li><a href="#">تایید</a></li>
//                         <li><a href="#">بازگشت</a></li>
//                     </ul>
//                     <a href="#" className="cd-popup-close img-replace">Close</a>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Modal

export default class Modal extends Component {
    render() {
        return (
            <div>
                <div className='cd-popup is-visible' role='alert'>
                    <div className='cd-popup-container'>
                        <p>{this.props.message}</p>
                        <ul className='cd-buttons'>
                            <li><a href="#">تایید</a></li>
                            <li><a href="#">بازگشت</a></li>
                        </ul>
                        <a href="#" className='cd-popup-close img-replace'>Close</a>
                    </div>
                </div>
            </div>
        )
    }
}


Modal.defaultProps = {
    message: "شما با موفقیت وارد پنل کاربریتان شدید"
}