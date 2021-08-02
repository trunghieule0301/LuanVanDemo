import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../css/Login.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Input, Button, Checkbox, Spin } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';

const LoginPage = ({ loading, error, onAuth }) => {

    const onFinish = (values) => {
        onAuth(values.username, values.password);
    };

    let errorMessage = null;
    if (error) {
        errorMessage = (
            <p>Username or password is incorrect</p>
        );
    }


    return (
        <div className="background">
            <Row className="wrap">
                <Col xs={12} md={8}>
                    <div className="margin">
                        <p className="decor">Hello! <FontAwesomeIcon icon="align-center" color="rgb(160, 208, 248)" /> Welcome to <span className="brand">BooK</span> library</p>
                    </div>
                </Col>
                <Col xs={6} md={4}>
                    <div className="wrap-login">
                        <div className="wrap-login1">
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