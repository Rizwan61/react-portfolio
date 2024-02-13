import React from 'react'
import logo from '../../assets/images/logo.png'

const Navbar = () => {
  const NavItems = [
    {
      id: 1,
      title: "Home",
      section: "#home"
    },
    {
      id: 2,
      title: "Features",
      section: "#features"
    },
    {
      id: 3,
      title: "Portfolio",
      section: "#portfolio"
    },
    {
      id: 4,
      title: "Facts",
      section: "#facts"
    },
    {
      id: 5,
      title: "Our Team",
      section: "#team"
    },
    {
      id: 6,
      title: "Testimonials",
      section: "#testimonials"
    },
    {
      id: 7,
      title: "News",
      section: "#news"
    },
    {
      id: 8,
      title: "Clients",
      section: "#clients"
    },
  ]
  return (
    <>
      <div className=''>
        <div className='text-white'>
          <img src={logo} alt="" style={{ width: 250 }} />
        </div>
        <div className=''>
          {
            NavItems.map((item) => {
              <div key={item.id}>
                return <a href={item.section} className='text-white p-3 px-5 hover:text-red-600 font-bold text-lg inline-block'> {item.title} </a>
              </div>
            })
          }
        </div>
        <button className=''>LET'S TALK</button>

      </div>


    </>
  )
}

export default Navbar