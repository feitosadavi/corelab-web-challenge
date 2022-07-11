interface IButton {
  type?: "button" | "submit" | "reset"
  id?: string
  onClick: () => void;
  text: string;
}

const Button = ({ id, type, onClick, text }: IButton) => {
  return <button id={id ?? ''} type={type ?? 'button'} data-testid='btn' onClick={onClick}>{text}</button>;
};

export default Button;
