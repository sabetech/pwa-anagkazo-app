import { useState, useContext } from 'react';
import { NavBar, List, Space, Button, Modal, Form, TextArea,SpinLoading, Image } from 'antd-mobile'
import { CheckOutline } from 'antd-mobile-icons';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { IUserManager, ServerResponse, ResponseError } from '../../interfaces/ServerResponse';
import { TFellowshipService } from '../../types/fellowshipFormFields'
import { getFellowshipServices } from '../../services/FellowshipService';
import { getUserFriendlyDateFormat } from '../../utils/helper'



const FellowshipServiceDetails = () => {
    const navigate = useNavigate()
    const { user } = useContext(UserContext) as IUserManager;
    const [fellowshipCancelForm] = Form.useForm();

    const {data: fellowshipServices, isLoading, isSuccess} = useQuery<ServerResponse>(
        {
            queryKey: ['fellowship_services'],
            queryFn: () => getFellowshipServices(user?.id as number)
        },
    ) 

    if (isSuccess) {
        console.log("yeah")
        // setFellowshipServicesState(fellowshipServices.data)
    }

    const handleFillServiceForm = () => {
        navigate('/fellowship-service-form');
    }

    console.log("Fellowship services", fellowshipServices);

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
            {
                isLoading && <SpinLoading />
            }
            <List header='Attendance Average: 0 | Offering Average: 0'>
                
                {
                    isSuccess &&
                    fellowshipServices.data.map( (fellowshipService: TFellowshipService) => (
                        <List.Item key={fellowshipService.id}  
                        
                        arrow={false} prefix={<Image
                            src={fellowshipService.image_url}
                            style={{ borderRadius: 20 }}
                            fit='cover'
                            width={40}
                            height={40}
                          />} 
                          description={`Offering: ${fellowshipService.offering} GHc`} extra={`Attendance: ${ fellowshipService.attendance }`} onClick={() => {}} >
                            { getUserFriendlyDateFormat(fellowshipService.service_date) }
                        </List.Item>
                    )
                )
                }
                
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