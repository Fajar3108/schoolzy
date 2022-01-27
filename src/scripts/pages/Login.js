import '../../styles/pages/Login.css';
import { BalloonInput } from '../components';

const Login = () => {
    return (
        <div className="login">
            <div className="container">
                <div className="login-left"></div>
                <div className="login-right">
                    <h1 className="login-title">Masuk ke Schoolzy</h1>
                    <p>Selamat datang kembali! login dengan data Anda yang Anda masukkan saat pendaftaran</p>
                    <div className="login-form">
                        <BalloonInput type="email" id="email" label="Email" placeholder="example@email.com" />
                        <BalloonInput type="password" id="password" label="Password" placeholder="************" />
                        <button className="btn-submit">Masuk</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;