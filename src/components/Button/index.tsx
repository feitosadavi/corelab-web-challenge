interface IButton {
  onClick: () => void;
  text: string;
}

const Button = (props: IButton) => {
  return <button data-testid='btn' onClick={props.onClick}>{props.text}</button>;
};

export default Button;
