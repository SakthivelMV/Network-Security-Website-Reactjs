import React from "react";
import './Faq.css'

const Faq = () => {
    return (
        <div className='section-faq'>
            <div className='container'>
                <div className='col-1'>
                    <h3>Frequently asked questions</h3>
                    <p>Can't find the answer you're looking for?</p>
                    <p>Reach out to our <span>customer support</span> team.</p>
                </div>
                <div className='col-2'>
                    <div className='faq'>
                        <h5>Standard TSN?</h5>
                        <p>Industrial Ethernet is the tried-and-tested technology that meets these challenges.</p>
                    </div>
                    <div className='faq'>
                        <h5>Communication spectrum?</h5>
                        <p>our components for wireless communication cover various indoor as well as outdoor applications, even under the toughest conditions.</p>
                    </div>
                    <div className='faq'>
                        <h5>HRUGGED COM?</h5>
                        <p>Offer error-free operation with zero-packet-loss technology across an extended temperature range.</p>
                    </div>
                    <div className='faq'>
                        <h5>Networking in the Digital Enterprise?</h5>
                        <p>Reliable and Efficient Interaction between OT and IT networks follows a comprehensive approach..</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq