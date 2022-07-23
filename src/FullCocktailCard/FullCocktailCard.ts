import { registerHtml, TramOneComponent } from "tram-one";
import "./FullCocktailCard.css";

const html = registerHtml();

const app: TramOneComponent = () => {
  return html`
    <section class="FullCocktailCard">
    </section>
  `;
};

export default app;
