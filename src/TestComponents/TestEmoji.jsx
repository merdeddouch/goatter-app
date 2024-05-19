import React, { useState } from "react";
import Picker from "emoji-picker-react";

const TestEmoji = () => {

    const [inputStr, setInputStr] = useState("");
    const [selectedEmojis, setSelectedEmojis] = useState([]);
    const [showPicker, setShowPicker] = useState(false);
  
    const onEmojiClick = (event, emojiObject) => {
      setSelectedEmojis([...selectedEmojis, emojiObject.emoji]);
    };
  
    const handleEmojiPickerToggle = () => {
      setShowPicker(!showPicker);
    };
  
    const handleInputEmoji = (emoji) => {
      setInputStr(inputStr + emoji);
      setShowPicker(false);
    };
  
    return (
      <div className="app">
        <div className="picker-container">
          <input
            className="input-style"
            value={inputStr}
            onChange={(e) => setInputStr(e.target.value)}
          />
          <img
            className="emoji-icon"
            src="https://icons.getbootstrap.com/assets/icons/emoji-smile.svg"
            onClick={handleEmojiPickerToggle}
          />
          {showPicker && (
            <Picker pickerStyle={{ width: "100%" }} onEmojiClick={onEmojiClick} />
          )}
          {selectedEmojis.length > 0 && (
            <div className="selected-emojis">
              {selectedEmojis.map((emoji, index) => (
                <span
                  key={index}
                  className="emoji-item"
                  onClick={() => handleInputEmoji(emoji)}
                >
                  {emoji}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

export default TestEmoji
