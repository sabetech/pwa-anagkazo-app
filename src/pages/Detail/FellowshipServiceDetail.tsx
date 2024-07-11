import { NavBar, List, Space, Button, Modal, Form, TextArea } from 'antd-mobile'
import { CheckOutline } from 'antd-mobile-icons';
import { useNavigate } from 'react-router-dom';


const FellowshipServiceDetails = () => {
    const navigate = useNavigate()
    const [fellowshipCancelForm] = Form.useForm();

    const handleFillServiceForm = () => {
        navigate('/fellowship-service-form');
    }

    const onFellowshipServiceCancel = () => {
        console.log(
            fellowshipCancelForm.getFieldValue("reason")
        )
        fellowshipCancelForm.resetFields();
    }

    const handleCancelServiceClick = () => {
        Modal.show({
            title: 'Cancel Service Reason',
            closeOnAction: true,
            actions: [{
                key: 'ok',
                text: 'Ok',
                primary: true
            }, {
                key: 'ignore',
                text: 'Ignore'
            }],
            onAction: (action, index) => {
                
                if (action.key !== 'ok') return;
                onFellowshipServiceCancel()

            },
            content: <>
                <Form layout='vertical' 
                      form={fellowshipCancelForm}
                >
                    <Form.Item label='Reason' name='reason'>
                        <TextArea
                            placeholder='Type your Reason here'
                        />
                    </Form.Item>
                </Form>
            </>
        })
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
            <Space direction='horizontal' justify='center' align='center' block>
                <Button block shape='rectangular' color='primary' size='large' onClick={handleFillServiceForm}>
                    Fill Service Form!
                </Button>
                <Button block shape='rectangular' fill='outline' size='large' onClick={handleCancelServiceClick}>
                    Cancel Service
                </Button>
            </Space>
            
            
        </>
    )
}

export default FellowshipServiceDetails;