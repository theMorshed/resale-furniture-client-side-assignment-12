import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdvertisedItems from '../Sections/Home/AdvertisedItems';
import Categories from '../Sections/Home/Categories';
import PopularFurnitures from '../Sections/Home/PopularFurnitures';

const Home = () => {
    const [advertisedFurniture, setAdvertisedFurniture] = useState([]);

    useEffect(() => {        
        axios('https://resale-server.vercel.app/advertisedFurniture')
        .then(result => setAdvertisedFurniture(result.data))
    }, []);
    
    return (
        <div>
            <Categories></Categories>
            {advertisedFurniture.length > 0 ? <AdvertisedItems advertisedFurniture={advertisedFurniture}></AdvertisedItems> : ''}
            <PopularFurnitures></PopularFurnitures>
        </div>
    );
};

export default Home;