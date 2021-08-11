import React from 'react';
import '../css/Login.css';
import { Form, Input, Button, Checkbox, Spin } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';
import { Row, Col } from 'antd';
import book from '../images/book.png';

const LoginPage = ({ loading, error, onAuth }) => {

    const onFinish = (values) => {
        onAuth(values.username, values.password);
    };

    let errorMessage = null;
    if (error) {
        console.log(error)
        errorMessage = (
            <p>Username or password is incorrect</p>
        );
    }


    return (
        <div className="background">
            <Row className="wrap">
                <Col flex="1 1 200px">
                    <div style={{ position: 'absolute', height: '100%' }}>
                        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            </div>
                            <div style={{}}>
                                <p style={{ fontSize: '60px', color: 'rgb(220, 220, 220)', lineHeight: '0' }}>Welcome to</p>
                                <p style={{ fontSize: '130px', color: 'rgb(229, 229, 229)', fontWeight: 'bold', lineHeight: '0.9' }}>BooK library</p>
                            </div>
                        </div>
                    </div>
                    <div className="margin">
                        <img src={book} alt="fireSpot" />
                    </div>
                </Col>
                <Col flex="0 1 500px">
                    <div className="wrap-login">
                        <div className="wrap-login1">
                            <p className="text-center" style={{ fontSize: '40px' }}>Login</p>
                            {errorMessage}
                            {
                                loading ?
                                    <div className="spin">
                                        <Spin />
                                    </div>

                                    :

                                    <Form
                                        name="normal_login"
                                        className="login-form"
                                        initialValues={{
                                            remember: true,
                                        }}
                                        size="large"
                                        onFinish={onFinish}
                                    >
                                        <Form.Item
                                            name="username"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your Username!',
                                                },
                                            ]}
                                        >
                                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                                        </Form.Item>
                                        <Form.Item
                                            name="password"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your Password!',
                                                },
                                            ]}
                                        >
                                            <Input
                                                prefix={<LockOutlined className="site-form-item-icon" />}
                                                type="password"
                                                placeholder="Password"
                                            />
                                        </Form.Item>
                                        <Form.Item>
                                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                                <Checkbox>Remember me</Checkbox>
                                            </Form.Item>

                                        </Form.Item>

                                        <Form.Item>
                                            <Button type="primary" htmlType="submit" className="login-form-button">
                                                Log in
                                            </Button>
                                            &nbsp; Or <a href="/signup">register now!</a>
                                        </Form.Item>
                                    </Form>
                            }
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAuth: (username, password) => dispatch(actions.authLogin(username, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);