import './Header.css';
import profileu from '../images/hhhh.jpeg';

const Header = () => {
    return <header className="header">
        <div className='hfone'>
            <div className='hfones1'>
            <h1>HI THERE, I’M A
DIGITAL PRODUCT
DESIGNER</h1><br />
<p>Caleb Asuquo N. is a Brand Identity, UI/UX & Web Designer
passionate about building brands that inspire & solving problems
creatively with a slight addiction to coffee and music. </p>
            </div>
            <div className='ul'>
                <div className='li1'>Say Hi</div>
                <div className='li2'>Play ShoWreel</div>
            </div>
        </div>
        <img className='proimg' src={profileu} alt='candidate profile' />
    </header>
}

export default Header;