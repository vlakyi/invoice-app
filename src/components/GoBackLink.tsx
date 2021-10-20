import { Link } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../../public/icon-arrow-left.svg';

import '../styles/components/go-back-link.scss';

interface Props {
  link: string;
}

function GoBackLink({ link }: Props): JSX.Element {
  return (
    <Link to={link} className='go-back-link'>
      <ArrowLeft />
      <h4>Go back</h4>
    </Link>
  );
}

export default GoBackLink;
