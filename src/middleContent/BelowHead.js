import dev from '../images/devtools.png';
import v from '../video/valu.mp4';
import './BelowHead.css'

const BelowHead = () => {
    return <video className='devImg' poster={dev} controls>
        <source src={v} type='video/mp4' />
    </video>
    //<img className='devImg' src={dev} alt="dev.....libraries." />
}

export default BelowHead;