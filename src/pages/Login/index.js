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
                    label="手机号"
                    name="mobile"
                    rules={[
                        {
                            required: true,
                            message: '请输入手机号',
                        },
                        {
                            pattern: /^1[3-9]\d{9}$/,
                            message: "请输入合法手机号"
                        }
                    ]}
                >
                    <Input className='username' />
                </Form.Item>

                <Form.Item
                    label="验证码"
                    name="code"
                    rules={[
                        {
                            required: true,
                            message: '请输入验证码',
                        },
                        {
                            pattern: /\d{6}/,
                            message: "请输入合法验证码"
                        }

                    ]}
                >
                    <Input.Password className='pass' maxLength={6} />
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