import { useState } from 'react';
import { NavBar, List, FloatingBubble, Modal, Form, Stepper, ImageUploader } from 'antd-mobile'
import { ImageUploadItem } from 'antd-mobile/es/components/image-uploader'
import { CheckOutline, AddOutline  } from 'antd-mobile-icons';
import { useNavigate } from 'react-router-dom';

const BussingDetails = () => {
    const navigate = useNavigate();
    const [fileList, setFileList] = useState<ImageUploadItem[]>()

    const onBussingEntryConfirm = () => {
        console.log('ok')
    }

    const upload = async (file: File) : Promise<ImageUploadItem> => {
        return new Promise((resolve, reject) => {
            const imageUploadItem: ImageUploadItem = {url: 'http://url_is_here'}
              resolve(imageUploadItem);
              if (false) {
                reject(new Error('error'));
              }
        });

    }

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
                        <Form.Item name='number_bussed' label='Number Bussed' childElementPosition='right'
                            initialValue={0}
                            rules={[
                              {
                                min: 0,
                                type: 'number',
                              },
                            ]}
                        >
                            <Stepper />
                            <ImageUploader
                                value={fileList}
                                onChange={setFileList}
                                upload={upload}
                                maxCount={1}
                            />
                        </Form.Item>
                    </>,
                    confirmText: 'Ok',
                    onConfirm: () => onBussingEntryConfirm(),
                })
               }}
            >
            <AddOutline fontSize={32} />
        </FloatingBubble>
        </>
    )
}

export default BussingDetails;