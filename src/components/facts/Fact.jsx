import React from 'react'
import CountUp from 'react-countup';

function Fact() {
  const fact = [
    {
      id: 1,

      heading: "800",
      content: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those."
    },
    {
      id: 2,

      heading: "1200",
      content: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those."
    },
    {
      id: 3,

      heading: "700",
      content: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those."
    }
  ]
  return (
    <div className='my-[60px]'>
      <div className='text-center '>
        <h3 className='my-5 text-2xl font-medium	text-rose-600'>Our Fun Facts</h3>
        <h2 className='text-4xl text-center font-semibold	 '>Completed 1200+ Projects <br />
          Successfully.</h2>
      </div>
      <div className=' grid  grid-cols-3    rounded-lg '>

        {
          fact.map((item) => {
            return (<div key={item.id}>
              <div class="  mx-3 p-16 text-center   rounded-xl">
                
                <div class="font-bold text-2xl my-3 text-rose-600   ">
                <CountUp 
                
                  start={0}
                  end={item.heading} 
                  delay={1}
                  enableScrollSpy={true}
                
                />
                  
                  
                 +</div>
                <p class=" text-base px-4  ">{item.content}</p>
              </div>


            </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default Fact