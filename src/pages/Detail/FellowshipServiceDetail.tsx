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
            {/* Use virtual list in the future */}
            <List header='Attendance Average: 0 | Offering Average: 0'>
                <List.Item arrow={false} prefix={<CheckOutline style={{ color: 'green' }}/>} description='Offering: 0.00' extra={'Attendance: 0'} onClick={() => {}} >
                    July 9, 2024
                </List.Item>
            </List>
            
            <Button block shape='rectangular' color='primary' size='large' onClick={handleFillServiceForm}>
                Fill Service Form!
            </Button>
            
            
        </>
    )
}

export default FellowshipServiceDetails;