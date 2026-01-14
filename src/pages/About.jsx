import Footer from '../components/Footer'
import styles from '../styles/About.module.css'

import Lady from '../assets/owner/Image.png'
import Lady1 from '../assets/owner/Image-1.png'
import Lady2 from '../assets/owner/Image-2.png'

import Img1A from '../assets/AboutPage/ImageA.png'
import Img1B from '../assets/AboutPage/ImageA-1.png'
import Img1C from '../assets/AboutPage/ImageA-2.png'

import Img2A from '../assets/AboutPage/ImageB.png'
import Img2B from '../assets/AboutPage/ImageB-1.png'
import Img2C from '../assets/AboutPage/ImageB-2.png'

import Img3A from '../assets/AboutPage/ImageC.png'
import Img3B from '../assets/AboutPage/ImageC-1.png'
import Img3C from '../assets/AboutPage/ImageC-2.png'

import ImgBreak from '../assets/AboutPage/ImageBrk.png'
import ImgBreak1 from '../assets/AboutPage/ImageBrk-1.png'
import ImgBreak2 from '../assets/AboutPage/ImageBrk-2.png'


function About(){
    return(
        <>
        <div className={styles.head}>
            <p className='heading1'>ABOUT</p>
        </div>
        <div className={styles.container}>
            <div>
                <p className={styles.cap}>Our Story</p>
            </div>
            <div className={styles.rightColumnContainer}>
                <div className={styles.AuthorInformation}>
                    <picture>
                        <source media='(min-width:1200px)' srcSet={Lady}/>
                        <source media='(min-width:800px)' srcSet={Lady1}/>
                        <img src={Lady2} alt='Author' className={styles.authorImg}/>
                    </picture>
                    <div className={styles.authorDetails}>
                        <p className='caption2'>Lily Smith</p>
                        <p className='heading4'>Owner</p>
                    </div>
                </div>
                <div className={styles.more}>
                    <p className='heading2'>Our Blooms was founded in honor of Lily Smith's loving aunts, Teresa and Beth.</p>
                </div>
                <div className={styles.upImg}>
                    <picture>
                        <source media='(min-width:1200px)' srcSet={Img1A}/>
                        <source media='(min-width:800px)' srcSet={Img1B}/>
                        <img src={Img1C}/>
                    </picture>
                    <picture>
                        <source media='(min-width:1200px)' srcSet={Img2A}/>
                        <source media='(min-width:800px)' srcSet={Img2B}/>
                        <img src={Img2C}/>
                    </picture>
                    <picture>
                        <source media='(min-width:1200px)' srcSet={Img3A}/>
                        <source media='(min-width:800px)' srcSet={Img3B}/>
                        <img src={Img3C}/>
                    </picture>
                </div>
                <div className={styles.bottomTxt}>
                    <p className='paragraph2'>Lily's journey with flowers began in the heart of Oregon, amidst the flourishing fields of her aunts' flower farm. It was there, surrounded by the abundance of nature, that she discovered her passion for floral design. From learning the names of each bloom to understanding the delicate balance of a bouquet, she absorbed the artistry of flowers like the rich Oregon soil.</p>
                    <p className='paragraph2'>Bloom & Co. is the expression of that lifelong passion, a place where her love for flowers translates into beautifully curated arrangements that bring joy and elegance to your spaces.</p>
                </div>
                <div className={styles.ImageBreak}>
                    <picture>
                        <source media='(min-width:1200px)' srcSet={ImgBreak}/>
                        <source media='(min-width:800px)' srcSet={ImgBreak1}/>
                        <img src={ImgBreak2}/>
                    </picture>
                </div>
                <div className='more2'>
                    <p className='paragraph2'>From humble beginnings, Bloom&Co has grown into a beloved local destination, known for its artistic arrangements, personal service, and commitment to quality.</p>
                    <p className='paragraph2'>Discover how we can add a touch of natural beauty to your next event.</p>
                </div>
                <button className='button_danger'>WORK A CONSULTATION</button>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default About;