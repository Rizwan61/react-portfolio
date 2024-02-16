import React from 'react'
import image1 from '../../assets/images/textinomial/1.jpg'
import image2 from '../../assets/images/textinomial/2.jpg'
import image3 from '../../assets/images/textinomial/3.jpg'
import image4 from '../../assets/images/textinomial/4.jpg'
import image5 from '../../assets/images/textinomial/5.jpg'
import image6 from '../../assets/images/textinomial/6.jpg'
import image7 from '../../assets/images/textinomial/7.jpg'
import image8 from '../../assets/images/textinomial/8.jpg'


export default function CustomerService() {
    const team = [
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
        }
    ]
    return (
        <>
            <div className='py-[80px]  text-center dark:bg-[#191919]'>
                <div className='my-10 w-[75%] mx-auto'>
                    <p className='text-4xl  font-normal  dark:text-white	'>Phenomenal Customer Service! I'm just starting out with the team helped me so much with integrating this into my website. Highly recommend.</p>
                </div>

                <div className=" w-[500px]   grid grid-rows-2 mx-auto grid-cols-5 place-content-center	  gap-4">
                    {
                        team.map((item) => {
                            return (<div key={item.id}>

                                <img className='rounded-2xl ' src={item.path} alt='image is not found' />
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
