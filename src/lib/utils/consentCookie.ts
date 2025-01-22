import { COOKIE_EXPIRY_DAYS, COOKIE_KEY } from '@/constants/consent';
import Cookies from 'js-cookie';

// set value of consent cookie with expiration date
export const setConsentCookie = (value: string): void => {
    Cookies.set(COOKIE_KEY, value, { expires: COOKIE_EXPIRY_DAYS });
};

// get the value of consent cookie
export const getConsentCookie = (): string | undefined => {
    return Cookies.get(COOKIE_KEY);
};

// set accept action handler
export const handlerAccept = (
    setVisible: (value: boolean) => void,
    setError: (value: string | null) => void,
) => {
    try{
        setConsentCookie('accept');        // Set accept cookie
        setVisible(false);
    } catch (error) {
        setError('Error occured while setting cookie on accept');
        console.error(error);
    }
}

// Set decline action handler
export const handlerDecline = (
    setVisible: (value: boolean) => void,
    setError: (value: string | null) => void,
) => {
    try{
        setConsentCookie('decline');       // Set decline cookie
        setVisible(false);
    } catch (error) {
        setError('Error occured while seeting cookie on decline');
        console.error(error);
    }
}