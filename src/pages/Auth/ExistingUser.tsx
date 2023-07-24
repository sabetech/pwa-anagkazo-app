import { AutoCenter, PasscodeInput, Form, Button, NumberKeyboard } from 'antd-mobile'


const ExistingUser = () => {

    return ( <>
        <AutoCenter>
            <div style={{marginTop: "10vh", marginBottom: "10vh"}}>
                <h1>
                    Hello Existing user,
                </h1>
                <h2> Please enter your passcode</h2>
            </div>
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
    </>);
}

export default ExistingUser;