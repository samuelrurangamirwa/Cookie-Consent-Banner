import { COOKIE_EXPIRY_DAYS, COOKIE_KEY } from '@/constants/Consent';
import Cookies from 'js-cookie';

export const HandlerAccept = (
    setVisible: (value: boolean) => void,
    setError: (value: string | null) => void,
) => {
    try{
        Cookies.set(COOKIE_KEY, 'accept', { expires: COOKIE_EXPIRY_DAYS});        // Set accept cookie
        setVisible(false);
    } catch (error) {
        setError('Error occured while setting cookie on accept');
        console.error(error);
    }
}

export const HandlerDecline = (
    setVisible: (value: boolean) => void,
    setError: (value: string | null) => void,
) => {
    try{
        Cookies.set(COOKIE_KEY, 'decline', { expires: COOKIE_EXPIRY_DAYS});       // Set decline cookie
        setVisible(false);
    } catch (error) {
        setError('Error occured while seeting cookie on decline');
        console.error(error);
    }
}