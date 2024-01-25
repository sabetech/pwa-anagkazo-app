import { AxiosResponse } from 'axios';
import * as api from './API/AnagkazoAPI';

export const verifyStudent = async (indexnumber: number): Promise<AxiosResponse> => {
    return (await api.post('/verify-indexnumber', {index_number: indexnumber}, {}));
}   

export const authenticateStudent = async(indexnumber: number, passcode: string): Promise<AxiosResponse> => {
    return (await api.post('/authenticate', {index_number: indexnumber, passcode: passcode}, {}));
}