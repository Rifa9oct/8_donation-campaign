import Swal from "sweetalert2";

const getStoredDonation = () => {
    const storedDonetion = localStorage.getItem('donation');
    if (storedDonetion) {
        return JSON.parse(storedDonetion);
    }
    return [];
}

const saveDonation = id => {
    const storedDonations = getStoredDonation();
    const exists = storedDonations.find(donationId => donationId === id);
    if (!exists) {
        storedDonations.push(id);
        localStorage.setItem('donation', JSON.stringify(storedDonations))

        // sweet alert 
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Your donation has successfully completed',
            showConfirmButton: false,
            timer: 1500
        })
    }
    else {
        Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: 'You already donated',
            showConfirmButton: false,
            timer: 1500
        })
    }

}

export { getStoredDonation, saveDonation }
