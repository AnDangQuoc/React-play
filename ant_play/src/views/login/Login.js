import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, Card } from 'antd';
import './Login.css'

const FormItem = Form.Item;

class NormalLoginForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {

        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Card>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem>
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        </FormItem>
                        <FormItem>
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        </FormItem>
                        <FormItem>
                            <Checkbox>Remember me</Checkbox>
                            <a className="login-form-forgot" href="">Forgot password</a>
                            <br />
                            <Button type="primary" className="login-form-button">
                                Log in
                            </Button>
                            <br />
                            Or <a href="">register now!</a>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm