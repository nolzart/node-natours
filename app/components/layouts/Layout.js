import Header from '../elements/Header'
import Footer from '../elements/Footer'

const Layout = ({ children }) => (
    <>
        <Header />
        {children}
        <Footer />
    </>
)

export default Layout
