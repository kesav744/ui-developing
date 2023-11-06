import ImgFirst from './ImgFirst';
import ImgSecond from './ImgSecond';
import './MiddleOne.css';

const MiddleOne = () => {
    return <div>
        <h1 className='h1'>MY FUTURED <br /> PROJECTS</h1>
        <div className='moid'>
            <ImgFirst />
            <ImgSecond />
            <ImgFirst />
            <ImgSecond />
        </div>
    </div>
}

export default MiddleOne;