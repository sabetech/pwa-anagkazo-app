import { AxiosResponse, HttpStatusCode } from 'axios';
import * as api from './API/AnagkazoAPI';
import { IAttendanceRequestInfo } from '../interfaces/Attendance';
import { User } from '../interfaces/ServerResponse';

export const postAttendance = async (indexnumber: number = 701274, attendanceInfo: IAttendanceRequestInfo): Promise<AxiosResponse> => {
    return (await api.post('/attendance/'+indexnumber, attendanceInfo, {}));
}

export const getAttendance = async (user: User, event: string): Promise<AxiosResponse> => {
    //sync attendance first before fetching ... if syncing fails
    //check if any of the entries have is_synced false
    
    await _syncAttendanceData(user); 

    return await api.get(`/attendance/${user.index_number}?event=${event}`, {})
}

const _syncAttendanceData = async (user: User) => {
    const locallyStoredAttn: IAttendanceRequestInfo[] = [];
    if (typeof user.id !== 'undefined'){
        for (let i = 0; i < localStorage.length;i++) {
            if (localStorage.key(i)?.startsWith(user.id.toString())) {
                
                let key = localStorage.key(i);
                if (key) {
                    let localAttn = JSON.parse(localStorage.getItem(key) as string) as IAttendanceRequestInfo;

                    if (!localAttn._synced) {
                        locallyStoredAttn.push(localAttn);
                    }
                }
            }
        }
    }

    const res = await api.post(`/attendance/${user.index_number}/sync`, {unsyncedData: locallyStoredAttn}, {});
    if (res.status == HttpStatusCode.Ok) {
        
    }

}

