import React from "react";

function Live({ srcDoc }) {
  return (
    <div className="final">
      <iframe title="final" srcDoc={srcDoc} />
    </div>
  );
}

export default Live;
