interface IProps {
  msg?: string;
  key?: string;
}
const InputErrorMessage = ({ msg }: IProps) => {
  return msg ? <span className="block text-sm text-red-700">{msg}</span> : null;
};

export default InputErrorMessage;
