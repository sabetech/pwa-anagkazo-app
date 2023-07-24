import { NavBar, Tabs, List, SpinLoading } from 'antd-mobile'
import { CheckOutline, ExclamationCircleOutline } from 'antd-mobile-icons';
import { useNavigate } from 'react-router-dom';


const PastoralPointDetail = () => {
    const navigate = useNavigate()


    return (
        <>
           <NavBar onBack={() => navigate("/dashboard")} style={{'--height': '60px'}} > Fellowship Service Detail </NavBar>
           
            <List header='Pastoral Point: 123'>
                <List.Item arrow={false} prefix={<CheckOutline style={{ color: 'green' }}/>} extra={'Point: 11'} >
                    Born Again
                </List.Item>
                <List.Item arrow={false} prefix={<CheckOutline style={{ color: 'green' }}/>} extra={'Point: 11'} >
                    Pays tithe
                </List.Item>
                <List.Item arrow={false} prefix={<CheckOutline style={{ color: 'green' }}/>} extra={'Point: 11'} >
                    Servanthood 
                </List.Item>
            </List>
        </>
    )
}

export default PastoralPointDetail;