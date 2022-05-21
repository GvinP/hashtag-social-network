import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {required} from "../../utils/validators";
import {Input} from "../common/formsControl/formsControl";
import {AppStateType} from "../../redux/store";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

type MapStatePropsType = {
    isAuth: boolean
}
type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}
export type LoginPropsType = MapStatePropsType & MapDispatchPropsType

export const Login = (props: LoginPropsType) => {
    const onSubmit = (values: FormDataType) => {
        props.login(values.email, values.password, values.rememberMe)
    }
    return (
        <>
           <div>Login</div>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    );
};


const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'}
                       name={'email'}
                       component={Input}
                       validate={[required]}
                />
            </div>
            <div>
                <Field placeholder={'Password'}
                       name={'password'}
                       component={Input}
                       validate={[required]}
                />
            </div>
            <div>
                <Field type={'checkbox'}
                       name={'rememberMe'}
                       component={Input}
                />
            </div>
            {props.error && <div >
                {props.error}
                </div>}
            <button>Login</button>
        </form>
    );
};

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.authData.isAuth
})

export default connect(mapStateToProps, {login})(Login)


