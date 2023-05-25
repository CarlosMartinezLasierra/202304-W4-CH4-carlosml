import React, { useState } from "react";

const Keyboard = () => {
  const [text, setText] = useState("");

  const handleKeyDown = (event) => {
    const key = event.key;

    if (key === "Backspace") {
      setText((prevText) => prevText.slice(0, -1));
    } else if (key >= "0" && key <= "9") {
      setText((prevText) => prevText + key);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        onKeyDown={handleKeyDown}
      />

      <div className="keyboard">
        <button className="key" onClick={() => setText(text + "1")}>
          1
        </button>
        <button className="key" onClick={() => setText(text + "2")}>
          2
        </button>
        <button className="key" onClick={() => setText(text + "3")}>
          3
        </button>
        <button className="key" onClick={() => setText(text + "4")}>
          4
        </button>
        <button className="key" onClick={() => setText(text + "5")}>
          5
        </button>
        <button className="key" onClick={() => setText(text + "6")}>
          6
        </button>
        <button className="key" onClick={() => setText(text + "7")}>
          7
        </button>
        <button className="key" onClick={() => setText(text + "8")}>
          8
        </button>
        <button className="key" onClick={() => setText(text + "9")}>
          9
        </button>
        <button className="key" onClick={() => setText(text + "0")}>
          0
        </button>
        <button className="key big" onClick={() => setText("")}>
          delete
        </button>
      </div>
    </div>
  );
};

export default Keyboard;
