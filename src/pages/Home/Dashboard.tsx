import { Grid, Space, FloatingBubble, Modal, Image } from 'antd-mobile'
import { ScanningOutline } from 'antd-mobile-icons'
import {QrScanner} from '@yudiel/react-qr-scanner';
import { ValueCard } from '../../components/dashboard/ValueCard';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    const decode = (decoded: string) => {
        console.log(decoded)
    }

    const handleClick = (label: string) => {
        navigate("/details/2");
    }

    return (
        <>
            <div style={{
                width: '100%',
                height: '20vh',
                backgroundColor: 'white',
                borderBottomRightRadius: 15,
                borderBottomLeftRadius: 15,
                boxShadow: '2px 2px 14px 0px rgba(0,0,0,0.25)',
                margin: 'auto'
            }}>
                <Space style={{ '--gap': '10px' }}>
                    <div style={{width: "35vw", height: "90%", marginTop: 20, marginLeft: 20}}>
                        <Image src='https://i.pravatar.cc/200' fit='cover' style={{ width: "95%", borderRadius: 20 }} />
                    </div>
                    <Space direction='vertical'>
                        <div style={{marginTop: 30}}>
                            <div style={{ height: "20%", width: "55vw", marginTop: 20}}>
                                <h1 style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>Hello, <strong>John</strong></h1>
                            </div>
                            <div style={{ height: "10%", width: "55vw", marginTop: 5}}>
                                <h1 style={{ fontSize: 16, fontWeight: 400, margin: 0 }}>SC - Class - Placeholder</h1>
                            </div>
                            <div style={{ height: "10%", width: "55vw", marginTop: 5}}>
                                <h1 style={{ fontSize: 16, fontWeight: 400, margin: 0 }}>Attendance Rating</h1>
                            </div>
                        </div>
                    </Space>
                </Space>
            </div>
            <Grid columns={2} gap={2}>
                <Grid.Item >
                    <ValueCard key={"fellowshipAttn"} title="Fellowship Attn Avg" value={15} handleClick={() => handleClick("Fellowship")  } />
                </Grid.Item>
                <Grid.Item>
                    <ValueCard key={"bussingAttnAvg"} title="Bussing Attn Avg" value={15} handleClick={() => console.log("Hellow world")} />
                </Grid.Item>
                <Grid.Item >
                    <ValueCard key={"fellowshipOfferingAvg"} title="Fellowship Offering Avg" value={15} handleClick={() => console.log("Hellow world")} />
                </Grid.Item>
                <Grid.Item>
                    <ValueCard key={"x"} title="hei" value={15} handleClick={() => console.log("Hellow world")} />
                </Grid.Item>
                
            </Grid>
            <FloatingBubble
                style={{
                    '--initial-position-bottom': '24px',
                    '--initial-position-right': '24px',
                    '--edge-distance': '24px',
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