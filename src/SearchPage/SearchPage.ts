import { registerHtml, TramOneComponent } from "tram-one";
import "./SearchPage.css";

const html = registerHtml();

const app: TramOneComponent = () => {
  return html`
    <section class="SearchPage">
    </section>
  `;
};

export default app;
