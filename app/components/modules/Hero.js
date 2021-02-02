const Hero = ({ imageCover, name }) => {
    return (
        <div className="header__hero">
            <div className="header__hero-overlay">&nbsp;</div>
            <img
                src={`/img/tours/${imageCover}`}
                alt={name}
                className="header__hero-img"
            />
        </div>
    )
}

export default Hero
