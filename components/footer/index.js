import styles from './footer.module.css'

const Footer =()=>{
    return <div>
         <footer className={styles.main}>
       SMART'S JavaScript BLOG &copy; {new Date().getFullYear()}
      </footer>
    </div>
}

export default Footer