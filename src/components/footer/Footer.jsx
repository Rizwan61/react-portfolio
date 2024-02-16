import React from 'react'
import logo from '../../assets/images/logo.png'
import { CiFacebook } from "react-icons/ci";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";



function Footer() {
    return (
        <div className='bg-black py-5 grid grid-cols-2 place-content-center mx-auto'>

            <div className='text-white'>
                <img src={logo} alt="" className='ms-16' style={{ width: 150 }} />
            </div>
            <div className='grid grid-cols-2 place-content-center'>
            <div className="text-white grid grid-cols-12 place-content-center">
                <CiFacebook />
                <TiSocialTwitterCircular />
                <TiSocialLinkedinCircular />
                <SlSocialInstagram />
            </div>
            <div className="copyright text-white grid place-content-center me-3">
                <span className='text-sm'>© 2022. All rights reserved by Rainbow-Themes.</span>
            </div>
            </div>

        </div>
    )
}

export default Footer