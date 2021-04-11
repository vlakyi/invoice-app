import Logo from './Logo';
import useTheme from '../hooks/useTheme';

import { ReactComponent as MoonIcon } from '../../public/icon-moon.svg';
import { ReactComponent as SunIcon } from '../../public/icon-sun.svg';
import '../styles/components/header.scss';
import avatarUrl from '../../public/image-avatar.jpg';

const Header = (): JSX.Element => {
  const [isDark, toggleTheme] = useTheme();

  return (
    <header className='main-page-header'>
      <Logo />
      <section>
        {isDark ? (
          <SunIcon onClick={toggleTheme} className='theme-icon' data-testid='sun-icon' />
        ) : (
          <MoonIcon onClick={toggleTheme} className='theme-icon' data-testid='moon-icon' />
        )}
        <div className='horizontal-line' />
        <img src={avatarUrl} alt='avatar icon' />
      </section>
    </header>
  );
};

export default Header;
