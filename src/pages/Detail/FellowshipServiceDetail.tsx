import { NavBar, Tabs, List, Footer, Button } from 'antd-mobile'
import { CheckOutline, ExclamationCircleOutline } from 'antd-mobile-icons';
import { useNavigate } from 'react-router-dom';


const FellowshipServiceDetails = () => {
    const navigate = useNavigate()

    const handleFillServiceForm = () => {
        navigate('/fellowship-service-form');
    }

    return (
        <>
           <NavBar onBack={() => navigate("/dashboard")} style={{'--height': '60px', backgroundColor: '#b12340', color:'white'}} > Fellowship Service Detail </NavBar>
           
            <List header='Attendance Average: 12 | Offering Average: 54.12'>
                <List.Item arrow={false} prefix={<CheckOutline style={{ color: 'green' }}/>} description='Offering: 22.00' extra={'Attendance: 11'} onClick={() => {}} >
                    6th July 2023
                </List.Item>
                <List.Item arrow={false} prefix={<CheckOutline style={{ color: 'green' }}/>} description='Offering: 22.00' extra={'Attendance: 11'} onClick={() => {}} >
                    5th July 2023
                </List.Item>
                <List.Item arrow={false} prefix={<CheckOutline style={{ color: 'green' }}/>} description='Offering: 22.00' extra={'Attendance: 11'} onClick={() => {}} >
                    4th July 2023
                </List.Item>
            </List>
            <Footer content={
                <Button block shape='rectangular' color='primary' size='large' onClick={handleFillServiceForm}>
                    Fill Service Form!
                </Button>
            }>
            </Footer>
        </>
    )
}

export default FellowshipServiceDetails;