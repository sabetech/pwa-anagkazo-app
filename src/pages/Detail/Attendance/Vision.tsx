import { useContext } from 'react';
import { List, SpinLoading } from 'antd-mobile'
import { CheckOutline, ExclamationCircleOutline } from 'antd-mobile-icons';
import { useQuery } from 'react-query';
import { getAttendance } from '../../../services/Attendance';
import { ServerResponse, IUserManager } from '../../../interfaces/ServerResponse';
import { UserContext } from '../../../contexts/UserContext';

export const VisionLecturesAttendance = () => {
    const { user } = useContext(UserContext) as IUserManager;
    const {data: attendance, isLoading} = useQuery<ServerResponse>(['attendance'], () => getAttendance(user?.index_number as number, 'VISION'));

    return (
        <List header='Vision Lectures'>     
            {/* <List.Item arrow={false} prefix={<CheckOutline style={{ color: 'green' }}/>} title='Time in: 6:01am' description='Time out: 09:00am' extra={<p style={{ color: 'green' }}>Present</p>} onClick={() => {}} >
                6th Work In Progress 2023
            </List.Item> */}
            {/* <List.Item arrow={false} prefix={<ExclamationCircleOutline style={{ color: 'red' }}/>} title='Time in: N/A' description='Time out: N/A' extra={<p style={{ color: 'red' }}>Absent</p>} onClick={() => {}}>
                5 July 2023
            </List.Item>*/}
            <List.Item arrow={false} prefix={<SpinLoading style={{ '--size': '18px' }} />} title='Time in: 6:31am' description='Time out: 09:00am' extra={<>Late</>} onClick={() => {}}>
                6th Work In Progress 2023 <br />
                6th Work In Progress 2023
            </List.Item> 
        </List>
    )
}