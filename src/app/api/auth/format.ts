export const formatPhoneNumber = async (phoneNumber:string) => {
    const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');
    if (cleanedPhoneNumber.length !== 10) {
        throw new Error('Invalid phone number length');
    }
    const formattedPhoneNumber = `${cleanedPhoneNumber.slice(0, 3)}-${cleanedPhoneNumber.slice(3, 6)}-${cleanedPhoneNumber.slice(6)}`;
    return formattedPhoneNumber;
} 
export const formatIdcard = async(idCard: string) => {
    const cleanedIdCard = idCard.replace(/\D/g, '');
    if (cleanedIdCard.length !== 13) {
        throw new Error('Invalid ID card number length');
    }
    const formattedIdCard = `${cleanedIdCard.slice(0, 1)}-${cleanedIdCard.slice(1, 5)}-${cleanedIdCard.slice(5, 10)}-${cleanedIdCard.slice(10, 12)}-${cleanedIdCard.slice(12)}`;
    return formattedIdCard;
}