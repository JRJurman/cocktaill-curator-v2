import { registerHtml, TramOneComponent } from "tram-one";
import logo from "@tram-one/tram-logo/dist/element";
import Chrome from "./Chrome";
import "./app.css";

const html = registerHtml({
  Chrome,
});

const app: TramOneComponent = () => {
  return html`
    <main class="app">
      <Chrome>
        ${logo}
        <p>Update '<code>src/app.js</code>' to see changes!</p>
        <a href="https://tram-one.io" target="_blank"> Learn Tram-One </a>
      </Chrome>
    </main>
  `;
};

export default app;
