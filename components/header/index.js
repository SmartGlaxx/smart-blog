import NavLink from 'next/link'
import styles from './header.module.css'



const Header = ()=>{

     
    return <div className={styles.main} >
    <NavLink href='/' ><span className={styles.title}>Smart's JavaScript Blog</span></NavLink>
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