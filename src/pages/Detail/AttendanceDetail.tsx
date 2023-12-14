import { useContext, useEffect, useState } from 'react';
import { NavBar, Tabs, List, SpinLoading } from 'antd-mobile'
import { CheckOutline, ExclamationCircleOutline } from 'antd-mobile-icons';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { ServerResponse, IUserManager } from '../../interfaces/ServerResponse';
import { UserContext } from '../../contexts/UserContext';
import { getAttendance } from '../../services/Attendance';
import { IAttendanceResponseInfo } from '../../interfaces/Attendance';
import { VisionLecturesAttendance } from './Attendance/Vision';

type AttendanceStructure = {
    vision: {
        [key: string]: {
            timeIn?: string,
            timeOut?: string,
        }
    }
}

const AttendanceDetails = () => {
    const navigate = useNavigate()
    const { user } = useContext(UserContext) as IUserManager;
    const [attendanceData, setAttendanceData] = useState([]);

    return (
        <>
           <NavBar onBack={() => navigate("/dashboard")} style={{'--height': '60px', backgroundColor: '#b12340', color:'white'}} > Attendance Detail </NavBar>
           <Tabs defaultActiveKey='1'>
                <Tabs.Tab title='Vision' key='1'>
                    <VisionLecturesAttendance />
                </Tabs.Tab>
                <Tabs.Tab title='Pillar' key='2'>
                    Work In Progress
                </Tabs.Tab>
                <Tabs.Tab title='Foundational' key='3'>
                    Work In Progress    
                </Tabs.Tab>
                <Tabs.Tab title='BMCDR' key='4'>
                    Work In Progress
                </Tabs.Tab>
                <Tabs.Tab title='Anagkazo Live' key='5'>
                    Work In Progress
                </Tabs.Tab>
                <Tabs.Tab title='4AM Prayer' key='6'>
                    Work In Progress
                </Tabs.Tab>
                <Tabs.Tab title='Anagkazo Encounter' key='7'>
                    Work In Progress
                </Tabs.Tab>
                <Tabs.Tab title='Sunday Service' key='8'>
                    Work In Progress
                </Tabs.Tab>
            </Tabs>
        </>
    )
}

export default AttendanceDetails;