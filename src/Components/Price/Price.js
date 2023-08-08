import React from 'react'
import './Price.css'

const Price = () => {
    return (
        <div className='pricing'>
            <div className='container'>
                <div className='top-content'>
                    <div>
                        <h2>Everything your business need for Rs.2599 per month</h2>
                        <p>Includes every feature we offer  unlimited projects and unlimited users.</p>
                    </div>
                    <div className='btn-div'>
                        <button className='press'>Get started today</button>
                    </div>
                </div>
                <div className='bottom-content'>
                    <div className='card'>
                        <h3>Secure communication in industrial networks</h3>
                        <p>Growing IT/OT integration combines production and office networks. At the same time, the demand for remote accesses to OT networks is increasing.</p>
                    </div>
                    <div className='card'>
                        <div>
                            <p>IT-OT convergence starts with profound consulting.</p>
                        </div>
                        <div>
                            <p>Implementing an industrial network solution.</p>
                        </div>
                        <div>
                            <p>Goes for both existing industrial networks or setting up data networks.</p>
                        </div>
                        <div>
                            <p>We perform this evaluation review with you.</p>
                        </div>
                        <div>
                            <p>Develop a strategy and roadmap. .</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div>
                            <p>Saves both Time and Costs .</p>
                        </div>
                        <div>
                            <p>Ensures the project will be smoothly implemented.</p>
                        </div>
                        <div>
                            <p>Health Check which provides reliable and explicit documentation.</p>
                        </div>
                        <div>
                            <p>Our network experts will help you analyze the results and derive recommendations for action.</p>
                        </div>
                        <div>
                            <p>Industrial communication networks can open up tremendous opportunities.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Price