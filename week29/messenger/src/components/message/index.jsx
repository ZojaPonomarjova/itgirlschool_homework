import "./message.scss";

const Message = ({ text, ...props }) => {
  return <div className={`message ${props.className}`}>{text}</div>;
};
export default Message;
