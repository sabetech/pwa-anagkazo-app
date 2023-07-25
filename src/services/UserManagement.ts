import { AxiosError, AxiosResponse } from 'axios';
import { User, ServerResponse, ResponseError } from '../interfaces/ServerResponse';
import * as api from './API/AnagkazoAPI';

export const verifyStudent = async (indexnumber: number): Promise<AxiosResponse<ServerResponse<User>>> => {
    return (await api.post('/verify-indexnumber', {index_number: indexnumber}, {}));
}   

