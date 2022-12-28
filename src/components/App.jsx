import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io.connect('http://localhost:8080');

function App() {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    function handleTextChange(e) {
        setMessage(e.target.value);
        // console.log(message);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!message || message === "") return;
        console.log("Submitted!");

        socket.on("incoming message", (message) => {
            console.log(message);
            setMessages([...messages, message]);
        });

        socket.emit("chat message", message);
    }

    // useEffect(() => {
    //     socket.on("incoming message", (message) => {
    //         console.log(message);
    //         setMessages([...messages, message]);
    //     });
    // }, [socket, messages]);

    return (
        <div className="App">
            <div className="App-messages">
                {messages.map((message, index) => (
                    <div className="App-message" key={index}>
                        {message}
                    </div>
                ))}
            </div>
            <form className="App-control col-3 card p-3 m-auto mt-5" onSubmit={handleSubmit}>
                <input
                    className="form-control"
                    type="text"
                    placeholder="Message..."
                    onChange={handleTextChange}
                />
                <input className="App-button btn btn-danger col-12" type="submit" value="Send" />
            </form>
        </div>
    );
}

export default App;

