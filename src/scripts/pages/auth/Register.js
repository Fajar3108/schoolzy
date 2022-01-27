import '../../../styles/pages/Auth.css';
import { BalloonInput } from "../../components";

const Register = () => {
    return (
        <div className="auth">
            <div className="container">
                <div className="auth-left"></div>
                <div className="auth-right">
                    <h1 className="auth-title">Daftar ke Schoolzy</h1>
                    <p>Selamat datang, silahkan daftar menggunakan alamat email</p>
                    <div className="auth-form">
                        <BalloonInput type="text" id="name" label="Nama" placeholder="John Doe" />
                        <BalloonInput type="email" id="email" label="Email" placeholder="example@email.com" />
                        <BalloonInput type="password" id="password" label="Password" placeholder="************" />
                        <BalloonInput type="password" id="confirmPassword" label="Ulangi" placeholder="************" />
                        <button className="btn-submit">Daftar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;