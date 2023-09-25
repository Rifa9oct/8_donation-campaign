import React from 'react';
import Catagory from '../catagory/catagory';
import { useLoaderData } from 'react-router-dom';

const Catagories = () => {
    const catagories = useLoaderData();
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