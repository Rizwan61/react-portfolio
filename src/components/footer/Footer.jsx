import React from 'react'
import logo from '../../assets/images/logo.png'
import { CiFacebook } from "react-icons/ci";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";



function Footer() {
    return (
        <div className='bg-black py-5  grid grid-cols-4'>

            <div className='text-white grid grid-cols-1'>
                <img src={logo} alt="" className='ms-16' style={{ width: 150 }} />
            </div>
            <div className='flex flex-wrap items-center justify-center gap-5 my-5'>
                <div className="text-white flex flex-wrap gap-4">
                    <CiFacebook />
                    <TiSocialTwitterCircular />
                    <TiSocialLinkedinCircular />
                    <SlSocialInstagram />
                </div>
                <div className="copyright text-white ">
                    <span className='text-sm'>© 2022. All rights reserved by Rainbow-Themes.</span>
                </div>
            </div>

        </div>
    )
}

export default Footer