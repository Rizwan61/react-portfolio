import React from 'react'
import { LuUsers } from "react-icons/lu";
import { MdPhotoCamera } from "react-icons/md";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaConnectdevelop } from "react-icons/fa6";




const FeatureCard = () => {

    const cards = [
        {
            id: 1,
            icon: <FaBarsStaggered />,
            heading: "Business Strategy",
            content: "I throw myself down among the tall grass by the stream as I lie close to the earth."
        },
        {
            id: 2,
            icon:<FaConnectdevelop />,
            heading: "Website Development",
            content: "I throw myself down among the tall grass by the stream as I lie close to the earth."
        },
        {
            id: 3,
            icon: <LuUsers />,
            heading: "Marketing & Reporting",
            content: "I throw myself down among the tall grass by the stream as I lie close to the earth."
        },
        {
            id: 4,
            icon: <LuUsers />,
            heading: "Website Development",
            content: "I throw myself down among the tall grass by the stream as I lie close to the earth."
        },
        {
            id: 5,
            icon: <MdPhotoCamera />,
            heading: "Marketing & Reporting",
            content: "I throw myself down among the tall grass by the stream as I lie close to the earth."
        },
        {
            id: 6,
            icon: <LuUsers />,
            heading: "Website Development",
            content: "I throw myself down among the tall grass by the stream as I lie close to the earth."
        }
    ]

    return (

        <div className=' grid  grid-cols-12    shadow-lg  overflow-hidden dark:bg-[#191919]   hover:text-white  hover:cursor-pointer bg-gray-100'>
            {
                cards.map(item => {
                    return <div key={item.id}>
                        <div class="bg-gray-300 dark:bg-black dark:text-white  bgg rounded-xl">
                            <div class="font-bold  px-4 pt-10 pb-3 text-7xl">{item.icon}</div>
                            <div class="font-bold text-2xl  px-4  py-3">{item.heading}</div>
                            <p class=" text-base px-4  pt-3 pb-8 ">{item.content}</p>
                        </div>
                        
                       
                    </div>
                })
            }
            
        </div>

    )
}

export default FeatureCard