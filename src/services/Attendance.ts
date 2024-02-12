import { AxiosResponse } from 'axios';
import * as api from './API/AnagkazoAPI';
import { IAttendanceRequestInfo } from '../interfaces/Attendance';
import { getAttendanceInfo } from '../utils/storage';
import { User } from '../interfaces/ServerResponse';
import * as StorageKeys from '../constants/StorageKeys';

export const postAttendance = async (indexnumber: number = 701274, attendanceInfo: IAttendanceRequestInfo): Promise<AxiosResponse> => {
    return (await api.post('/attendance/'+indexnumber, attendanceInfo, {}));
}

export const getAttendance = async (user: User, event: string): Promise<AxiosResponse> => {
    
    //read from local storage if you don't get it go to the server
    const attendanceData = getAttendanceInfo(`${user.id}-${event}-${StorageKeys.ATTENDANCE}`);
    if (attendanceData.length > 0) {
        return Promise.resolve({data: {data: attendanceData}, status: 200, statusText: 'OK', headers: {}, config: {}} as AxiosResponse);
    }
    return (await api.get(`/attendance/${user.index_number}?event=${event}`, {}));
}