import styles from '../styles/Navbar.module.css';
import {Link} from 'react-router-dom';
function Navbar(){
    return(
        <>
        <nav className={styles.navbar}>
            <p className='display'>
                Our Blooms
            </p>
            <ul className={styles.ul}>
                <Link to='/gallery'><li className='caption1'>GALLERY</li></Link>
                <Link to='/about'><li className='caption1'>ABOUT</li></Link>
                <Link to='/mailto:wilson.656726@nps.k12.nj.us'><li className='caption1'>CONTACT</li></Link>
            </ul>
        </nav>
        <hr className='divider'/>
        </>
    )
}
export default Navbar;