import "./main.scss";
import MessageInput from "../messageInput";
import { useState } from "react";
import Message from "../message";

const Main = () => {
  const [value, setValue] = useState("");

  const handleChange = e => {
    setValue(
      e.target.value
        .replace(/(\r\n|\n|\r)/gm, "")
        .replace(/ +/g, " ")
        .trim(),
    );
  };

  const [array, setArray] = useState([]);

  const handleSend = () => {
    if (value) {
      setArray([value, ...array]);
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
            <Message key={index} text={message} isFirst={index === 0} />
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
