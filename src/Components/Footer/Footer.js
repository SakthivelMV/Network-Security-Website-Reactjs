import React from "react";
import './Footer.css'
import { Link } from 'react-router-dom'
import { FaFacebook,FaMailBulk, FaTwitter, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='col solutions'>
                    <h6>Solutions</h6>
                    <ul>
                        <li><Link to='/' className='link'>Marketing</Link></li>
                        <li><Link to='/'className='link'>Analytics</Link></li>
                    </ul>
                </div>
                <div className='col support'>
                    <h6>Support</h6>
                    <ul>
                        <li><Link to='/'className='link'>Pricing</Link></li>
                        <li><Link to='/'className='link'>Documentation</Link></li>
                        <li><Link to='/'className='link'>Guides</Link></li>
                                            </ul>
                </div>
                <div className='col company'>
                    <h6>Company</h6>
                    <ul>
                        <li><Link to='/'className='link'>About</Link></li>
                        <li><Link to='/'className='link'>Blog</Link></li>
                        <li><Link to='/'className='link'>Jobs</Link></li>
                        <li><Link to='/'className='link'>Media</Link></li>
                    </ul>
                </div>
                <div className='col legal'>
                    <h6>Legal</h6>
                    <ul>
                        <li><Link to='/'className='link'>Claim</Link></li>
                        <li><Link to='/'className='link'>Privacy</Link></li>
                        <li><Link to='/'className='link'>Terms</Link></li>
                    </ul>
                </div>
                <div className='col-subscribe'>
                    <h6>Subscribe to our newsletter</h6>
                    <p>Latest news, articles, and schemes to your inbox weekly.</p>
                    <div className='subscribe'>
                        <input type='email' placeholder='Enter your email' />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <div className='content'>
                    <div className='rights'>
                        <p>&copy; Sakthivel M. All rights reserved.</p>
                    </div>
                    <div>
                        <FaWhatsapp size={20} style={{color: '#d3d3d3', marginRight: '10px'}} />
                        <FaTwitter size={20} style={{color: '#d3d3d3', marginRight: '10px'}} />
                        <FaMailBulk size={20} style={{color: '#d3d3d3', marginRight: '10px'}} />
                        <FaFacebook size={20} style={{color: '#d3d3d3', marginRight: '10px'}} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
