import Image from 'next/image'

const Footer = () => (
    <footer className="footer">
        <div className="footer__logo">
            <Image
                src="/img/logo-green.png"
                alt="Natours logo"
                height={60}
                width={300}
                priority
            />
        </div>
        <ul className="footer__nav">
            <li>
                <a href="#">About Us</a>
            </li>
            <li>
                <a href="#">Download Apps</a>
            </li>
            <li>
                <a href="#">Become a guides</a>
            </li>
            <li>
                <a href="#">Careers</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
        </ul>
        <p className="footer__copyright">
            &copy; by Jonas Schmedtmann. Fell free to use this Project for your
            own purposes, EXCEPT producing your own course or tutorial.
        </p>
    </footer>
)

export default Footer
