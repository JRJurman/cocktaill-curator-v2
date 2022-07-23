import { registerHtml, TramOneComponent } from "tram-one";
import "./CocktailPage.css";

const html = registerHtml();

const app: TramOneComponent = () => {
  return html`
    <section class="CocktailPage">
    </section>
  `;
};

export default app;
