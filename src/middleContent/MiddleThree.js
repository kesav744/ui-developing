import './MiddleThree.css';
import i from '../images/hhhh.jpeg';

const MiddleThree = () => {
    return <div className="middlethree">
        <h1 className='mthreh1'>WHAT'S NEWS</h1>
        <h1 className='mthreh2'>LATEST ON INSTAGRAM</h1>
        <div className='mthreed'>
            <img src={i} alt='first' />
            <img src={i} alt='first' />
            <img src={i} alt='first' />
        </div>
    </div>
}

export default MiddleThree;