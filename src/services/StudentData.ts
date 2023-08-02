import { AxiosResponse } from 'axios';
import * as api from './API/AnagkazoAPI';

export const getPastoralPoint = async (indexnumber: number = 701274): Promise<AxiosResponse> => {
    return (await api.get('/pastoral-points/'+indexnumber, {}));
}   

export const postNumberBussed = async (indexnumber: number = 701274, number_bussed: number = 1, bussingImage: File): Promise<AxiosResponse> => {
    return (await api.post('/number-bussed/'+indexnumber, {number_bussed: number_bussed, bussing_image: bussingImage}, {}));
}

export const getBussing = async (indexnumber: number = 701274): Promise<AxiosResponse> => {
    return (await api.get('/bussing/'+'700606', {}));
}
