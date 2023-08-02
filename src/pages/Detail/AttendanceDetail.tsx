import { NavBar, Tabs, List, SpinLoading } from 'antd-mobile'
import { CheckOutline, ExclamationCircleOutline } from 'antd-mobile-icons';
import { useNavigate } from 'react-router-dom';


const AttendanceDetails = () => {
    const navigate = useNavigate()


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
                <Tabs.Tab title='Flat White' key='5'>
                    5
                </Tabs.Tab>
                <Tabs.Tab title='Caramel Macchiato' key='6'>
                    6
                </Tabs.Tab>
                <Tabs.Tab title='Cafe Mocha' key='7'>
                    7
                </Tabs.Tab>
            </Tabs>
        </>
    )
}

export default AttendanceDetails;