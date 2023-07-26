import { AxiosResponse } from 'axios';
import * as api from './API/AnagkazoAPI';

export const getPastoralPoint = async (indexnumber: number = 701274): Promise<AxiosResponse> => {
    return (await api.get('/pastoral-points/'+indexnumber, {}));
}   
