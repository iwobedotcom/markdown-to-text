import React, { useState, ChangeEvent } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  const [md, setMd] = useState<string>("## Good old markdown!");
  return (
    <main>
      <section className="markdown">
        <textarea
          name="markdown"
          id="markdown"
          className="input"
          value={md}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setMd(e.target.value)
          }
        ></textarea>
        <article className="result">
          <ReactMarkdown>{md}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
}

export default App;
