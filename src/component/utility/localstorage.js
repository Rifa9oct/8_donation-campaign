const getStoredDonation = () =>{
    const storedDonetion = localStorage.getItem('donation');
    if(storedDonetion){
        return JSON.parse(storedDonetion);
    }
    return [];
}

const saveDonation = id =>{
    const storedDonations = getStoredDonation();
    const exists = storedDonations.find(donationId => donationId === id);
    if(!exists){
        storedDonations.push(id);
        localStorage.setItem('donation', JSON.stringify(storedDonations))
    }
}

export {getStoredDonation, saveDonation}
