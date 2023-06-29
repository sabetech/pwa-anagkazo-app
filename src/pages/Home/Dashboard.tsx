import { Grid, Card } from 'antd-mobile'

const Dashboard = () => {
    return (
        <>
            <Grid columns={2} gap={2}>
                <Grid.Item>
                    <Card title='Avg Fellowship Attn' >
                        <h1 style={{fontSize:64, paddingTop:0}}>13</h1>
                    </Card>
                </Grid.Item>
                <Grid.Item>
                    <Card title='Avg Bussing Attn' >
                    <h1>13</h1>
                    </Card>
                </Grid.Item>
                <Grid.Item>
                    <Card title='Avg Percentage' >
                    <h1>13</h1>
                    </Card>
                </Grid.Item>
            </Grid>
        </>
    )
}

export default Dashboard;