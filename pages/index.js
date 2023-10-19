import Head from "next/head";
import styles from "../styles/Chatbot.module.css";
import { useState } from "react";
import { Suggestions } from "../../Constants";


export default function Chatbot() {
  const [msgs, setMsgs] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [chat, setChat] = useState(false);

  function addMsg(text) {
    const x = <div className={styles.sentmsg}>{text}</div>;
    const y = <div className={styles.recmsg}>{text}</div>;
    const msgg = [...msgs, x, y];
    setMsgs(msgg);
  }

  const handleClick = () => {
    if(inputValue!="")
      addMsg(inputValue);
    setInputValue("");
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const reload = () => {
    const msgg = [];
    setMsgs(msgg);
  };
  const close = () => {
    setChat(false);
  };

  const handleChatBot = () => {
    setChat(~chat);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Chatbase clone</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <main>
        <div className={styles.container}>
          {chat ? (
            <div className={styles.wrapper}>
              <div className={styles.wrapperTop}>
                <div className={styles.top}>
                  <div className={styles.topLeft}>
                    <img src="logo.png" />
                    <div className={styles.topHeading}>Chatbase</div>
                  </div>
                  <div className={styles.topButtons}>
                    <img src="reload.png" onClick={reload}></img>
                    <img src="close.png" onClick={close}></img>
                  </div>
                </div>

                <div className={styles.messageBoard}>
                  {msgs.map((ele) => ele)}
                </div>
              </div>
              <div className={styles.wrapperBottom}>
                <div className={styles.suggestions}>
                  {Suggestions.map((sug) => (
                    <div
                      className={styles.suggestion}
                      onClick={() => addMsg(sug)}
                    >
                      {sug}
                    </div>
                  ))}
                </div>
                <div className={styles.inputBox}>
                  <input
                    className={styles.input}
                    value={inputValue}
                    onChange={handleInputChange}
                  ></input>
                  <img
                    src="go.png"
                    onClick={handleClick}
                    className={styles.go}
                  />
                </div>
              </div>
            </div>
          ) : null}
          <div className={styles.logoo}>
            <img src={chat ? "down.svg" : "logo.png"} onClick={handleChatBot} />
          </div>
        </div>
      </main>
    </div>
  );
}
