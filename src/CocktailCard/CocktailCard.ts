import { registerHtml, TramOneComponent } from "tram-one";
import "./CocktailCard.css";

const html = registerHtml();

const app: TramOneComponent = () => {
  return html`
    <section class="CocktailCard">
    </section>
  `;
};

export default app;
