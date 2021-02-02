import Head from 'next/head';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { wrapper } from '../store/store';
import Tour from '../components/TourCard';
import { getTours } from '../store/actions/tourActions';

export const getServerSideProps = wrapper.getServerSideProps(
    async ({ store }) => await store.dispatch(getTours())
);

const Page = () => {
    const { tours } = useSelector(state => state.tour);
    const dispatch = useDispatch();

    useEffect(() => dispatch(getTours()), [dispatch]);

    return (
        <>
            <Head>
                <title>{`Natours | All Tours`}</title>
            </Head>
            <main className='main'>
                <div className='card-container'>
                    {tours.length > 0 &&
                        tours.map(tour => <Tour tour={tour} key={tour.id} />)}
                </div>
            </main>
        </>
    );
};

export default Page;
