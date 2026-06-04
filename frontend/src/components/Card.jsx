import React from 'react'
import { Bookmark } from 'lucide-react';

const Card = () => {
    return (
        <div className='card'>
            <div className='top'>
                <img src="https://as2.ftcdn.net/v2/jpg/02/94/54/07/1000_F_294540722_VIwSWyrU6q781SkHWSlzUDXjfouRlj47.jpg" alt="" />
                <button>Save <Bookmark size={16} strokeWidth={2} /> </button>
            </div>
            <div className='middle'>
                <h3>Amazon <span>5 days ago</span></h3>
                <h2>Senior UI/UX Designer</h2>
                <div className='butto'>
                    <button>Part-Time</button>
                    <button>Senior-Level</button>
                </div>

            </div>
            <div className='bottom'>
                <h3>$120/hr <span>Mumbai,India</span></h3>
                <button>Apply Now</button>

            </div>
        </div>
    )
}

export default Card