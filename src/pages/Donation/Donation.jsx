import DonationDisplay from "../../component/DonationDisplay/DonationDisplay";
import { getStoredDonation } from "../../component/utility/localstorage";
import { useEffect, useState } from "react";

const Donation = () => {
    const [getDonations, setGetDonationId] = useState([]);
    const [noFound, setNoFound] = useState("");
    const [seeall, setSeeall] = useState(false);

    useEffect(() => {
        const storedDonations = getStoredDonation();
        if (storedDonations.length > 0) {
            setGetDonationId(storedDonations);
        }
        else {
            setNoFound("no data found...");
        }
    }, [])

    return (
        <div>
            {
                noFound ? <p className="text-5xl font-bold text-red-500 flex h-[80vh] items-center justify-center">{noFound}</p> :
                    <div className="flex flex-col items-center mb-32">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-[83px] max-w-[1320px] mx-auto">
                            {
                                seeall? getDonations.map(donation => <DonationDisplay key={donation.id} donation={donation}></DonationDisplay>) :

                                getDonations.slice(0,4).map(donation => <DonationDisplay key={donation.id} donation={donation}></DonationDisplay>)
                            }
                        </div>
                        {
                            getDonations.length >= 4? <div className={seeall && 'hidden'}>
                                <button onClick={() => setSeeall(!seeall)} className="py-4 px-7 bg-[#009444] rounded-lg text-white font-semibold mt-10">See All</button>
                            </div> : ""
                        }
                    </div>
            }
        </div>
    );
};

export default Donation;