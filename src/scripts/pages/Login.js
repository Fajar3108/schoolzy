import '../../styles/pages/Login.css';

const Login = () => {
    return (
        <div className="login">
            <div className="loginRight">
                <h1 className="loginTitle">Masuk ke Schoolzy</h1>
                <p>Selamat datang kembali! login dengan data Anda yang Anda masukkan saat pendaftaran</p>
                <div className="loginForm">
                    <div className="formGroup">
                        <input className="inputGroup" type="email" id="email" placeholder="example@email.com" />
                        <label for="email">Email</label>  
                    </div>              
                    <div className="formGroup">
                        <input className="inputGroup" type="password" id="password" placeholder="**********" />
                        <label for="password">Password</label>  
                    </div>
                    <button className="btnSubmit">Masuk</button>        
                </div>
            </div>
        </div>
    );
};

export default Login;