import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";
import { useState } from "react";

const Editor = ({ onChange, value, language, type }) => {
  function handleChange(editor, data, value) {
    onChange(value);
  }
  return (
    <div className="editor-container">
      <div className="editor-title">
                {type}
                </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          theme: "material",
          lineNumbers: true,
          mode: language
        }}
      />
    </div>
  );
};

export default Editor;
