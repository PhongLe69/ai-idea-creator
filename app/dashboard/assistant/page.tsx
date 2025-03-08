import React from "react";

const page = () => {
  return (
    <iframe
      src={`https://phongle69.github.io/ai-idea-creator?key=${process.env.NEXT_PUBLIC_GEMINI_API_KEY}`}
      width="100%"
      height="100%"
    ></iframe>
  );
};

export default page;
