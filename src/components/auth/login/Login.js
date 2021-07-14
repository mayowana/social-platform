import styles from './Login.module.scss'
import logo from '../../../media/logob.svg'
import {Link} from 'react-router-dom'
import { auth } from '../../../firebase';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../../features/userSlice';

const Login = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const dispatch = useDispatch()

    const LogInApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, pass)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
            }))
        }).catch(error => alert(error));
    }

    return (
        <>
            <div className={styles.login}>
                <div className={styles.loginform}>
                    <form onSubmit={LogInApp}>
                    <img src={logo} alt='ChoCho' height='100' width='200'></img>
                    <h3>Log in to your account</h3>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email'></input>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type='password' placeholder='Password'></input>
                    <button type='submit'>Login</button>
                    </form>
                </div>
                <div className={styles.register}><Link to='/signup'>Don't have an account? Register</Link></div>
            </div>
        </>
    )
};

export default Login