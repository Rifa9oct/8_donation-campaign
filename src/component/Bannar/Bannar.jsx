import './Bannar.css'
const Bannar = () => {
    return (
        <div>
            <div className="bannar"></div>
            <div className='absolute  top-80 md:left-24 lg:top-56 lg:right-[413px] lg:left-[413px]'>
                <h1 className="text-center font-bold text-4xl lg:text-5xl text-black pt-[145px]">I Grow By Helping People In Need</h1>
                <div className="text-center mt-10">
                    <input className="py-4 px-6 border rounded-l-lg outline-none" type="text" placeholder="Search here...." />
                    <button className="bg-[#FF444A] text-white py-4 px-6 rounded-r-lg font-semibold">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Bannar;