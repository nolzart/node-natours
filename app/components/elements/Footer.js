const Footer = () => (
    <footer className="footer">
        <div className="footer__logo">
            <img src="/img/logo-green.png" alt="Natours logo" />
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
            &copy; by{' '}
            <a
                style={{ color: '#777' }}
                href="https://github.com/nolzart/"
                target="_blank"
                rel="noreferrer"
            >
                {' '}
                nolzart
            </a>
        </p>
    </footer>
)

export default Footer
