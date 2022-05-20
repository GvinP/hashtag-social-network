import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const Login = () => {
    const onSubmit = (values: any) => {
      alert(values.login + values.password + values.rememberMe)
    }
    return (
        <>
           <div>Login</div>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    );
};

export default Login;

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'login'} component={'input'}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={'input'}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={'input'}/>
            </div>
            <button>Login</button>
        </form>
    );
};

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)



