import Hero from '../components/Hero'
import Footer from '../components/Footer.jsx'
import c from '../assets/carousel_images/Image.png'
import c1 from '../assets/carousel_images/Image-1.png'
import c2 from '../assets/carousel_images/Image-2.png'
import c3 from '../assets/carousel_images/Image-3.png'
import c4 from '../assets/carousel_images/Image-4.png'
import sec1 from '../assets/section_images/sec1.png'
import sec2 from '../assets/section_images/sec2.png'
import sec3 from '../assets/section_images/sec3.png'
import midSec from '../assets/mid_sec/Image.png'
import midSec1 from '../assets/mid_sec/Image-1.png'
import midSec2 from '../assets/mid_sec/Image-2.png'
import WorkWithUs from '../components/WorkWithUs.jsx'

function Home(){
    return(
        <>
        <Hero/>
        {/* Writing "Main" section */}
          <div className='who_we_are_container'>
            <p className='caption1'>WHO WE ARE</p>
            <h2 className='heading2'>We're Our Blooms® and we're here to help you find your floral story.</h2>
            <button className='button_danger caption1'>About Us</button>
          </div>
          <div className='carousel'>
            <img src={c} alt='carousel img'/>
            <img src={c1} alt='carousel img'/>
            <img src={c2} alt='carousel img'/>
            <img src={c3} alt='carousel img'/>
            <img src={c4} alt='carousel img'/>
          </div>
          <div className='what_we_do'>
            <p className='heading1'>WHAT WE DO</p>
            <p className='paragraph1'>We bring a touch of that simple magic into your world.</p>
          </div>
          <hr className='divider'/>

          <div className='section1'>
            <p className='heading1'>1</p>
            <img src={sec1} alt="sect-img"/>
            <p className='heading1'>FLORAL INSTALLATIONS</p>
            <p className='paragraph1'>Living art for homes, businesses, and events.</p>
            <hr className='divider'/>
          </div>
          <div className='section2'>
            <p className='heading1'>2</p>
            <img src={sec2} alt="sect-img"/>
            <p className='heading1'>NATIVE PLANT ARRANGEMENTS</p>
            <p className='paragraph1'>Whether it's a private retreat or a public space, we craft floral experiences that bloom beyond expectations.</p>
            <hr className='divider'/>
          </div>
          <div className='section3'>
            <p className='heading1'>3</p>
            <img src={sec3} alt="sect-img"/>
            <p className='heading1'>CUSTOM FLORAL CONCEPTS</p>
            <p className='paragraph1'>Your vision, our blooms. We build arrangements that are both personal and exquisitely simple. Whether it's a private retreat or a public space, we craft floral experiences that bloom beyond expectations.</p>
            <hr className='divider'/>
          </div>

          <picture>
            <source media="(min-width: 1200px)" srcSet={midSec}/>
            <source media="(min-width: 800px)" srcSet={midSec1}/>
            <img src={midSec2}/>
          </picture>
          <WorkWithUs/>
          <Footer/>
        </>
    )
}
export default Home;