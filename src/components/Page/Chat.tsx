import React from 'react'
import Header from '../Header'
import '../../css/chat.css';
import { useState, useRef, useEffect } from 'react';

interface Message {
    id: number;
    text: string;
    name: string;
    sender: 'user' | 'bot';
}


const ChatPage = () => {
    // メッセージリスト
    const [messages, setMessages] = useState<Message[]>([]);
    // ユーザの入力値
    const [input, setInput] = useState<string>('');
    // メッセージ末尾の参照
    const messagesEndRef = useRef<HTMLDivElement | null>(null);
    // メッセージid
    const idCounter = useRef<number>(0);

    // メッセージを送信する関数
    const sendMessage = () => {
        if (input.trim()) {
            // let namevalue = ["imoto","bot"];
            // let nameid = 1;
            // if (input === "bot"){
            //     nameid = 0;
            // }
            // ユーザーのメッセージをmessagesに追加
            const newMessage: Message = { id: idCounter.current++, text: input, sender: 'user', name: "imoto" };
            setMessages(prevMessages => [...prevMessages, newMessage]);
            setInput('');

            // ボットからの返信をイメージ。返信内容をmessagesに追加
            setTimeout(() => {
                const botReply: Message = { id: idCounter.current++, text: `Bot返信: ${input}`, sender: 'bot', name: "bot" };
                setMessages(prevMessages => [...prevMessages, botReply]);
            }, 1000);
        }
    };

    // messagesリストが更新された時に最下部にスクロールする
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (

        <div>
            <Header />
            <div className="chat-contents">
                <div className="sideber">
                </div>
                <div className="chat">
                    <div className="chat-container">
                        <div className="messages">
                            {/* messagesリストをmapで展開 */}
                            {messages.map((message) => (
                                <><div className="icon-name">
                                    {/* <img src="img/icon3.jpg" className={`icon-${message.sender}`} alt="img2" /> */}

                                    <div className={`name-${message.sender}`}>{message.name}</div>
                                </div>
                                    <div key={message.id} className={`message-${message.sender}`}>
                                        <div className="message-content">
                                            {message.text}

                                        </div>
                                    </div><div className="space"> </div></>
                            ))}
                            {/* 画面下部にスクロールするためのダミー要素 */}
                            <div ref={messagesEndRef} />
                        </div>
                    </div>
                </div>
            </div>
            {/* 入力欄と送信ボタン */}
            <footer>
                <div className="input-container">
                    <div className="input-contents">
                        <input
                            type="text"
                            className='chat-input'
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                            required placeholder="チャットを入力"
                        />
                        <button className='chat-submit' onClick={sendMessage}>☞</button>
                    </div>
                    <div className="bottom"></div>
                </div>
            </footer>

        </div>
    )
}

export default ChatPage