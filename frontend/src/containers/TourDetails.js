import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { MapBox } from '../components/mapboxgl';

const DetailItem = ({ useTag, classContainer, classSvg, children }) => (
    <div className={classContainer}>
        <svg
            dangerouslySetInnerHTML={{ __html: useTag }}
            className={classSvg}
        />
        {children}
    </div>
);

const stripe = window.Stripe(
    'pk_test_51HnrF2KyEVMDo9Wn6KEslURceFslGebjrSODFs03WIqCuwsZeVKKZ3OWtR3wpnyzZnqFLdlc6jImGCPdVppmF6ON00NAZU5OLi'
);

const getCheckoutSession = async tourId => {
    try {
        const session = await axios.get(
            `https://mern-natours.herokuapp.com/api/v1/bookings/checkout-session/${tourId}`
        );
        console.log(session);
        await stripe.redirectToCheckout({
            sessionId: session.data.session.id,
        });
    } catch (error) {
        console.log(error);
        // showAlert('error', 'Something was wrong!');
    }
};

const TourDetails = props => {
    const [tour, setTour] = useState('');
    console.log(
        window.Stripe(
            'pk_test_51HnrF2KyEVMDo9Wn6KEslURceFslGebjrSODFs03WIqCuwsZeVKKZ3OWtR3wpnyzZnqFLdlc6jImGCPdVppmF6ON00NAZU5OLi'
        )
    );
    useEffect(() => {
        const getData = async () => {
            try {
                const resId = await axios.get(
                    `https://mern-natours.herokuapp.com/api/v1/tours?slug=${props.match.params.slug}&fields=id`
                );
                const resTour = await axios.get(
                    `https://mern-natours.herokuapp.com/api/v1/tours/${resId.data.data.data[0].id}`
                );
                setTour(resTour.data.data.data);
            } catch (err) {
                console.log(err);
            }
        };
        getData();
    }, []);

    return tour ? (
        <>
            <section className='section-header'>
                <div className='header__hero'>
                    <div className='header__hero-overlay'>&nbsp;</div>
                    <img
                        src={`https://mern-natours.herokuapp.com/img/tours/${tour.imageCover}`}
                        alt={tour.name}
                        className='header__hero-img'
                    />
                </div>
                <div className='heading-box'>
                    <h1 className='heading-primary'>
                        <span>{tour.name}</span>
                    </h1>
                    <div className='heading-box__group'>
                        <DetailItem
                            useTag='<use xlink:href="/img/icons.svg#icon-clock"/>'
                            classContainer='heading-box__detail'
                            classSvg='heading-box__icon'
                        >
                            <span className='heading-box__text'>{`${tour.duration} days`}</span>
                        </DetailItem>
                        <DetailItem
                            useTag='<use xlink:href="/img/icons.svg#icon-map-pin" />'
                            classContainer='heading-box__detail'
                            classSvg='heading-box__icon'
                        >
                            <span className='heading-box__text'>
                                {tour.startLocation.description}
                            </span>
                        </DetailItem>
                    </div>
                </div>
            </section>
            <section className='section-description'>
                <div className='overview-box'>
                    <div>
                        <div className='overview-box__group'>
                            <h2 className='heading-secondary ma-bt-lg'>
                                Quick facts
                            </h2>
                            <DetailItem
                                useTag='<use xlink:href="/img/icons.svg#icon-calendar" />'
                                classContainer='overview-box__detail'
                                classSvg='overview-box__icon'
                            >
                                <span className='overview-box__label'>
                                    Next date
                                </span>
                                <span className='overview-box__text'>
                                    {new Date(
                                        tour.startDates[0]
                                    ).toLocaleString('en-us', {
                                        month: 'long',
                                        year: 'numeric',
                                    })}
                                </span>
                            </DetailItem>
                            <DetailItem
                                useTag='<use xlink:href="/img/icons.svg#icon-trending-up" />'
                                classContainer='overview-box__detail'
                                classSvg='overview-box__icon'
                            >
                                <span className='overview-box__label'>
                                    Difficulty
                                </span>
                                <span className='overview-box__text'>
                                    {tour.difficulty}
                                </span>
                            </DetailItem>
                            <DetailItem
                                useTag='<use xlink:href="/img/icons.svg#icon-user" />'
                                classContainer='overview-box__detail'
                                classSvg='overview-box__icon'
                            >
                                <span className='overview-box__label'>
                                    Participants
                                </span>
                                <span className='overview-box__text'>
                                    {`${tour.maxGroupSize} People`}
                                </span>
                            </DetailItem>
                            <DetailItem
                                useTag='<use xlink:href="/img/icons.svg#icon-star" />'
                                classContainer='overview-box__detail'
                                classSvg='overview-box__icon'
                            >
                                <span className='overview-box__label'>
                                    Rating
                                </span>
                                <span className='overview-box__text'>
                                    {`${tour.ratingsAverage} / 5`}
                                </span>
                            </DetailItem>
                        </div>
                        <div className='overview-box__group'>
                            <h2 className='heading-secondary ma-bt-lg'>
                                Your tour guides
                            </h2>
                            {tour.guides &&
                                tour.guides.map(guide => (
                                    <div
                                        className='overview-box__detail'
                                        key={guide.id}
                                    >
                                        <img
                                            src={`https://mern-natours.herokuapp.com/img/users/${guide.photo}`}
                                            alt={`${guide.role}`}
                                            className='overview-box__img'
                                        />
                                        <span className='overview-box__label'>
                                            {guide.role === 'lead-guide'
                                                ? 'Lead Guide'
                                                : 'Guide'}
                                        </span>
                                        <span className='overview-box__text'>
                                            {guide.name}
                                        </span>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
                <div className='description-box'>
                    <h2 className='heading-secondary ma-bt-lg'>{`About ${tour.name} tour`}</h2>
                    {tour.description.split(['\n']).map(p => (
                        <p className='description__text'>{p}</p>
                    ))}
                </div>
            </section>
            <section className='section-pictures'>
                {tour.images &&
                    tour.images.map((img, i) => (
                        <div className='picture-box' key={`tour-image-${i}`}>
                            <img
                                src={`https://mern-natours.herokuapp.com/img/tours/${img}`}
                                alt={`${tour.name} Tour ${i + 1}`}
                                className={`picture-box__img picture-box__img--${
                                    i + 1
                                }`}
                            />
                        </div>
                    ))}
            </section>
            <MapBox tour={tour} />
            <section className='section-reviews'>
                <div className='reviews'>
                    {tour.reviews &&
                        tour.reviews.map(review => (
                            <div className='reviews__card' key={review.id}>
                                <div className='reviews__avatar'>
                                    <img
                                        src={`https://mern-natours.herokuapp.com/img/users/${review.user.photo}`}
                                        alt={`${review.user.name}`}
                                        className='reviews__avatar-img'
                                    />
                                    <h6 className='reviews__user'>
                                        {review.user.name}
                                    </h6>
                                </div>
                                <p className='reviews__text'>{review.review}</p>
                                <div className='reviews__rating'>
                                    {[1, 2, 3, 4, 5].map(star => (
                                        <svg
                                            // key={`start-${star}`}
                                            className={`reviews__star reviews__star--${
                                                review.rating >= star
                                                    ? 'active'
                                                    : 'inactive'
                                            }`}
                                            dangerouslySetInnerHTML={{
                                                __html:
                                                    '<use xlink:href="/img/icons.svg#icon-star" />',
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                </div>
            </section>
            <section className='section-cta'>
                <div className='cta'>
                    <div className='cta__img cta__img--logo'>
                        <img src='/img/logo-white.png' alt='Natours logo' />
                    </div>
                    <img
                        src={`https://mern-natours.herokuapp.com/img/tours/${tour.images[1]}`}
                        alt=''
                        className='cta__img cta__img--1'
                    />
                    <img
                        src={`https://mern-natours.herokuapp.com/img/tours/${tour.images[2]}`}
                        alt=''
                        className='cta__img cta__img--2'
                    />
                    <div className='cta__content'>
                        <h2 className='heading__secondary'>
                            WHAT ARE YOU WAITING FOR?
                        </h2>
                        <p className='cta__text'>{`${tour.duration} days. 1 adventure. Infinite memories. Make it yours today!`}</p>
                        <button
                            className='btn btn--green span-all-rows'
                            id='book-tour'
                            type='button'
                            data-tour-id={`${tour.id}`}
                            onClick={() => getCheckoutSession(tour.id)}
                        >
                            Book tour now!
                        </button>
                        {/* a.btn.btn--green.span-all-rows(href='/login') Log in to book a tour! */}
                    </div>
                </div>
            </section>
        </>
    ) : (
        <p>Loading...</p>
    );
};

export default TourDetails;
