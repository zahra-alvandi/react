import React, { Component } from 'react'
import "./modal.css"
import propTypes from 'prop-types'

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
                        <p>{this.props.state}</p>
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


// Modal.defaultProps = {
//     state: "شما با موفقیت وارد پنل کاربریتان شدید"
// }

// Modal.protoType = {
//     state: propTypes.oneOf(["true", "false"])
// }

Modal.propTypes = {
    state: propTypes.string.isRequired
}