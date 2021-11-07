import { useHistory } from 'react-router-dom';
import LogoIcon from '../../public/logo.svg';
import '../styles/components/logo.scss';

const Logo = (): JSX.Element => {
  const history = useHistory();
  return (
    <button
      type='button'
      className='logo-container'
      onClick={() => history.push('/')}
    >
      <div className='logo-box' />
      <div className='logo-box' />
      <img src={LogoIcon} alt='logo' />
    </button>
  );
};

export default Logo;
