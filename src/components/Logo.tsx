import LogoIcon from '../../public/logo.svg';
import '../styles/components/logo.scss';

const Logo = (): JSX.Element => {
  return (
    <div className='logo-container'>
      <div className='logo-box' />
      <div className='logo-box' />
      <img src={LogoIcon} alt='logo' />
    </div>
  );
};

export default Logo;
