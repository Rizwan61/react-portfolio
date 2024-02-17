import React from 'react'
import image1 from '../../assets/images/clients/brand1.png'
import image2 from '../../assets/images/clients/brand2.png'
import image3 from '../../assets/images/clients/brand3.png'
import image4 from '../../assets/images/clients/brand4.png'
import image5 from '../../assets/images/clients/brand5.png'
import image6 from '../../assets/images/clients/brand6.png'
import image7 from '../../assets/images/clients/brand1.png'
import image8 from '../../assets/images/clients/brand3.png'
import image9 from '../../assets/images/clients/brand4.png'

export default function Clients() {
    const clients = [
        {
            id: 1,
            path: image1,
            heading: "text"
        },
        {
            id: 1,
            path: image2,
            heading: "text"
        },
        {
            id: 1,
            path: image3,
            heading: "text"
        },
        {
            id: 1,
            path: image4,
            heading: "text"
        },
        {
            id: 1,
            path: image5,
            heading: "text"
        },
        {
            id: 1,
            path: image6,
            heading: "text"
        },
        {
            id: 1,
            path: image7,
            heading: "text"
        },
        {
            id: 1,
            path: image8,
            heading: "text"
        },
        {
            id: 1,
            path: image9,
            heading: "text"
        }
    ]
    return (
        <>
            <div className="  grid grid-cols-4 gap-5 mx -5 p-10 md:grid-cols-6 dark:bg-[#191919]  ">
                {
                    clients.map((item) => {
                        return (<div key={item.id}>

                            <img className='w-24 contrast-50    :hover:text-white 	' src={item.path} alt='image is not found' />
                        </div>
                        )
                    })
                }
            </div>
        </>
    )
}
