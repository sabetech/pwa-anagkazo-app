import { AttendanceData, IAttendanceRequestInfo } from '../interfaces/Attendance';
import * as StorageKeys from '../constants/StorageKeys';
import AttendanceDetails from '../pages/Detail/AttendanceDetail';
import { AttendanceInfo } from '../types/attendanceInfo';

export function  saveAttendanceInfo(key: string, attendanceInfo: IAttendanceRequestInfo): boolean{
    if (_isAttendanceInfoExist(key, attendanceInfo)) {
        return false;
    }

    if (attendanceInfo.date === 'Null') {
        attendanceInfo.date = new Date().toISOString().split('T')[0];
        attendanceInfo.time = new Date().toISOString().split('T')[1].split('.')[0];
    }

    if (attendanceInfo.event.startsWith('BMCDR')) {
        key = `${key.split('-')[0]}-BMCDR-${StorageKeys.ATTENDANCE}`;
    }

    const attendanceData = localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as string) : [];
    
    attendanceData.push(attendanceInfo);
    localStorage.setItem(key, JSON.stringify(attendanceData));

    return true;
}

function _isAttendanceInfoExist(key: string, attendanceInfo: IAttendanceRequestInfo): boolean {
    const attendanceData = localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as string) : [];
    return attendanceData.some((data: IAttendanceRequestInfo) => data.date === attendanceInfo.date && data.event === attendanceInfo.event && data.mode === attendanceInfo.mode);
}

export function updateSyncedAttendanceInfo(key: string, attendanceInfo: IAttendanceRequestInfo): void {
    const attendanceData = localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as string) : [];
    const index = attendanceData.findIndex((data: IAttendanceRequestInfo) => data.date === attendanceInfo.date && data.event === attendanceInfo.event && data.mode === attendanceInfo.mode);
    attendanceData[index]._synced = true;
    localStorage.setItem(key, JSON.stringify(attendanceData));
}

export function getAttendanceInfo(key: string): AttendanceInfo[] {
    console.log("CURRENT KEY::" + key)
    const currentAttnData = localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as string) as IAttendanceRequestInfo[] : [] as IAttendanceRequestInfo[];

    /*
    {
            "id": 234,
            "student_id": 2625,
            "date": "2024-02-09",
            "time_in": "07:46:26",
            "time_out": null,
            "late_condition": "08:15:00",
            "event": "VISION",
            "created_at": "2024-02-09T07:46:26.000000Z",
            "updated_at": "2024-02-09T07:46:26.000000Z"
        },
    */
   const displayableAttnInfo : AttendanceInfo[] = [];
    currentAttnData.forEach((attnInfo) => {
        if (attnInfo.mode == 'IN') {
            displayableAttnInfo.push(
                {
                    student_id: parseInt(key.substring(0, key.indexOf('-'))),
                    event: attnInfo.event,
                    time_in: attnInfo.time,
                    time_out: '',
                    date: attnInfo.date,
                    late_condition: attnInfo.late_condition
                });
        }
        if (attnInfo.mode == 'OUT') {
            const attnUpdate = displayableAttnInfo.find(item => ((item.date === attnInfo.date) 
                && (item.event === attnInfo.event)))

            if (attnUpdate) {
                attnUpdate.time_out = attnInfo.time;
            }
        }
    });

    return displayableAttnInfo;
}