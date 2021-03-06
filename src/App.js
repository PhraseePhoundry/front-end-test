import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 14 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const App = () => {
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <header>
        <img src="./images/dhg_whole.png" />
      </header>
      <main>
        <Form
          layout={'vertical'}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
          >
            <Input
              size="large"
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
          >
            <Input.Password
              size="large"
            />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              disabled={1>0}
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </main>
      <footer>
      </footer>
    </>
  );
}

export default App;
