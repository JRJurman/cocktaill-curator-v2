import { registerHtml, TramOneComponent } from "tram-one";
import "./SearchBar.css";

const html = registerHtml();

const app: TramOneComponent = () => {
  return html`
    <section class="SearchBar">
    </section>
  `;
};

export default app;
