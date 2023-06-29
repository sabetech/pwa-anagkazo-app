import { User, ServerResponse } from '../interfaces/ServerResponse';
import * as api from './API/AnagkazoAPI';

export const verifyStudent = async (indexnumber: number): Promise<ServerResponse<User>> => {
    return (await api.post('/verify-indexnumber', {index_number: indexnumber}, {})).data;
}   

