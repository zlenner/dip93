import { generate } from "./index";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div>
      {generate(4)}
    </div>
  </React.StrictMode>
);
