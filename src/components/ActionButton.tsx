import { ButtonHTMLAttributes } from 'react';
import '../styles/components/action-button.scss';

enum ClassModifiers {
  neutral = 'neutral',
  danger = 'danger',
  primary = 'primary',
  action = 'action',
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  classModifier?: keyof typeof ClassModifiers;
}

// disable eslint because of poor implementation
const ActionButton = ({
  text,
  classModifier = 'neutral',
  onClick,
  type = 'button',
  ...props
}: Props): JSX.Element => {
  return (
    <button
      className={`action-button action-button--${classModifier}`}
      // eslint-disable-next-line react/button-has-type
      type={type}
      onClick={onClick}
      {...props}
    >
      {text}
    </button>
  );
};

export default ActionButton;
