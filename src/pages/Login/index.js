import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import './index.scss'
const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
const Login = () => (
    <body>
        <section>
            <Form
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <p className='title'>欢 迎 登 录</p>
                <Form.Item
                    label="用户名"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: '请输入用户名',
                        },
                    ]}
                >
                    <Input className='username' />
                </Form.Item>

                <Form.Item
                    label="密 码"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: '请输入密码',
                        },
                    ]}
                >
                    <Input.Password className='pass' />
                </Form.Item>
                <div className='check'>
                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                    >
                        <Checkbox className='check'>记住我</Checkbox>
                    </Form.Item>
                </div >


                <Form.Item
                >
                    <Button type="primary" htmlType="submit" className='submit'>
                        提交
                    </Button>
                </Form.Item>
            </Form>

        </section >
    </body>
);
export default Login;