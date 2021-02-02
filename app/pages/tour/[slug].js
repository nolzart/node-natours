import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'

import MapboxGl from '@/components/modules/mapboxgl'
import Loader from '@/components/elements/Loader'
import { getStripe, getCheckoutSession } from '@/utils/stripe'
import * as tourActions from '@/store/actions/tourActions'
import { wrapper } from '@/store/store'
import ReviewCard from '@/components/modules/ReviewCard'
import Hero from '@/components/modules/Hero'
import GuideDetails from '@/components/modules/GuideDetails'

const DetailItem = ({ icon, classContainer, classSvg, children }) => (
    <div className={classContainer}>
        <svg
            dangerouslySetInnerHTML={{
                __html: `<use xlink:href="/img/icons.svg#icon-map-${icon}" />`,
            }}
            className={classSvg}
        />
        {children}
    </div>
)

export const getServerSideProps = wrapper.getServerSideProps(
    async ({ store, params }) =>
        await store.dispatch(tourActions.getTour(params.slug))
)

const TourDetails = () => {
    const { tour } = useSelector(state => state.tour)
    const { isAuthenticated } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const stripe = getStripe()
    const router = useRouter()
    const { slug } = router.query

    const getTour = useCallback(slug => dispatch(tourActions.getTour(slug)), [
        dispatch,
    ])

    useEffect(() => getTour(slug), [slug, getTour])

    return Object.entries(tour).length === 0 ? (
        <Loader />
    ) : (
        <>
            <Head>
                <title>{`Tour | ${tour.name}`}</title>
            </Head>
            <section className="section-header">
                <Hero imageCover={tour.imageCover} name={tour.name} />
                <div className="heading-box">
                    <h1 className="heading-primary">
                        <span>{tour.name}</span>
                    </h1>
                    <div className="heading-box__group">
                        <DetailItem
                            icon="clock"
                            classContainer="heading-box__detail"
                            classSvg="heading-box__icon"
                        >
                            <span className="heading-box__text">{`${tour.duration} days`}</span>
                        </DetailItem>
                        <DetailItem
                            icon="map-pin"
                            classContainer="heading-box__detail"
                            classSvg="heading-box__icon"
                        >
                            <span className="heading-box__text">
                                {tour.startLocation.description}
                            </span>
                        </DetailItem>
                    </div>
                </div>
            </section>
            <section className="section-description">
                <div className="overview-box">
                    <div>
                        <div className="overview-box__group">
                            <h2 className="heading-secondary ma-bt-lg">
                                Quick facts
                            </h2>
                            <DetailItem
                                icon="calendar"
                                classContainer="overview-box__detail"
                                classSvg="overview-box__icon"
                            >
                                <span className="overview-box__label">
                                    Next date
                                </span>
                                <span className="overview-box__text">
                                    {new Date(
                                        tour.startDates[0]
                                    ).toLocaleString('en-us', {
                                        month: 'long',
                                        year: 'numeric',
                                    })}
                                </span>
                            </DetailItem>
                            <DetailItem
                                icon="trending-up"
                                classContainer="overview-box__detail"
                                classSvg="overview-box__icon"
                            >
                                <span className="overview-box__label">
                                    Difficulty
                                </span>
                                <span className="overview-box__text">
                                    {tour.difficulty}
                                </span>
                            </DetailItem>
                            <DetailItem
                                icon="user"
                                classContainer="overview-box__detail"
                                classSvg="overview-box__icon"
                            >
                                <span className="overview-box__label">
                                    Participants
                                </span>
                                <span className="overview-box__text">
                                    {`${tour.maxGroupSize} People`}
                                </span>
                            </DetailItem>
                            <DetailItem
                                icon="star"
                                classContainer="overview-box__detail"
                                classSvg="overview-box__icon"
                            >
                                <span className="overview-box__label">
                                    Rating
                                </span>
                                <span className="overview-box__text">
                                    {`${tour.ratingsAverage} / 5`}
                                </span>
                            </DetailItem>
                        </div>
                        <div className="overview-box__group">
                            <h2 className="heading-secondary ma-bt-lg">
                                Your tour guides
                            </h2>
                            {tour.guides &&
                                tour.guides.map(guide => (
                                    <GuideDetails
                                        key={guide.id}
                                        guide={guide}
                                    />
                                ))}
                        </div>
                    </div>
                </div>
                <div className="description-box">
                    <h2 className="heading-secondary ma-bt-lg">{`About ${tour.name} tour`}</h2>
                    {tour.description.split(['\n']).map((p, i) => (
                        <p className="description__text" key={`paragraph-${i}`}>
                            {p}
                        </p>
                    ))}
                </div>
            </section>
            <section className="section-pictures">
                {tour.images &&
                    tour.images.map((img, i) => (
                        <div className="picture-box" key={`tour-image-${i}`}>
                            <img
                                src={`/img/tours/${img}`}
                                alt={`${tour.name} Tour ${i + 1}`}
                                className={`picture-box__img picture-box__img--${
                                    i + 1
                                }`}
                            />
                        </div>
                    ))}
            </section>
            <section className="section-map">
                <MapboxGl locations={tour.locations} />
            </section>

            <section className="section-reviews">
                <div className="reviews">
                    {tour.reviews &&
                        tour.reviews.map(review => (
                            <ReviewCard key={review.id} review={review} />
                        ))}
                </div>
            </section>
            <section className="section-cta">
                <div className="cta">
                    <div className="cta__img cta__img--logo">
                        <Image
                            src="/img/logo-white.png"
                            alt="Natours logo"
                            height={100}
                            width={195}
                            priority
                        />
                    </div>
                    <img
                        src={`/img/tours/${tour.images[1]}`}
                        alt={`${tour.name} Picture`}
                        className="cta__img cta__img--1"
                    />
                    <img
                        src={`/img/tours/${tour.images[2]}`}
                        alt={`${tour.name} Picture`}
                        className="cta__img cta__img--2"
                    />
                    <div className="cta__content">
                        <h2 className="heading__secondary">
                            WHAT ARE YOU WAITING FOR?
                        </h2>
                        <p className="cta__text">{`${tour.duration} days. 1 adventure. Infinite memories. Make it yours today!`}</p>
                        {isAuthenticated ? (
                            <button
                                className="btn btn--green span-all-rows"
                                id="book-tour"
                                type="button"
                                onClick={() =>
                                    getCheckoutSession(tour.id, stripe)
                                }
                            >
                                Book tour now!
                            </button>
                        ) : (
                            <Link href="Login">
                                <a className="btn btn--green span-all-rows">
                                    Log in to book a tour!
                                </a>
                            </Link>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default TourDetails
