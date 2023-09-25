import { Link, useLoaderData, useParams } from "react-router-dom";

const DonationDetail = () => {
    const donations = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const donation = donations.find(donation => donation.id === idInt);
    console.log(donation)

    const {img,title,description,price,text_button_bg} = donation;
     const btnbg ={
        background:text_button_bg
     }
   
    return (
        <div>
            <div className="relative">
                <img className=" w-[1320px] h-[700px] mx-auto mt-20" src={img} alt="" />
            </div>
            <div className="bg-[#0b0b0b80] w-[1320px] h-[130px] left-[266px] bottom-[13px] rounded-b-lg mx-auto left-0 absolute roundedleft-80 bottom-16 ">
                <Link to="/donation"><button style={btnbg} className="text-white py-4 px-[24px] ml-[37px] mt-[37px] rounded font-semibold text-xl">Donate {price}</button></Link>
            </div>
            <div className="max-w-[1320px] mx-auto mt-14 mb-[122px]">
                <h1 className="font-bold text-[40px] mb-3">{title}</h1>
                <p className="text-[#0b0b0bb3] text-justify">{description}</p>
            </div>
        </div>
    );
};

export default DonationDetail;