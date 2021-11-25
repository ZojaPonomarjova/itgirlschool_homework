import "./main.scss";
import MessageInput from "../messageInput";
import { useState } from "react";
import Message from "../message";
import classnames from "classnames";

const Main = () => {
  const [value, setValue] = useState("");

  const handleChange = e => {
    setValue(e.target.value.replace(/(\r\n|\n|\r)/gm, ""));
  };

  const [array, setArray] = useState([]);

  const handleSend = () => {
    const finalMessage = value.replace(/ +/g, " ").trim();
    if (finalMessage) {
      setArray([finalMessage.replace(/(\r\n|\n|\r)/gm, ""), ...array]);
      // console.log(array);
    } else {
      setValue("");
      return;
    }

    setValue("");
  };

  return (
    <div className="container">
      <main className="main">
        <div className="main__header"></div>
        <div className="main__messages">
          {array.map((message, index) => (
            <Message
              key={index}
              text={message}
              className={classnames("", {
                message_first: index === 0,
              })}
            />
          ))}
        </div>

        <MessageInput
          value={value}
          onClick={handleSend}
          onChange={handleChange}
        />
      </main>
    </div>
  );
};
export default Main;
