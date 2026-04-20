import TextMarquee from "../TextMarquee";
import AISearchConversation from "./AISearchConversation";

const marqueeItems = [
  { text: "Hello", colour: "text-green-500" },
  { text: "哈囉", colour: "text-yellow-500" },
  { text: "¡Hola!", colour: "text-orange-500" },
  { text: "Bonjour", colour: "text-blue-500" },
  { text: "你好", colour: "text-red-500" },
];

export default function AISearchCard() {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-center my-4 bg-purple-50 py-6 px-3 rounded-lg">
      <div className="flex flex-col lg:w-1/2 w-full mb-6 lg:mb-0">
        <TextMarquee items={marqueeItems} border={false} />
        <div className="w-full text-gray-600 text-sm lg:text-lg text-center lg:text-left px-4">
          <p>
            Oh hey! You made it to my blog. Welcome Welcome! This is where I
            document all my learnings and write about then in order to help me
            retain that knowledge (and to share with the world ofc).
          </p>
          <p className="mt-2">
            My main focus is in backend development, learning how to build
            distributed, scalable systems to support large-scale applications.
          </p>
          <p className="mt-2">
            Recently, I have been learning MLE (Machine Learning Engineering)
            and have been playing around with LangChain, which is why you see
            that there is an AI version of me to answer any questions regarding
            my blogs.
          </p>
        </div>
      </div>
      <AISearchConversation />
    </div>
  );
}
