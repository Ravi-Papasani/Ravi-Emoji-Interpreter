import React from "react";
import "./styles.css";
import { useState } from "react";

const emojiDictionary = {
  "📱": "Telegram",
  "😂": "Face With Tears of Joy",
  "😘": "Face Blowing a Kiss",
  "✨": "Sparkles",
  "🔥": "Fire",
  "🦋": "Butterfly",
  "🥳": "Partying Face",
  "🍭": "Lollipop",
  "💕": "Two Hearts",
  "🌝": "Full Moon Face",
  "🎂": "Birthday",
  "🍁": "Autumn",
  "🛍": "Black Friday",
  "🥚": "Easter",
  "🥇": "Olympics",
  "🌸": "Spring",
  "🌻": "Summer",
  "😄": "Fun",
  "👱": "Men's",
  "👩": "Women's",
  "🧟": "Walking Dead",
  "🚗": "Top Gear",
  "🎓": "Graduation",
  "🏈": "Super Bowl"
};

//console.log(Object.keys(emojiDictionary));
var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    // console.log(event.target);
    // console.log(event.target.value);
    var userInputEmoji = event.target.value;
    meaning = emojiDictionary[userInputEmoji];
    if (meaning === undefined) {
      setMeaning("This Emoji is not present in our Database, Thank you!");
    } else {
      setMeaning(meaning);
    }
  }

  function emojiClickHandler(emoji) {
    //console.log("emoji clicked" + emoji);
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input
        onChange={emojiInputHandler}
        placeholder="search with your emoji symbol here"
      ></input>
      <h2>
        <span className="emj-output">Emoji Meaning is : </span>
        {meaning}
      </h2>
      <h3>Click on the below Emojies, to know its meaning</h3>
      {
        emojisWeKnow.map(function (emoji) {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              style={{
                fontSize: "3rem",
                padding: "1rem 5rem",
                cursor: "pointer"
              }}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })
        //<span>{emojisWeKnow}</span>
      }
    </div>
  );
}

/*Things to note
class is a keyword 

instead class-> its className in tags
styles-> takes an object in React, instead of "" unlike in plain html
view --> event ---> state ---> render()
*/
