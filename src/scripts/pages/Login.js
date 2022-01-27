import '../../styles/pages/Login.css';
import { BalloonInput } from '../components';

const Login = () => {
    return (
        <div className="login">
            <div className="loginRight">
                <h1 className="loginTitle">Masuk ke Schoolzy</h1>
                <p>Selamat datang kembali! login dengan data Anda yang Anda masukkan saat pendaftaran</p>
                <div className="loginForm">
                    <BalloonInput type="email" id="email" label="Email" placeholder="example@email.com" />
                    <BalloonInput type="password" id="password" label="Password" placeholder="************" />
                    <button className="btnSubmit">Masuk</button>        
                </div>
            </div>
        </div>
    );
};

export default Login;