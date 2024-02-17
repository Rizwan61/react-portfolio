import React from 'react'
import Slider from "react-slick";
import image1 from '../../assets/images/Blog/1.jpg'
import image2 from '../../assets/images/Blog/2.jpg'
import image3 from '../../assets/images/Blog/3.jpg'


function News() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 770,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };


    const portfolio = [
        {
            id: 1,
            path: <img src={image3} alt="Portfolio Image" />,
            title: "Development",
            heading: " Top 10 Tips To Grow Your Agency"
        },
        {
            id: 2,
            path: <img src={image1} alt="Portfolio Image" />,
            title: "Quote",
            heading: "There are many variations of passages of Lorem Ipsum available."
        },
        {
            id: 3,
            path: <img src={image2} alt="Portfolio Image" />,
            title: "Development , Gallery",
            heading: "Agency Works Only Under These Conditions"
        }



    ]
    return (
        <>
            <div className='py-16  dark:bg-black'>
                <div className='my-16 mx-5'>
                    <h1 className='text-6xl font-bold mb-3  dark:text-white '>Latest News</h1>
                    <p className='my-4 text-xl text-gray-500  dark:text-gray-500   '>There are many variations of passages of Lorem Ipsum available,
                      <br />  but the majority have suffered alteration.</p>
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
        </>
    )
}

export default News