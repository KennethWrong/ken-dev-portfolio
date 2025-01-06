import { CustomH1 } from "./BlogComponents";

export default function BlogContactCard() {
  return (
    <div className="flex flex-col bg-purple-50 p-3 rounded-lg items-center">
      <CustomH1>{`Let's Connect 🍵`}</CustomH1>
      <p className={`text-gray-800 leading-relaxed md:text-lg text-xs mt-2`}>
        You made it to the end of my blog! I hope you enjoyed reading it and got
        something out of it. If you are interested in connecting with me, feel
        free to reach out to me on
        <a
          href="https://www.linkedin.com/in/kenneth-wong-hon-nam/"
          className="text-blue-500 hover:cursor-pointer hover:underline"
        >
          {" "}
          LinkedIn{" "}
        </a>
        .{" "}
        {`I'm always up for a chat/or to work on exciting projects
        together!`}
      </p>
    </div>
  );
}
