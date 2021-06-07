import '../styles/components/action-button.scss';

enum ClassModifiers {
  neutral = 'neutral',
  danger = 'danger',
  primary = 'primary',
  action = 'action'
}

interface Props {
  text: string;
  classModifier?: keyof typeof ClassModifiers;
  onClick?: () => void;
}

const ActionButton = ({ text, classModifier = 'neutral', onClick }: Props): JSX.Element => {
  return (
    <button className={`action-button action-button--${classModifier}`} type='button' onClick={onClick}>
      {text}
    </button>
  );
};

export default ActionButton;
