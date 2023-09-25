import { useLoaderData, useParams } from "react-router-dom";
import { saveDonation } from "../utility/localstorage";
import Swal from 'sweetalert2'
const DonationDetail = () => {
    const donations = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const donation = donations.find(donation => donation.id === idInt);
    console.log(donation, idInt)

    const { img, title, description, price, text_button_bg } = donation;
    const btnbg = {
        background: text_button_bg
    }

    const handleClickBtn = () => {
        saveDonation(idInt);
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Your donation has been successfully completed',
            showConfirmButton: false,
            timer: 1500
        }) 
    }

    return (
        <div className="p-5 lg:p-0">
            <div className="relative">
                <img className="w-[1320px] lg:h-[700px] rounded-b-lg mx-auto lg:mt-20" src={img} alt="" />
            </div>
            <div className="bg-[#0b0b0b80] w-[386px] md:w-[728px] lg:w-[1320px] h-[80px] md:h-[130px] lg:left-[266px] top-[410px] md:top-[574px] lg:top-[778px] rounded-b-lg mx-auto absolute roundedleft-80">
                <button onClick={handleClickBtn} style={btnbg} className="text-white py-2 px-2 md:py-4 md:px-[24px] ml-5 md:ml-[37px] mt-5 md:mt-[37px] rounded font-semibold md:text-xl">Donate {price}</button>
            </div>
            <div className="max-w-[1320px] mx-auto mt-14 mb-[122px]">
                <h1 className="font-bold text-3xl md:text-[40px] mb-3">{title}</h1>
                <p className="text-[#0b0b0bb3] text-justify">{description}</p>
            </div>
        </div>
    );
};

export default DonationDetail;