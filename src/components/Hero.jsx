import logo1 from '../assets/logos/Logo.png'
import logo2 from '../assets/logos/Logo-1.png'
import logo from '../assets/logos/Logo-2.png'

import image from '../assets/hero_images/Hero.png'
import image1 from '../assets/hero_images/Hero1.png'
import image2 from '../assets/hero_images/Hero2.png'

function Hero(){
    return(
        <>
        <picture>
            <source media="(min-width: 1200px)" srcSet={logo1} />
            <source media="(min-width: 800px)" srcSet={logo2} />
            <img src={logo} alt="Ourblooms Logo" />
        </picture>

        <picture>
            <source media="(min-width: 1200px)" srcSet={image} />
            <source media="(min-width: 800px)" srcSet={image1} />
            <img src={image2} alt="Ourblooms Logo" />
        </picture>
        </>
    )
}
export default Hero;