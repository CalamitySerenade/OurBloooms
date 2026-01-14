import Footer from '../components/Footer'
import styles from '../styles/Gallery.module.css'
import WorkWithUs from '../components/WorkWithUs'
import Services from '../components/Services'

import img from '../assets/gallery/Image.png'
import img1 from '../assets/gallery/Image-1.png'
import img2 from '../assets/gallery/Image-2.png'
import img3 from '../assets/gallery/Image-3.png'
import img4 from '../assets/gallery/Image-4.png'
import img5 from '../assets/gallery/Image-5.png'
import img6 from '../assets/gallery/Image-6.png'
import img7 from '../assets/gallery/Image-7.png'
import img8 from '../assets/gallery/Image-8.png'

function Gallery(){
    return(
        <>
        <div className={styles.header}>
            <h1 className='heading1'>GALLERY</h1>
        </div>
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <p className='caption1'>SEASONAL ARRANGEMENTS</p>
            </div>
            <div className={styles.gallery}>
                <div className={styles.individual}>
                    <p className='caption2'>Dawn Bloom
                        <span className='heading4'>$55/Bunch</span>
                    </p>
                    <img src={img} alt='gallery image' className={styles.img}/>    
                </div>
                <div className={styles.individual1}>
                    <p className='caption2'>Solstice Stems
                        <span className='heading4'>$30/Bunch</span>
                    </p>
                    <img src={img1} alt='gallery image' className={styles.img1}/>    
                </div>
                <div className={styles.individual2}>
                    <p className='caption2'>Whisper Greens
                        <span className='heading4'>$120/Bunch</span>
                    </p>
                    <img src={img8} alt='gallery image' className={styles.img8}/>
                </div>
                <div className={styles.individual3}>
                    <p className='caption2'>Clarity Petals
                        <span className='heading4'>$55/Bunch</span>
                    </p>
                    <img src={img2} alt='gallery image' className={styles.img2}/>
                </div>
                <div className={styles.individual4}>
                    <p className='caption2'>River Stone
                        <span className='heading4'>$30/Bunch</span>
                    </p>
                    <img src={img3} alt='gallery image' className={styles.img3}/>
                </div>
                <div className={styles.individual5}>
                    <p className='caption2'>Moonlit Meadow
                        <span className='heading4'>$120/Bunch</span>
                    </p>
                    <img src={img4} alt='gallery image' className={styles.img4}/>
                </div>
                <div className={styles.individual6}>
                    <p className='caption2'>Ember Leaf
                        <span className='heading4'>$55/Bunch</span>
                    </p>
                    <img src={img5} alt='gallery image' className={styles.img5}/>
                </div>
                <div className={styles.individual7}>
                    <p className='caption2'>Skyline Bloom
                        <span className='heading4'>$75/Bunch</span>
                    </p>
                    <img src={img6} alt='gallery image' className={styles.img6}/>
                </div>
                <div className={styles.individual8}>
                    <p className='caption2'>Still Water
                        <span className='heading4'>$250/Bunch</span>
                    </p>
                    <img src={img7} alt='gallery image' className={styles.img7}/>
                </div>
            </div>
        </div>
        <Services/>
        <WorkWithUs/>
        <Footer/>
        </>
    )
}
export default Gallery;