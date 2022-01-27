import { Link } from 'react-router-dom';
import '../../../styles/pages/Auth.css';
import { BalloonInput } from '../../components';

const Login = () => {
    return (
        <div className="auth">
            <div className="container">
                <div className="auth-left"></div>
                <div className="auth-right">
                    <h1 className="auth-title">Masuk ke Schoolzy</h1>
                    <p>Selamat datang kembali! login dengan data Anda yang Anda masukkan saat pendaftaran</p>
                    <div className="auth-form">
                        <BalloonInput type="email" id="email" label="Email" placeholder="example@email.com" />
                        <BalloonInput type="password" id="password" label="Password" placeholder="************" />
                        <button className="btn-submit">Masuk</button>
                        <Link to="/register" className="auth-link">Belum punya akun? Daftar</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;