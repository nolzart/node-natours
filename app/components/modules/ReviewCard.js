const ReviewCard = ({ review }) => {
    return (
        <div className="reviews__card">
            <div className="reviews__avatar">
                <img
                    src={`/img/users/${review.user.photo}`}
                    alt={`${review.user.name}`}
                    className="reviews__avatar-img"
                />
                <h6 className="reviews__user">{review.user.name}</h6>
            </div>
            <p className="reviews__text">{review.review}</p>
            <div className="reviews__rating">
                {[1, 2, 3, 4, 5].map(star => (
                    <svg
                        key={`start-${star}`}
                        className={`reviews__star reviews__star--${
                            review.rating >= star ? 'active' : 'inactive'
                        }`}
                        dangerouslySetInnerHTML={{
                            __html:
                                '<use xlink:href="/img/icons.svg#icon-star" />',
                        }}
                    />
                ))}
            </div>
        </div>
    )
}

export default ReviewCard
