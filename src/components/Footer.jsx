import foot from '../assets/footer/Image.png'
import foot1 from '../assets/footer/Image-1.png'
import foot2 from '../assets/footer/Image-2.png'
function Footer(){
    return(
        <>
        <footer>
        <picture>
            <source media="(min-width: 1200px)" srcSet={foot}/>
            <source media="(min-width: 800px)" srcSet={foot1}/>
            <img src={foot2}/>
          </picture>
        </footer>
        </>
    )
}
export default Footer;