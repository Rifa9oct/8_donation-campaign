
const DonationDisplay = ({ donation }) => {
    const { img, title, category, category_bg, card_bg, text_button_bg, price } = donation;

    const customStyle = {
        background: card_bg,
        color: text_button_bg
    }
    const catagoryStyle = {
        background: category_bg
    }
    const btnBg = {
        background: text_button_bg
    }

    return (
        <div>
            <div style={customStyle} className='flex gap-6 w-[648px] h-[200px] rounded-lg'>
                <img className="rounded-l-lg w-[220px]" src={img} alt="" />
                <div>
                    <h2 className='w-fit font-medium text-sm px-[10px] py-1 mt-4 mb-2 rounded' style={catagoryStyle}>{category}</h2>
                    <h1 className='font-semibold text-2xl'>{title}</h1>
                    <p className="font-semibold">{price}</p>
                    <button style={btnBg} className="px-4 py-2 mt-5 text-white font-semibold rounded">View Details</button>
                </div>
            </div>

        </div>
    );
};

export default DonationDisplay;