import { registerHtml, TramOneComponent } from "tram-one";
import "./HomePage.css";

const html = registerHtml();

const app: TramOneComponent = () => {
  return html`
    <section class="HomePage">
    </section>
  `;
};

export default app;
