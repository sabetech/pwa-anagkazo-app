import { useState, useRef, useContext } from 'react';
import { Space, Image, Form, Input, SafeArea, Button, Popover, Toast } from "antd-mobile";
import anagkazo_logo from "../../assets/anagkazo_logo_trans.png";
import { useMutation } from 'react-query';
import { verifyStudent } from '../../services/UserManagement';
import { IUserManager, ResponseError, ServerResponse, User } from '../../interfaces/ServerResponse';
import * as ResponseCodes from '../../constants/ResponseStatusCodes';
import { UserContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import * as StorageKeys from '../../constants/StorageKeys';
import "./Auth.css";

const Welcome: React.FC = () => {
    const indexNumberRef = useRef(null);
    const [indexNumber, setIndexNumber] = useState<string>('');
    const [isFormEmpty, setFormEmpty] = useState<boolean>(false);
    const { storeUser } = useContext(UserContext) as IUserManager;
    const navigate = useNavigate();


    const { mutate, isLoading } = useMutation({
        mutationFn: async (indexNumber: number) => { 
            const response = await verifyStudent(indexNumber);
            if (response.status === ResponseCodes.OK) {
                
                storeUser(response.data.user as User)
                localStorage.setItem(StorageKeys.USER, JSON.stringify(response.data.user))

                if (response.data.user.already_exists) {
                    navigate('/existing-user')
                } else {
                    navigate('/new-user')
                }
            }
        },
        onSuccess: () => {
            Toast.show({
                content: 'Login Successful',
                duration: 1000,
                icon: 'success',
                position: 'top'
            })
        },
        onError: ( error: ResponseError ) => {
            if (error.response?.status === ResponseCodes.UNAUTHORIZED) {
                Toast.show({
                    content: error.response.data.message,
                    duration: 4000,
                    icon: 'fail',
                    position: 'top'
                })
            }
            console.log('error', error.response?.data)
        }
    });

    const onLogin = () => {
        if (indexNumber.length < 1) {
            setFormEmpty(true)
            setTimeout(() => {
                setFormEmpty(false)
            },500)
        }

        if (Number.isNaN(parseInt(indexNumber))) return
        
        mutate(parseInt(indexNumber))
    }

    const onIndexNumberChange = (text: string) => {
        setIndexNumber(text)
    }

    return (
        <div style={{width: "100%"}}>
            <SafeArea position='top' />
            <Space direction='vertical' align='center' style={{ '--gap': '70px' }} block>

                <h1 style={{textAlign: 'center'}}>Welcome to Anagkazo Lite</h1>
                <Image 
                    src={anagkazo_logo} 
                    width={200} height={200} fit='contain'
                />

                <Form layout='vertical' 
                    footer={
                        <Button loading={isLoading} color='primary' loadingText='Verifying' block size={"large"} onClick={onLogin}>
                            Login
                        </Button>
                    }
                >
                    <Form.Item  
                        label='Type your Index Number Here' 
                        name='index_number' 
                        className={isFormEmpty ? 'shake-animation': undefined}>
                    
                        <Input ref={indexNumberRef} onChange={onIndexNumberChange} placeholder='700101' clearable />
                        
                    </Form.Item>
                    
                </Form>
            </Space>
    </div>
    );
}

export default Welcome;