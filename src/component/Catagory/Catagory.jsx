import { useNavigate } from 'react-router-dom';
import { PropTypes } from "prop-types";

const Catagory = ({catagory}) => {
    const {id,img, title,category,category_bg,card_bg,text_button_bg} = catagory;
    const customStyle ={
        background:card_bg,
        color:text_button_bg
    }
    const catagoryStyle ={
        background:category_bg
    }
    
    const navigate =useNavigate();
    const handleClick =  () => {
        navigate(`/catagory/${id}`)             
    }
    return (
        <div onClick={handleClick} style={customStyle} className='w-[312px] h-[283px] mx-auto rounded-lg'>
            <img className='w-[312px]' src={img} alt=""/>
            <h2 className='w-fit ml-4 font-medium text-sm px-[10px] py-1 mt-4 mb-2 rounded' style={catagoryStyle}>{category}</h2>
            <h1 className='font-semibold px-4'>{title}</h1>
        </div>
    );
};

Catagory.propTypes ={
    catagory: PropTypes.object
}
export default Catagory;