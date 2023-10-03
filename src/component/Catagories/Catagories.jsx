import { useEffect, useState } from 'react';
import Catagory from '../catagory/catagory';
import './Catagories.css';

const Catagories = () => {
    const [catagories, setCatagories] = useState([]);
    const [filter, setFilter] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => {
                setCatagories(data);
                setFilter(data);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const searchValueLower = searchValue.toLowerCase();
        const filterData = catagories.filter(item => item.category.toLowerCase().includes(searchValueLower));
        setFilter(filterData);
    }

    return (

        <div>
            <div>
                <div className="bannar"></div>
                <div className='absolute top-80 md:left-24 lg:top-56 lg:right-[413px] lg:left-[413px]'>
                    <h1 className="text-center font-bold text-4xl lg:text-5xl text-black pt-[145px]">I Grow By Helping People In Need</h1>
                    <div className="text-center mt-10">
                        <input onChange={(e) => setSearchValue(e.target.value)} className="py-4 px-6 border rounded-l-lg outline-none" type="text" placeholder="Search here...." />
                        <button name='submit' onClick={handleSubmit} className="bg-[#FF444A] text-white py-4 px-6 rounded-r-lg font-semibold">Search</button>
                    </div>
                </div>
            </div>

            <div className='max-w-[1340px] mx-auto mt-[100px] mb-[182px]'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {filter.map(catagory => (
                        <Catagory key={catagory.id} catagory={catagory} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Catagories;
