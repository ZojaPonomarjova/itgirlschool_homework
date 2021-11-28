import "./messageInput.scss";

const MessageInput = ({ onClick, ...props }) => {
  console.log("render");
  return (
    <div className="main__input">
      <div className="input__textarea">
        <textarea
          name="message"
          id="textarea"
          className="textarea"
          value={props.value}
          onChange={props.onChange}
        ></textarea>
      </div>
      <button className="input__button" onClick={onClick}>
        Send
      </button>
    </div>
  );
};
export default MessageInput;
