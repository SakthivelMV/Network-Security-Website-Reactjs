import React from 'react'
import './Hero.css'
import { FaFacebook, FaTwitter, FaWhatsapp, FaAmazon, FaInstagram, FaChartPie, FaPenSquare, FaWater } from 'react-icons/fa'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='container'>
                <div className='content'>
                    <div className='col-1'>
                        <h1>Protect integrity of your </h1>
                        <h1><span className='primary-color'>Network and Data.</span></h1>
                        <p>
                            Network security combines multiple layers of defenses at the edge and in the network. Each network security layer implements policies and controls. Authorized users gain access to network resources, but malicious actors are blocked from carrying out exploits and threats.
                        </p>
                        <div className='used-by'>
                            <p>USED BY</p>
                            <div className='icons'>
                                <i><FaAmazon /> Amazon</i>
                                <i><FaInstagram />Instagram</i>
                                <i><FaChartPie /> Zomato</i>
                                <i><FaPenSquare />HCL</i>
                                <i><FaWater/>Accenture</i>
                            </div>
                        </div>
                    </div>
                    <div className='col-2'>
                        <div className='form-layout'>
                            <div className='form-container'>
                                <p className='sign-in-txt'>Sign in with</p>
                                <div className='social-login'>
                                    <i><FaWhatsapp size={20} /></i>
                                    <i><FaTwitter size={20} /></i>
                                    <i><FaFacebook size={20} /></i>
                                </div>
                                <div className='divider'>
                                    <p><span>Or</span></p>
                                </div>
                                <form action=''>
                                    <input type='text' placeholder='Name' />
                                    <input type='email' placeholder='Email' />
                                    <input type='password' placeholder='Password' />
                                    <button className='btn-txt'>Create your account</button>
                                </form>
                            </div>
                            <div className='form-footer'>
                                <p>
                                    <span className='s-up'> By signing up, you agree to our Terms, Data Policy</span> and

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero
