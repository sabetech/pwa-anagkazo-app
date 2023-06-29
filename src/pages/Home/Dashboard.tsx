import { Grid, Card, FloatingBubble, Modal } from 'antd-mobile'
import { ScanningOutline } from 'antd-mobile-icons'
import {QrScanner} from '@yudiel/react-qr-scanner';
import { ValueCard } from '../../components/dashboard/ValueCard';

const Dashboard = () => {

    const decode = (decoded: string) => {
        console.log(decoded)
    }

    return (
        <>
            <div style={{
                width: '100%',
                height: '20vh',
                backgroundColor: 'gray',
                borderBottomRightRadius: 15,
                borderBottomLeftRadius: 15,
                boxShadow: '2px 2px 14px 0px rgba(0,0,0,0.25)',
                margin: 'auto'
            }}>
                
            </div>
            <Grid columns={2} gap={2}>
                <Grid.Item >
                    <ValueCard />
                </Grid.Item>
                <Grid.Item>
                    <ValueCard />
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