"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";

function ChatBox({
  imageURL,
  text,
  loading = false,
}: {
  imageURL: string;
  text: string;
  loading?: boolean;
}) {
  return (
    <div className="flex gap-4 text-sm lg:text-lg">
      <Image
        height={4284}
        width={5712}
        className="object-cover w-8 h-8 md:w-12 md:h-12 rounded-lg flex-shrink-0"
        src={imageURL}
        alt="chat icon URL"
      />
      {loading ? (
        <p className="flex-1">
          <span className="animate-pulse">...</span>
        </p>
      ) : (
        <p className="flex-1">{text}</p>
      )}
    </div>
  );
}

export default function AISearchConversation() {
  const [question, setQuestion] = useState("");
  const [questionDisplay, setQuestionDisplay] = useState("");
  const [response, setResponse] = useState(
    "Welcome to my blog! Feel free to ask me anything!"
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isStreamLoading, setIsStreamLoading] = useState(false);

  const handleSubmit = () => {
    submitAIQuery();
  };

  const submitAIQuery = async () => {
    setIsLoading(true);
    setResponse("");

    setQuestionDisplay(question);
    setIsStreamLoading(true);

    try {
      const response = await fetch("http://52.15.46.81:8000/blog-search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: question }),
      });
      setQuestion("");

      if (!response.ok) {
        throw new Error("Failed to submit question");
      }

      // Handle streaming response
      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) {
        throw new Error("Failed to create reader");
      }

      setIsStreamLoading(false);
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        console.log(chunk, response);
        setResponse((prev) => prev + chunk);
      }
    } catch (error) {
      console.error("Error submitting question:", error);
    } finally {
      setIsLoading(false);
      setIsStreamLoading(false);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <div
        id="response-container"
        className="w-full p-4 border rounded-lg h-[300px] resize-none bg-gray-50 text-greenDark overflow-y-auto mb-3"
      >
        {questionDisplay && (
          <div>
            <ChatBox
              imageURL="/images/blog/user_icon.webp"
              text={questionDisplay}
            />
            <div className="mb-5"></div>
          </div>
        )}
        {
          <ChatBox
            imageURL="/images/face.png"
            text={response}
            loading={isStreamLoading}
          />
        }
      </div>
      <div
        id="question-container"
        className="flex flex-col gap-2 text-sm lg:text-lg"
      >
        <textarea
          value={question}
          onChange={(e) => {
            if (e.target.value.length <= 100) {
              setQuestion(e.target.value);
            }
          }}
          placeholder="Ask a question..."
          className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[30px] resize-none overflow-y-auto relative"
          disabled={isLoading}
          maxLength={100}
          style={{ paddingBottom: "2rem" }}
        />
        <div className="relative">
          <span className="absolute -top-8 right-4 text-sm text-gray-500">
            {question.length}/100
          </span>
        </div>
        <Button
          type="submit"
          onClick={() => handleSubmit()}
          disabled={isLoading || !question.trim()}
          className={`px-6 py-2 rounded-lg text-white font-medium text-sm lg:text-lg
            ${
              isLoading || !question.trim()
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-black hover:bg-blue-800"
            }`}
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Submitting...
            </div>
          ) : (
            "Submit Question"
          )}
        </Button>
      </div>
    </div>
  );
}
