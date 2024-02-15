import React from 'react'
import image1 from '../../assets/images/team/team1.jpg'
import image2 from '../../assets/images/team/team2.jpg'
import image3 from '../../assets/images/team/team3.jpg'
import image4 from '../../assets/images/team/team4.jpg'
import image5 from '../../assets/images/team/team5.jpg'
import image6 from '../../assets/images/team/team6.jpg'

function TeamSkill() {
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
        }
    ]
    return (
        <>
            <div className='my-[60px]'>
                <div className='my-10 mx-5'>
                    <h3 className='text-6xl font-bold mb-3 text-black'>Skilled Team</h3>
                    <span className='my-4 text-gray-500 	 '>There are many variations of passages of Lorem Ipsum available,
                        <br />   but the majority have suffered alteration.</span>
                </div>
            </div>
            <div className=" w-100 h-100 grid grid-rows-2 mx-5  grid-flow-col gap-4">
                {
                    team.map((item) => {
                        return (<div key={item.id}>

                            <img className='rounded-xl' src={item.path} alt='image is not found' />
                        </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default TeamSkill

