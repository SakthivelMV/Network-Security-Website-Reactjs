import React from "react";
import './Contact.css'
import { FaEnvelope, FaPhone } from 'react-icons/fa'


export const Contact = () => {
    return (
        <div className='contact'>
            <div className='container'>
                <div className='col-1'>
                    <div className='content'>
                        <div><h2>We are here</h2>
                        </div>
                        <div className='address'>
                            <p>No:3,Kodambakkam</p>
                            <p>Chennai,TN - 119</p>
                        </div>
                        <div className='icons'>
                            <FaPhone style={{marginRight: '1rem'}} />
                            <p>+91 98875-12345</p>
                        </div>
                        <div className='icons'>
                            <FaEnvelope style={{marginRight: '1rem'}} />
                            <p>support@solutions.com</p>
                        </div>
                        <div className='careers'>
                            <p>Looking for careers? <span>View all jop openings.</span></p>
                        </div>
                    </div>
                </div>
                <div className='col-2'>
                    <form action=''>
                        <input type='text' placeholder='Full name' />
                        <input type='email' placeholder='Email' />
                        <input type='phone' placeholder='Phone' />
                        <textarea name='Message' placeholder='Message' cols='30' rows='10'></textarea>
                        <div className='checkbox'>
                            <input type='checkbox' />
                            <p>By checking this box, you agree to the our Privacy Policy 
                            </p>
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact