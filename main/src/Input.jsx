import React, { useState } from "react";
import './input.css'

function Text() {
    const [text, setText] = useState("");

    const handleInputChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={handleInputChange}
            />
            <div>{text}</div>
        </div>
    );
}

export default Text;
