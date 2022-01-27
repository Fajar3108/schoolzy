import '../../../styles/components/BalloonInput.css';

const BalloonInput = ({ type, placeholder, value, id, label }) => {
    return (
        <div className="balloon-input">
            <input type={type} id={id} placeholder={placeholder} value={value} />
            <label htmlFor={id}>{label}</label>  
        </div>
    );
}

export default BalloonInput;