import { AxiosResponse } from 'axios';
import * as api from './API/AnagkazoAPI';
import { FellowshipServiceFormFields } from '../types/fellowshipFormFields';

export const postFellowshipService = async (studentID: number, fellowshipServiceForm: FellowshipServiceFormFields): Promise<AxiosResponse> => {

    console.log("studentId::",studentID);
    console.log("FellowshipShip::", fellowshipServiceForm);

    return (await api.postWithFile('/fellowship_service/'+studentID, fellowshipServiceForm, {}));
}