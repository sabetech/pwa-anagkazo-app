import { NavBar, List, FloatingBubble, Modal, Form, Stepper } from 'antd-mobile'
import { CheckOutline, AddOutline  } from 'antd-mobile-icons';
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
            <FloatingBubble
                style={{
                    '--initial-position-bottom': '24px',
                    '--initial-position-right': '24px',
                    '--edge-distance': '24px',
                    '--z-index': '10px'
                }}
               onClick={() => {
                Modal.alert({
                    title: 'Enter Bussing Details',
                    content: <>
                        <Form.Item name='amount' label='数量' childElementPosition='right'>
                            <Stepper />
                        </Form.Item>
                    </>,
                    confirmText: 'Ok',
                    onConfirm: () => console.log('ok'),
                })
               }}
            >
            <AddOutline fontSize={32} />
        </FloatingBubble>
        </>
    )
}

export default BussingDetails;