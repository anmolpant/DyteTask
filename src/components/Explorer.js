import React from "react";

function Explorer({ setIsHtml, setIsCss, setIsJs, upload }) {
  return (
    <div className="file-explorer">
      <div className = "explorer-title">File Explorer</div>
      <div className = "contents">
      <div className = "html-file"
        onClick={() => {
          setIsHtml(true);
          setIsCss(false);
          setIsJs(false);
        }}
      >
        index.html
      </div>
      <div className = "css-file"
        onClick={() => {
          setIsCss(true);
          setIsHtml(false);
          setIsJs(false);
        }}
      >
        style.css
      </div>
      <div className = "js-file"
        onClick={() => {
          setIsJs(true);
          setIsHtml(false);
          setIsCss(false);
        }}
      >
        app.js
      </div>
    </div>
    </div>
  );
}

export default Explorer;
