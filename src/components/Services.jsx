import styles from '../styles/Services.module.css'

import mod1A from '../assets/module1/Image.png'
import mod1B from '../assets/module1/Image-1.png'
import mod1C from '../assets/module1/Image-2.png'

import mod2A from '../assets/module2/Image.png'
import mod2B from '../assets/module2/Image-1.png'
import mod2C from '../assets/module2/Image-2.png'

import mod3A from '../assets/module3/Image.png'
import mod3B from '../assets/module3/Image-1.png'
import mod3C from '../assets/module3/Image-2.png'
function Services(){
    return(
        <>
        <section>
            <div className={styles.servicesContent}>
            <div className={styles.sectionHead}>
                Services
            </div>
            <hr className='divider'/>
            <div className={styles.servMod1}>
                <div className={styles.serviceModule}>
                    <div>
                        <p className='heading1'>FLORAL INSTALLATIONS</p>
                        <p className='paragraph1'>We create clean, contemporary designs that elevate any environment, from intimate gatherings to grand events.</p>
                    </div>
                    <picture>
                        <source media='(min-width:1200px)' srcSet={mod1A}/>
                        <source media='(min-width:800px)' srcSet={mod1B}/>
                        <img src={mod1C} alr='Person Making Boquet'/>
                    </picture>
                </div>
            </div>

            <hr className='divider'/>
            <div className={styles.servMod2}>
                <div className={styles.serviceModule}>
                    <div>
                        <p className='heading1'>FLORAL INSTALLATIONS</p>
                        <p className='paragraph1'>We create clean, contemporary designs that elevate any environment, from intimate gatherings to grand events.</p>
                    </div>
                    <picture>
                        <source media='(min-width:1200px)' srcSet={mod2A}/>
                        <source media='(min-width:800px)' srcSet={mod2B}/>
                        <img src={mod2C} alr='Person Making Boquet'/>
                    </picture>
                </div>
            </div>    
            <hr className='divider'/>
            <div className={styles.servMod3}>
                <div className={styles.serviceModule}>
                    <div>
                        <p className='heading1'>CUSTOM FLORAL CONCEPTS</p>
                        <p className='paragraph1'>Our selection of locally sourced flora brings natural resilience and effortless elegance to your home.</p>
                    </div>
                    <picture>
                        <source media='(min-width:1200px)' srcSet={mod3A}/>
                        <source media='(min-width:800px)' srcSet={mod3B}/>
                        <img src={mod3C} alr='Person Making Boquet'/>
                    </picture>
                </div>
            </div>
            </div>
        </section>
        </>
    )
}
export default Services;