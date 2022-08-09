import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {required} from "../../utils/validators";
import {Input} from "../common/formsControl/formsControl";
import {AppStateType} from "../../redux/store";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import { Navigate } from 'react-router-dom';
import styles from './Login.module.css'

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
    if (props.isAuth) {
        return <Navigate to={'/profile'}/>
    }
    return (
        <div className={styles.container}>
           <div className={styles.title}>Login</div>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
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
                       className={styles.input}
                />
            </div>
            <div>
                <Field placeholder={'Password'}
                       name={'password'}
                       component={Input}
                       validate={[required]}
                       className={styles.input}
                />
            </div>
            <div className={styles.checkboxContainer}>
                <Field type={'checkbox'}
                       name={'rememberMe'}
                       component={Input}
                       className={styles.checkbox}
                />
                Remember me
            </div>
            {props.error && <div >
                {props.error}
                </div>}
            <button className={styles.button}>Login</button>
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


