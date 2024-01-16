import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { IPastoralPoint, IUserManager } from '../../interfaces/ServerResponse';
import { Grid, Space, FloatingBubble, Modal, Image,Button, ActionSheet, Dialog  } from 'antd-mobile'
import { ScanningOutline, MoreOutline } from 'antd-mobile-icons'
import {QrScanner} from '@yudiel/react-qr-scanner';
import { ValueCard } from '../../components/dashboard/ValueCard';
import { useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from 'react-query';
import { getPastoralPoint, getBussing } from '../../services/StudentData';
import { ServerResponse, IBussing } from '../../interfaces/ServerResponse';
import { postAttendance } from '../../services/Attendance';
import type {
    Action
} from 'antd-mobile/es/components/action-sheet';
import { IAttendanceRequestInfo } from '../../interfaces/Attendance';

const Dashboard = () => {
    
    const navigate = useNavigate();
    const [_, setPastoralPoint] = useState<IPastoralPoint[]>([]);
    const [totalPoints, setTotalPoints] = useState<number>(0);
    const [visible, setVisible] = useState(false)
    const { user, storeUser } = useContext(UserContext) as IUserManager;
    console.log(user);
    const {data: pastoralPoints, isLoading} = useQuery<ServerResponse>(['pastoral_points'], () => getPastoralPoint(user?.index_number as number));
    const { data: bussingData, isLoading: bussingLoading } = useQuery<ServerResponse>(['bussing'], () => getBussing(user?.index_number as number));
    const [averageBussing, setAverageBussing] = useState<number>(0);

    const { mutate, isLoading: scanning } = useMutation({
        mutationFn: async (values: IAttendanceRequestInfo) => {
            return await postAttendance(user?.id as number, values)
        },
        retry: 3,
        onSuccess: () => {

        },
        onError: (error) => {
            console.log(error)
        }
    });

    useEffect(() => {

        if (pastoralPoints?.data) {
            const parameters = pastoralPoints.data?.data.map((pastoralPoint: IPastoralPoint) => {
                return pastoralPoint
            });
            setPastoralPoint(parameters);
            const myTotalPoints = pastoralPoints.data?.data.reduce((total: number, pastoralPoint: IPastoralPoint) => {
                return total + pastoralPoint.pivot.points
            }, 0)
            setTotalPoints(myTotalPoints as number);
        }

    },[pastoralPoints])

    useEffect(() => {

        if (bussingData?.data) {
            const bussingDetails = bussingData.data?.data.map((bussing: IBussing) => {
                return bussing;
            });

            const myAverageBussing = bussingDetails.reduce((total: number, bussing: IBussing) => {
                return total + bussing.number_bussed
            }, 0) / bussingDetails.length;
            setAverageBussing(myAverageBussing.toFixed(0) as unknown as number);
        }

    }, [bussingData])
    
    const actions: Action[] = [
        {
            text: 'Logout', key: 'logout', danger: true,
            onClick: () => {
                Modal.confirm({
                    title: 'Logout',
                    content: 'Are you sure you want to logout?',
                    confirmText: 'Yes',
                    cancelText: 'No',
                    showCloseButton: true,
                    onConfirm: () => {
                        localStorage.removeItem('user');
                        storeUser(null as any);
                        navigate('/');
                    },
                    onCancel: () => {
                        setVisible(false)
                    }
                })
            }
        }
    ]

    let requestCount = 0;
    const decode = (decoded: string) => {
        if (requestCount > 0) return;
        requestCount++;
        let attnInfo = JSON.parse(decoded) as IAttendanceRequestInfo
        mutate(attnInfo)
        Modal.clear();

        Dialog.alert({
            title: attnInfo.event,
            content: 'Attendance marked successfully',
            confirmText: 'OK!',
            onConfirm: () => {
                requestCount = 0;
            }
        
        })

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
                    {/* https://via.placeholder.com/250 */}
                    <div style={{width: "35vw", height: "90%", marginTop: 20, marginLeft: 20}}>
                        <Image src='https://via.placeholder.com/200' fit='cover' style={{ width: "95%", borderRadius: 20 }} />
                    </div>
                    
                    <Space direction='vertical'>
                        <MoreOutline fontSize={32} color={'white'} style={{float:'right'}} onClick={() => setVisible(true)} />
                        <div style={{marginTop: -30}}>
                            
                            <div style={{ height: "20%", width: "55vw", marginTop: 20}}>
                                <p style={{ fontFamily: 'Verdana, sans-serif', fontSize: 25, margin: 0, color: 'white' }}>Hello, <strong>{user?.name.split(" ")[0]}</strong></p>
                                </div>
                            <div style={{ height: "10%", width: "55vw", marginTop: 5}}>
                                <h1 style={{ fontFamily: 'Verdana, sans-serif', fontSize: 14, fontWeight: 400, margin: 0, color: 'white' }}>{user?.class}</h1>
                            </div>
                            <div style={{ height: "10%", width: "55vw", marginTop: 5}}>
                                <h1 style={{ fontFamily: 'Verdana, sans-serif', fontSize: 14, fontWeight: 400, margin: 0, color: 'white' }}>Pastoral Point: <strong>{totalPoints}</strong></h1>
                            </div>
                        </div>
                    </Space>
                    
                </Space>
            </div>
            <Grid columns={2} gap={2}>
                <Grid.Item >
                    <ValueCard key={"event_attendance"} title="Attendance" value={15} handleClick={() => handleClick("attendance")  } />
                </Grid.Item>
                {/* <Grid.Item>
                    <ValueCard key={"bussingAttnAvg"} title="Fellowship" value={12} handleClick={() => handleClick("fellowship")} />
                </Grid.Item>
                <Grid.Item >
                    <ValueCard key={"fellowshipOfferingAvg"} title="Bussing" value={ averageBussing } handleClick={() => handleClick("bacenta")} />
                </Grid.Item>
                <Grid.Item>
                    <ValueCard key={"pastoral_point"} title="Pastoral Points" value={totalPoints} handleClick={() => handleClick("pastoral_point")} />
                </Grid.Item> */}
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
        <ActionSheet
            visible={visible}
            actions={actions}
            onClose={() => setVisible(false)}
        />
        </>
    )
}

export default Dashboard;