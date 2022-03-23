import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import logo from 'assets/images/appLogo.png';
import Button from '@material-ui/core/Button';
import { Formik, FormikValues, Field, ErrorMessage } from 'formik';
import { LoginDispatchProps, LoginMapStateProps } from '../interface/login.interface';
import { renderInput, FieldErrorMessage } from 'shared/components/form/inputTypes';
import { errorMessages } from 'shared/constants/messages';
import * as Yup from 'yup';
import './login.css';

/**
 * LoginComponent - login form
 */
const LoginComponent = (props: LoginDispatchProps & LoginMapStateProps) => {
	if (props.auth) {
		return (<Redirect to='/' />);
	}
	return (
		<div className='app-login-container d-flex justify-content-center align-items-center'>
			<div className='app-login-main-content'>

				<div className='app-logo-content login-image'>
					<img className='login-logo' src={logo} alt='jambo' title='jambo' />
				</div>

				<div className='app-login-content'>
					<div className='app-login-header mb-0'>
						<h1>Login</h1>
					</div>

					<div className='app-login-form'>

						<Formik initialValues={{ email: '', password: '' }} validateOnBlur={true} validateOnChange={true}
							onSubmit={(values: FormikValues) => {
								props.onLogin({ email: values.email, password: values.password });
							}} validationSchema={loginFormValidationSchema}
						>
							{({ handleSubmit, values }) => (
								<form onSubmit={handleSubmit}>
									<fieldset>
										<div className='form-item'>
											<Field
												type='text'
												label='Email'
												placeholder='Email'
												defaultValue={values.email}
												component={renderInput}
												name='email'
												autoComplete='off'
											/>
											<ErrorMessage name='email' component={FieldErrorMessage} />
										</div>

										<div className='form-item'>
											<Field
												type='password'
												label='Password'
												placeholder='Password'
												defaultValue={values.password}
												component={renderInput}
												name='password'
												autoComplete='off'
											/>
											<ErrorMessage name='password' component={FieldErrorMessage} />
										</div>

										<div className='mt-2 d-flex align-items-center justify-content-between'>
											<Button
												disabled={props.loading}
												type='submit' variant='contained' color='primary'
											>SIGN IN</Button>
											<Link to='/password/forgot'>
												Forgot password?
											</Link>
										</div>
										{/* {!!values.password && !!values.password && <span className="Error">{props.error}</span>} */}

									</fieldset>
								</form>
							)}
						</Formik>

					</div>
				</div>

			</div>
		</div>
	);
};

/**
 * validation schema to be used in validating login form data
*/
const loginFormValidationSchema = Yup.object().shape({
	email: Yup.string()
		.required(errorMessages.required('email')).strict(true)
		.matches(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/, errorMessages.customEmailMessage),
	password: Yup.string()
		.required(errorMessages.required('password')).strict(true)
});

export default LoginComponent;
