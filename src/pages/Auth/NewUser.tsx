import { AutoCenter, PasscodeInput, Form, Button, NumberKeyboard, Space } from 'antd-mobile'

const NewUser = () => {
    return (
        <AutoCenter>
            <Space direction='vertical' >'
                <h1 style={{marginLeft: 15}}>
                    Hello New user,
                </h1>
                <div style={{marginBottom: "10vh", width: "90%" }}>
                    
                    <h2 style={{marginLeft: 20}}> 
                    An email will be sent to <strong><em>xyz@mail.com.</em> </strong>
                    <br />Use the code sent to your email to login.
                    </h2>
                </div>
            </Space>
            <Form
                layout='horizontal'
                footer={
                <Button block type='submit' color='primary' size='large'>
                    Login
                </Button>
                }
            >
                <Form.Item
                    name='passcode'
                    label='Passcode:'
                    rules={[{ required: true, message: 'Please enter your passcode' }]}
                    >
                    <PasscodeInput length={4} keyboard={<NumberKeyboard />} />
                </Form.Item>
                
            </Form>
                <div style={{ display:"flex", justifyContent: 'center' }}>
                    <a >Sign in with a different account</a>    
                </div>
        </AutoCenter>
    );
}

export default NewUser;