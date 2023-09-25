import React, { useEffect, useState } from 'react';
import Catagory from '../catagory/catagory';
import { useLoaderData } from 'react-router-dom';

const Catagories = () => {
    const [catagories, setCatagories] = useState([]);
    useEffect(() =>{
        fetch('donation.json')
        .then(res => res.json())
        .then(data => setCatagories(data))
    },[])
    return (
        <div className='max-w-[1340px] mx-auto mt-[100px] mb-[182px]'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    catagories.map(catagory => <Catagory catagory={catagory}></Catagory>)
                }
            </div>
        </div>
    );
};

export default Catagories;