export interface IAttendanceRequestInfo {
    date: string;
    event: string;
    mode: string;
    late_condition: string;
    time: string;
    _synced: boolean;
}

export type IAttendanceResponseInfo = {
    event: string;
    date: string;
    time: string;
    student_id: number;
}

export type AttendanceData = {
    attendanceData: IAttendanceResponseInfo[];
}