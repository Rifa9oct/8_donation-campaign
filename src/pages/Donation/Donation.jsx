import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../component/utility/localstorage";
import DonationDisplay from "../../component/DonationDisplay/DonationDisplay";

const Donation = () => {
    const donations = useLoaderData();
    const [donationComplete, setDonationComplete] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        const storedDonationsId = getStoredDonation();
        if (donations.length > 0) {
            const completeDonation = donations.filter(donation => storedDonationsId.includes(donation.id))
            setDonationComplete(completeDonation);
        }
    },[donations])

    return (
        <div className="flex flex-col items-center mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-[83px] max-w-[1320px] mx-auto">
                {
                    donationComplete.slice(0,dataLength).map(donation => <DonationDisplay key={donation.id} donation={donation}></DonationDisplay>)
                }
            </div>
            <div className={dataLength > 4 && 'hidden'}>
                <button onClick={() => setDataLength(donations.length)} className="py-4 px-7 bg-[#009444] rounded-lg text-white font-semibold mt-10">See All</button>
            </div>
        </div>
    );
};

export default Donation;