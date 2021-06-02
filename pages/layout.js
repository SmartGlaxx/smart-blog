import Header from '../components/header'
import Footer from '../components/footer'
const Layout = ({children})=>{

    return (
        <>
        <div ><Header /></div>
        <div className = 'main' >
         {children}
        </div>
        <Footer />
        </>
    )
}

export default Layout