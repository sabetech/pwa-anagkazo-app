import { useState, RefObject } from 'react';
import { NavBar, Form, Button, DatePicker, Stepper, ImageUploader, Input } from 'antd-mobile'
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import type { DatePickerRef } from 'antd-mobile/es/components/date-picker'
import { ImageUploadItem } from 'antd-mobile/es/components/image-uploader'

const now = new Date()
const FellowshipServiceForm = () => {
    const navigate = useNavigate();
    const [fileList, setFileList] = useState<ImageUploadItem[]>([]);
    const [fellowshipImage, setFellowshipImage] = useState<File>();
    const [bussingForm] = Form.useForm()

    const loadImage = async (file: File) => {
        
        setFellowshipImage(file);
        
        return await {
            url: URL.createObjectURL(file),
          }
    }

    return (
        <>
           <NavBar onBack={() => navigate("/fellowship")} style={{'--height': '60px', backgroundColor: '#b12340', color:'white'}} > Fellowship Service Form </NavBar>

           <Form
                form={bussingForm}
                layout='horizontal'
                footer={
                    <Button block type='submit' color='primary' size='large'>
                    Submit
                    </Button>
                }
            >               
                <Form.Item
                    name='service_date'
                    label='Service Date'
                    trigger='onConfirm'
                    onClick={(e, datePickerRef: RefObject<DatePickerRef>) => {
                        datePickerRef.current?.open()
                    }}
                    >
                    <DatePicker>
                        {value =>
                        value ? dayjs(value).format('YYYY-MM-DD') : dayjs().format('YYYY-MM-DD')
                        }
                    </DatePicker>
                </Form.Item>
                <Form.Item name='attendance' label='Attendance' childElementPosition='normal'
                            initialValue={0}
                            rules={[
                              {
                                min: 0,
                                type: 'number',
                              },
                            ]}
                        >
                    <Stepper />
                </Form.Item>
                <Form.Item
                    name='offering'
                    label='Offering (GHC)'
                    rules={[{ required: true, message: 'Enter your Offering here!' }]}
                >
                    <Input onChange={console.log} placeholder='60.00' />
                </Form.Item>
                <Form.Item
                    name='foreign offering'
                    label='Offering (Foreign Currency)'
                    rules={[{ required: false}]}
                >
                    <Input onChange={console.log} placeholder='60.00' />
                </Form.Item>
                <Form.Item name='fellowship_service_image' label='Upload Service Picture'>
                            <ImageUploader
                                value={fileList}
                                onChange={setFileList}
                                maxCount={1}
                                upload={loadImage}
                                />
                        </Form.Item>
                
            </Form>
        </>
        );
}
    
export default FellowshipServiceForm