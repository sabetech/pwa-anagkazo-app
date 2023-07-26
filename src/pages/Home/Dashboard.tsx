import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { IUserManager } from '../../interfaces/ServerResponse';
import { Grid, Space, FloatingBubble, Modal, Image,ProgressCircle  } from 'antd-mobile'
import { ScanningOutline } from 'antd-mobile-icons'
import {QrScanner} from '@yudiel/react-qr-scanner';
import { ValueCard } from '../../components/dashboard/ValueCard';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const { user } = useContext(UserContext) as IUserManager;

    const decode = (decoded: string) => {
        console.log(decoded)
    }

    const handleClick = (label: string) => {
        switch(label) {
            case 'attendance':
                navigate("/attendance");
            break;

            case 'fellowship':
                navigate("/fellowship");    
            break;

            case 'bacenta':
                navigate("/bussing");
            break;

            case 'pastoral_point':
                navigate("/pastoral_point")
            break;
        }
        
    }

    return (
        <>
            <div style={{
                width: '100%',
                height: '20vh',                
                background: "#b12340",
                // background: 'linear-gradient(47deg, rgba(214,203,251,1) 0%, rgba(236,236,250,1) 100%)',
                // backgroundImage: `url('https://t3.ftcdn.net/jpg/04/06/60/72/240_F_406607245_daS9yMQ9g8MMZz3XWf2LVXxFy5cAdLQ7.jpg')`,
                borderBottomRightRadius: 15,
                borderBottomLeftRadius: 15,
                boxShadow: '1px 1px 40px 1px rgba(0,0,0,0.25)',
                margin: 'auto'
            }}>
                <Space style={{ '--gap': '10px' }}>
                    <div style={{width: "35vw", height: "90%", marginTop: 20, marginLeft: 20}}>
                        <Image src='https://i.pravatar.cc/200' fit='cover' style={{ width: "95%", borderRadius: 20 }} />
                    </div>
                    <Space direction='vertical'>
                        <div style={{marginTop: 30}}>
                            <div style={{ height: "20%", width: "55vw", marginTop: 20}}>
                                <p style={{ fontFamily: 'Verdana, sans-serif', fontSize: 25, margin: 0, color: 'white' }}>Hello, <strong>John</strong></p>
                            </div>
                            <div style={{ height: "10%", width: "55vw", marginTop: 5}}>
                                <h1 style={{ fontFamily: 'Verdana, sans-serif', fontSize: 14, fontWeight: 400, margin: 0, color: 'white' }}>SC - Class - Placeholder</h1>
                            </div>
                            <div style={{ height: "10%", width: "55vw", marginTop: 5}}>
                                <h1 style={{ fontFamily: 'Verdana, sans-serif', fontSize: 14, fontWeight: 400, margin: 0, color: 'white' }}>Attendance Rating:</h1>
                                {/* <ProgressCircle
                                    percent={60}
                                    style={{
                                    '--fill-color': 'var(--adm-color-success)',
                                    }}
                                >
                                    60%
                                </ProgressCircle> */}
                            </div>
                        </div>
                    </Space>
                </Space>
            </div>
            <Grid columns={2} gap={2}>
                <Grid.Item >
                    <ValueCard key={"fellowshipAttn"} title="Attendance" value={15} handleClick={() => handleClick("attendance")  } />
                </Grid.Item>
                <Grid.Item>
                    <ValueCard key={"bussingAttnAvg"} title="Fellowship" value={12} handleClick={() => handleClick("fellowship")} />
                </Grid.Item>
                <Grid.Item >
                    <ValueCard key={"fellowshipOfferingAvg"} title="Bussing" value={10} handleClick={() => handleClick("bacenta")} />
                </Grid.Item>
                <Grid.Item>
                    <ValueCard key={"pastoral_point"} title="Pastoral Points" value={15} handleClick={() => handleClick("pastoral_point")} />
                </Grid.Item>
                
            </Grid>
            <FloatingBubble
                style={{
                    '--initial-position-bottom': '24px',
                    '--initial-position-right': '24px',
                    '--edge-distance': '24px',
                    '--z-index': '10px'
                }}
               onClick={() => {
                Modal.alert({
                    title: 'Scan QR Code',
                    content: <>
                    <QrScanner
                        onDecode={(result) => decode(result) }
                        onError={(error) => console.log(error?.message)}
                    /></>,
                    confirmText: 'Ok',
                    onConfirm: () => console.log('ok'),
                })
               }}
            >
            <ScanningOutline fontSize={32} />
        </FloatingBubble>
        </>
    )
}

export default Dashboard;