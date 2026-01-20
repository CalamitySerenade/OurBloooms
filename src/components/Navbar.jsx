import styles from '../styles/Navbar.module.css';
import {Link} from 'react-router-dom';
import { Menu,X } from 'lucide-react';
import {useState} from 'react'
function Navbar(){
    const [isOpen,setIsOpen]=useState(false);
    function toggle(){
        setIsOpen(!isOpen);
    }
    return(
        <>
        <nav className={styles.navbar}>
            <p className='display'>
                <Link to='/'><p className='caption1'>Our Blooms</p></Link>
            </p>
            <ul className={styles.ul}>
                <Link to='/gallery'><li className='caption1'>GALLERY</li></Link>
                <Link to='/about'><li className='caption1'>ABOUT</li></Link>
                <a href='mailto:wilson.656726@nps.k12.nj.us'><li className='caption1'>CONTACT</li></a>
            </ul>
        </nav>

        <nav className={styles.mobileNavbar}>
            <p className='display'>
                <Link to='/'><p className='caption1'>O.B.</p></Link>
            </p>
            {isOpen? <X onClick={toggle}/>:<Menu onClick={toggle}/>}
        </nav>
        {isOpen && (<div>
            <ul className={styles.mobileUl}>
                <Link to='/gallery'><li className='caption1'>GALLERY</li></Link>
                <Link to='/about'><li className='caption1'>ABOUT</li></Link>
                <a href='mailto:wilson.656726@nps.k12.nj.us'><li className='caption1'>CONTACT</li></a>
                </ul>
        </div>)}
        <hr className='divider'/>
        </>
    )
}
export default Navbar;