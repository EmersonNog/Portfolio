import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism"; // Tema para o código
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import "./Chat.css";

const ChatComponent = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [hasGreeted, setHasGreeted] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const messageContainerRef = useRef(null);

  async function generateAnswer() {
    if (!question.trim()) {
      return;
    }

    setIsLoading(true);
    setAnswer("");

    const zyraIntro = hasGreeted
      ? "Você é Zyra, uma assistente virtual. Responda diretamente sem iniciar com saudações."
      : "Você é Zyra, uma assistente virtual. Seu criador é o Nogueira. Responda as perguntas com empatia, profissionalismo e um tamanho de resposta médio.";

    setHasGreeted(true);

    const conversationContext =
      chatHistory
        .map((entry) => `User: ${entry.question}\nZyra: ${entry.answer}`)
        .join("\n") + `\nUser: ${question}`;

    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`,
        method: "post",
        data: {
          contents: [
            {
              parts: [{ text: `${zyraIntro} ${conversationContext}` }],
            },
          ],
        },
      });

      const newAnswer = response.data.candidates[0].content.parts[0].text;

      setChatHistory((prev) => [
        ...prev,
        { question, answer: newAnswer.replace(/Zyra:/g, "").trim() },
      ]);
      setAnswer(newAnswer);
      setQuestion("");
    } catch (error) {
      console.error("Erro ao gerar resposta:", error);
      setAnswer("Desculpe, algo deu errado. Tente novamente mais tarde.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTo({
        top: messageContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [chatHistory]);

  return (
    <div className="chat-container">
      <h1 className="chat-title">Chat AI - Zyra</h1>
      <div className="chat-box" ref={messageContainerRef}>
        <div className="message-container">
          {chatHistory.length === 0 && !isLoading ? (
            <div className="empty-chat">
              <FontAwesomeIcon icon={faComments} size="3x" />
              <h3>Say Hi =)</h3>
            </div>
          ) : (
            chatHistory.map((entry, index) => (
              <div key={index}>
                <div className="user-message">
                  <strong>User: </strong>
                  {entry.question}
                </div>
                <div className="zyra-message">
                  <strong>Zyra: </strong>
                  <div className="markdown-content">
                    <ReactMarkdown
                      components={{
                        code({ node, inline, className, children, ...props }) {
                          const match = /language-(\w+)/.exec(className || "");
                          return !inline && match ? (
                            <SyntaxHighlighter
                              style={dracula}
                              language={match[1]}
                              PreTag="div"
                              {...props}
                            >
                              {String(children).replace(/\n$/, "")}
                            </SyntaxHighlighter>
                          ) : (
                            <code className={className} {...props}>
                              {children}
                            </code>
                          );
                        },
                      }}
                    >
                      {entry.answer}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
            ))
          )}
          {isLoading && <div className="loading-message">Typing...</div>}
        </div>
      </div>
      <textarea
        className="chat-input"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Enter your question..."
        rows={3}
      ></textarea>
      <button
        className={`chat-button ${!question.trim() ? "disabled" : ""}`}
        onClick={generateAnswer}
        disabled={!question.trim()}
      >
        Send
      </button>
    </div>
  );
};

export default ChatComponent;
