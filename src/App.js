import { useState, useEffect } from "react";
import "./App.css";
import Routing from "./Routing";
import Live from "./components/Live";
import useLocalStorage from "./hooks/useLocalStorage";
import Explorer from "./components/Explorer";
import Editor from "./components/Editor";

function App() {
  const [isHtml, setIsHtml] = useState(true);
  const [isCss, setIsCss] = useState(false);
  const [isJS, setIsJs] = useState(false);
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

    var urlencoded = new URLSearchParams();
    urlencoded.append("api_dev_key", "86AlRe4QFZ3exb9nw7Xzi_S5c9gCsa2-");
    urlencoded.append("api_paste_code", srcDoc);
    urlencoded.append("api_option", "paste");

    var requestOptions = {
      method: "POST",
      mode: "no-cors",
      body: urlencoded,
      redirect: "follow",
    };

  return (
    <div className="App">
      <Explorer
        setIsCss={setIsCss}
        setIsHtml={setIsHtml}
        setIsJs={setIsJs}
      />
      {isHtml && !isCss && !isJS ? (
        <Editor language="xml" onChange={setHtml} value={html} type="HTML" />
      ) : null}
      {!isHtml && isCss && !isJS ? (
        <Editor language="xml" onChange={setCss} value={css} type="CSS" />
      ) : null}
      {!isHtml && !isCss && isJS ? (
        <Editor language="xml" onChange={setJs} value={js} type="JS" />
      ) : null}
      <Live srcDoc={srcDoc} />
    </div>
  );
}

export default App;
