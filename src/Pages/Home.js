import React from 'react';
import AdvertisedItems from '../Sections/Home/AdvertisedItems';
import Banner from '../Sections/Home/Banner';
import Categories from '../Sections/Home/Categories';
import PopularFurnitures from '../Sections/Home/PopularFurnitures';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <AdvertisedItems></AdvertisedItems>
            <PopularFurnitures></PopularFurnitures>
        </div>
    );
};

export default Home;