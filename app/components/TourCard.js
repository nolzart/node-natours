import Link from 'next/link';

const DetailItem = ({ content, useTag }) => (
    <div className='card__data'>
        <svg
            dangerouslySetInnerHTML={{ __html: useTag }}
            className='card__icon'
        />
        <span>{content}</span>
    </div>
);

const TourCard = ({ tour }) => {
    const useTagStartLocation =
        '<use xlink:href="/img/icons.svg#icon-map-pin" />';
    const useTagStartDates =
        '<use xlink:href="/img/icons.svg#icon-calendar" />';
    const useTagLocationsLength =
        '<use xlink:href="/img/icons.svg#icon-flag" />';
    const useTagSize = '<use xlink:href="/img/icons.svg#icon-user" />';

    return (
        <div className='card'>
            <div className='card__header'>
                <div className='card__picture'>
                    {/* <div className='card__picture-overlay'>&nsb;</div> */}
                    <div className='card__picture-overlay'></div>
                    <img
                        src={`/img/tours/${tour.imageCover}`}
                        alt={tour.name}
                        className='card__picture-img'
                    />
                </div>
                <h3 className='heading-tertiary'>
                    <span>{tour.name}</span>
                </h3>
            </div>
            <div className='card__details'>
                <h4 className='card__sub-heading'>
                    {`${tour.difficulty} ${tour.duration}-day tour`}
                </h4>
                <p className='card__text'>{tour.summary}</p>
                <DetailItem
                    useTag={useTagStartLocation}
                    content={tour.startLocation.description}
                />
                <DetailItem
                    useTag={useTagStartDates}
                    content={new Date(tour.startDates[0]).toLocaleString(
                        'en-us',
                        {
                            month: 'long',
                            year: 'numeric',
                        }
                    )}
                />
                <DetailItem
                    useTag={useTagLocationsLength}
                    content={tour.locations.length}
                />
                <DetailItem useTag={useTagSize} content={tour.maxGroupSize} />
            </div>
            <div className='card__footer'>
                <p>
                    <span className='card__footer-value'>{`$${tour.price}`}</span>
                    <span className='card__footer-text'> per person </span>
                </p>
                <p className='card__ratings'>
                    <span className='card__footer-value'>
                        {tour.ratingsAverage}
                    </span>
                    <span className='card__footer-text'>{`rating (${tour.ratingsQuantity})`}</span>
                </p>
                <Link href={`/tour/${tour.slug}`}>
                    <a className='btn btn--green btn--small'>Details</a>
                </Link>
            </div>
        </div>
    );
};

export default TourCard;
