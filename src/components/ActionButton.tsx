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
}

const ActionButton = ({ text, classModifier = 'neutral' }: Props): JSX.Element => {
  return (
    <button className={`action-button action-button--${classModifier}`} type='button'>
      {text}
    </button>
  );
};

export default ActionButton;
