import { NavBar, Tabs, List, SpinLoading } from 'antd-mobile'
import { CheckOutline, ExclamationCircleOutline } from 'antd-mobile-icons';
import { useNavigate } from 'react-router-dom';


const BussingDetails = () => {
    const navigate = useNavigate()


    return (
        <>
           <NavBar onBack={() => navigate("/dashboard")} style={{'--height': '60px'}} > Bussing Detail </NavBar>
           
            <List header='Bussing Average: 12'>
                <List.Item arrow={false} prefix={<CheckOutline style={{ color: 'green' }}/>} extra={'Attendance: 11'} onClick={() => {}} >
                    6th July 2023
                </List.Item>
                <List.Item arrow={false} prefix={<CheckOutline style={{ color: 'green' }}/>} extra={'Attendance: 11'} onClick={() => {}} >
                    5th July 2023
                </List.Item>
                <List.Item arrow={false} prefix={<CheckOutline style={{ color: 'green' }}/>} extra={'Attendance: 11'} onClick={() => {}} >
                    4th July 2023
                </List.Item>
            </List>
        </>
    )
}

export default BussingDetails;