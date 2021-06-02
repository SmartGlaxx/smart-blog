import {useState} from 'react'
import NavLink from 'next/link'
import styles from './header.module.css'
import Button from '@material-ui/core/Button'
import {FaBars, FaTimes} from "react-icons/fa"

const Header = ()=>{
    
    const [menuOpen, setMenuOpen] = useState(false)
    // const [closeMenu, setCloseMenu] = useState(true)

     const openMenu =()=>{
        setMenuOpen(true)
    }   

    
    const closeMenu =()=>{
        setMenuOpen(false)
    }  

    return <div className={styles.main} >
    {menuOpen && <div className={styles.overlay}></div>}
    {menuOpen && <div className={styles.menuNav}>
        <button onClick={()=>closeMenu()} className={styles.close}><FaTimes/></button>
        <ul className={styles.menuUl}>
        <li className={styles.menuListItems}>
            <NavLink href='#'  >News </NavLink>
        </li>
        <li className={styles.menuListItems}>
            <NavLink href='#' >Contact Us</NavLink>
        </li>
        </ul>
    </div>}
    <NavLink href='/' ><span className={styles.title}>Smart's JavaScript Blog</span></NavLink>
     <button className={styles.menuicon} onClick={()=>setMenuOpen(true)}><FaBars /></button>
    <ul className ={styles.headerList}>
        <li className={styles.headerListItems}>
            <NavLink href='#'  >News </NavLink>
        </li>
        <li className={styles.headerListItems}>
            <NavLink href='#' >Contact Us</NavLink>
        </li>
    </ul>

  


    </div>
    
}

export default Header