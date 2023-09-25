import React from 'react';

const Catagory = ({catagory}) => {
    const {img, title,category,category_bg,card_bg,text_button_bg} = catagory;
    const customStyle ={
        background:card_bg,
        color:text_button_bg
    }
    const catagoryStyle ={
        background:category_bg
    }
    return (
        <div style={customStyle} className='w-[312px] h-[283px] rounded-lg'>
            <img src={img} alt=""/>
            <h2 className='w-fit ml-4 font-medium text-sm px-4 mt-4 rounded' style={catagoryStyle}>{category}</h2>
            <h1 className='font-semibold px-4'>{title}</h1>
        </div>
    );
};

export default Catagory;