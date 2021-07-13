import styles from './Login.module.scss'
import logo from '../../../media/logob.svg'
import {Link} from 'react-router-dom'
import { auth } from '../../../firebase';

const Login = () => {

    const LogInApp = (e) => {
        e.preventDefault();
        
    }

    return (
        <>
            <div className={styles.login}>
                <div className={styles.loginform}>
                    <form>
                    <img src={logo} alt='ChoCho' height='100' width='200'></img>
                    <h3>Log in to your account</h3>
                    <input type='email' placeholder='Email'></input>
                    <input type='password' placeholder='Password'></input>
                    <button>Login</button>
                    </form>
                </div>
                <div className={styles.register}><Link to='/signup'>Don't have an account? Register</Link></div>
            </div>
        </>
    )
};

export default Login