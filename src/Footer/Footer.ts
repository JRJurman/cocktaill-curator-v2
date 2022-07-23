import { registerHtml, TramOneComponent } from "tram-one";
import "./Footer.css";

const html = registerHtml();

const app: TramOneComponent = () => {
  return html`
    <section class="Footer">
    </section>
  `;
};

export default app;
