
import './App.css'
import FeatureCard from './components/featurecard/FeatureCards'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Portfolio from './components/portfolio/Portfolio'
import Fact from './components/facts/Fact'
import TeamSkill from './components/teamskill/TeamSkill'
import CustomerService from './components/customerservice/CustomerService'
import News from './components/news/News'

function App() {
  

  return (
    <>
      <section id='home' className='bg-black'>
        <div className='container mx-auto max-w-[1340px]'>
          <Navbar />
          <Hero />
        </div>
      </section>

      <section id='features'>
        <div className='container mx-auto max-w-[1340px]'>
         <FeatureCard />
        </div>
      </section>
      <section id='portfolio'>
        <div className='container mx-auto max-w-[1340px]'>
         <Portfolio />
        </div>
      </section>
      <section id='facts'>
        <div className='container mx-auto max-w-[1340px]'>
        <Fact />
        </div>
      </section>
      <section id='team'>
        <div className='container mx-auto max-w-[1340px]'>
        <TeamSkill />
        </div>
      </section>
      <section id='testimonials'>
        <div className='container mx-auto max-w-[1340px]'>
       <CustomerService/>
        </div>
      </section>
      <section id='News'>
        <div className='container mx-auto max-w-[1340px]'>
        <News />
        </div>
      </section>

    </>
  )
}

export default App
