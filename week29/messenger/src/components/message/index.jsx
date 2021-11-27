import "./message.scss";
import classnames from "classnames";

const Message = ({ text, ...props }) => {
  const className = classnames("message", {
    message_first: props.isFirst,
  });
  return <div className={className}>{text}</div>;
};
export default Message;
