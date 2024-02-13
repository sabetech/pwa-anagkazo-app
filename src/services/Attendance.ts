import { AxiosResponse, HttpStatusCode } from 'axios';
import * as api from './API/AnagkazoAPI';
import { IAttendanceRequestInfo } from '../interfaces/Attendance';
import { getAttendanceInfo, cacheAttendanceInfo } from '../utils/storage';
import { User } from '../interfaces/ServerResponse';
import * as StorageKeys from '../constants/StorageKeys';

export const postAttendance = async (indexnumber: number = 701274, attendanceInfo: IAttendanceRequestInfo): Promise<AxiosResponse> => {
    return (await api.post('/attendance/'+indexnumber, attendanceInfo, {}));
}

export const getAttendance = async (user: User, event: string): Promise<AxiosResponse> => {
    //sync attendance first before fetching ... if syncing fails
    //check if any of the entries have is_synced false
    
    await _syncAttendanceData(user); 

    return await api.get(`/attendance/${user.index_number}?event=${event}`, {})
    /*
    const attendanceData = getAttendanceInfo(`${user.id}-${event}-${StorageKeys.ATTENDANCE}`);
    if (attendanceData.length > 0) {
        return Promise.resolve({data: {data: attendanceData}, status: 200, statusText: 'OK', headers: {}, config: {}} as AxiosResponse);
    }
    return Promise.resolve({data: {data: []}, status: 200, statusText: 'OK', headers: {}, config: {}} as AxiosResponse);
    */
}

const _syncAttendanceData = async (user: User) => {
    if (typeof user.id !== 'undefined'){
        for (let i = 0; i < localStorage.length;i++) {
            if (localStorage.key(i)?.startsWith(user.id.toString())) {

            }
        }
    }
}

