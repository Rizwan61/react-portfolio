import React from 'react'
import Slider from "react-slick";
import image1 from '../../assets/images/portfolio-01.jpg'
import image2 from '../../assets/images/portfolio-02.jpg'
import image3 from '../../assets/images/portfolio-03.jpg'
import image4 from '../../assets/images/portfolio-04.jpg'
import image5 from '../../assets/images/portfolio-05.jpg'
import image6 from '../../assets/images/portfolio-06.jpg'





function Portfolio() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };


    const portfolio = [
        {
            id: 1,
            path: <img src={image1} alt="Portfolio Image" />,
            title: "Development",
            heading: "Getting tickets to the next show"
        },
        {
            id: 2,
            path: <img src={image2} alt="Portfolio Image" />,
            title: "Freelancer",
            heading: "The Language of Developer"
        },
        {
            id: 3,
            path: <img src={image3} alt="Portfolio Image" />,
            title: "Development",
            heading: "How To Find The Right Agency For Your Specific Product"
        },
        {
            id: 4,
            path: <img src={image4} alt="Portfolio Image" />,
            title: "Mobile App",
            heading: "The Ultimate Guide To Agency"
        },
        {
            id: 5,
            path: <img src={image5} alt="Portfolio Image" />,
            title: "Graphic",
            heading: "How To Turn Your Agency From Zero To Hero"
        },
        {
            id: 6,
            path: <img src={image6} alt="Portfolio Image" />,
            title: "Development",
            heading: "Getting tickets to the next show"
        }


    ]


    return (
        <div className='my-10'>
            <div className='my-10 mx-5'>
                <h1 className='text-6xl font-bold mb-3 '>Our Portfolio</h1>
                <p className='my-4'>There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration.</p>
            </div>

            <div className=" ">
                <Slider {...settings}>

                    {portfolio.map(item => (
                        <div key={item.id} className='px-5 relative'>

                            <div className=' relative '  >

                                {item.path}
                                <div className='hover:bg-red-300 absolute opacity-90 z-10 w-full h-full top-0 left-0 '></div>
                            </div>
                            <div className='absolute bottom-5 p-5 left-0 z-20'>
                                <p className='text-white px-5 mb-4' >{item.title}</p>
                                <h2 className='text-white px-5 mb-4 text-3xl' >{item.heading}</h2>

                            </div>




                        </div>

                    ))}
                </Slider>
            </div>





        </div>
    )
}

export default Portfolio