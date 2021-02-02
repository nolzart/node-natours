const GuideDetails = guide => {
    return (
        <div className="overview-box__detail">
            <img
                src={`/img/users/${guide.photo}`}
                alt={`${guide.role}`}
                className="overview-box__img"
            />
            <span className="overview-box__label">
                {guide.role === 'lead-guide' ? 'Lead Guide' : 'Guide'}
            </span>
            <span className="overview-box__text">{guide.name}</span>
        </div>
    )
}

export default GuideDetails
