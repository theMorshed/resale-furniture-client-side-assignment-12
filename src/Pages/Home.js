import React from 'react';
import AdvertisedItems from '../Sections/Home/AdvertisedItems';
import Categories from '../Sections/Home/Categories';
import PopularFurnitures from '../Sections/Home/PopularFurnitures';

const Home = () => {
    return (
        <div>
            <Categories></Categories>
            <AdvertisedItems></AdvertisedItems>
            <PopularFurnitures></PopularFurnitures>
        </div>
    );
};

export default Home;