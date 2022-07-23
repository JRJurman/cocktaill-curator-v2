import { registerHtml, TramOneComponent } from "tram-one";
import "./Header.css";

const html = registerHtml();

const app: TramOneComponent = () => {
  return html`
    <section class="Header">
    </section>
  `;
};

export default app;
