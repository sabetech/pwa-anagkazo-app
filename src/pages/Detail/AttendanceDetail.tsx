import { useContext, useEffect, useState } from 'react';
import { NavBar, Tabs, List, SpinLoading } from 'antd-mobile'
import { CheckOutline, ExclamationCircleOutline } from 'antd-mobile-icons';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { ServerResponse, IUserManager } from '../../interfaces/ServerResponse';
import { UserContext } from '../../contexts/UserContext';
import { getAttendance } from '../../services/Attendance';
import { IAttendanceResponseInfo } from '../../interfaces/Attendance';

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

    const {data: attendance, isLoading} = useQuery<ServerResponse>(['attendance'], () => getAttendance(user?.index_number as number));

    console.log("ATTENDANCE:::", attendance?.data.data );

    useEffect(() => {
        let attendanceStructure: AttendanceStructure;

        if (attendance?.data) {        
            const attendanceData = attendance.data?.data.map((attn: IAttendanceResponseInfo) => {
                
                if (attn.event.includes('VISION')) {
                    if (attn.event === 'VISION_IN') {
                        if (attn.date in attendanceStructure.vision) {
                            attendanceStructure.vision[attn.date] = {
                                ...(attendanceStructure.vision[attn.date]),
                                timeIn: attn.time,
                            };
                        } else {
                            attendanceStructure.vision[attn.date] = {
                                timeIn: attn.time,
                            };
                        }
                    }

                    if (attn.event === 'VISION_OUT') {
                        if (attn.date in attendanceStructure.vision) {
                            attendanceStructure.vision[attn.date] = {
                                ...attendanceStructure.vision[attn.date],
                                timeOut: attn.time,
                            };
                        }else{
                            attendanceStructure.vision[attn.date] = {
                                timeOut: attn.time,
                            };
                        }
                    }
                }
            });
            setAttendanceData(attendanceData);
        }
    },[attendance]);

    return (
        <>
           <NavBar onBack={() => navigate("/dashboard")} style={{'--height': '60px', backgroundColor: '#b12340', color:'white'}} > Attendance Detail </NavBar>
           <Tabs defaultActiveKey='1'>
                <Tabs.Tab title='Vision' key='1'>
                    <List header='Vision Lectures: 89%'>     
                        <List.Item arrow={false} prefix={<CheckOutline style={{ color: 'green' }}/>} title='Time in: 6:01am' description='Time out: 09:00am' extra={<p style={{ color: 'green' }}>Present</p>} onClick={() => {}} >
                            6th July 2023
                        </List.Item>
                        <List.Item arrow={false} prefix={<ExclamationCircleOutline style={{ color: 'red' }}/>} title='Time in: N/A' description='Time out: N/A' extra={<p style={{ color: 'red' }}>Absent</p>} onClick={() => {}}>
                            5 July 2023
                        </List.Item>
                        <List.Item arrow={false} prefix={<SpinLoading style={{ '--size': '18px' }} />} title='Time in: 6:31am' description='Time out: 09:00am' extra={<>Late</>} onClick={() => {}}>
                            4 July 2023
                        </List.Item>
                    </List>
                </Tabs.Tab>
                <Tabs.Tab title='Pillar' key='2'>
                    2
                </Tabs.Tab>
                <Tabs.Tab title='Foundational' key='3'>
                    3
                </Tabs.Tab>
                <Tabs.Tab title='BMCDR' key='4'>
                    4
                </Tabs.Tab>
                <Tabs.Tab title='Anagkazo Live' key='5'>
                    5
                </Tabs.Tab>
                <Tabs.Tab title='4AM Prayer' key='6'>
                    6
                </Tabs.Tab>
                <Tabs.Tab title='Anagkazo Encounter' key='7'>
                    7
                </Tabs.Tab>
                <Tabs.Tab title='Sunday Service' key='8'>
                    8
                </Tabs.Tab>
            </Tabs>
        </>
    )
}

export default AttendanceDetails;