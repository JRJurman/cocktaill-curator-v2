import { registerHtml, TramOneComponent } from "tram-one";
import "./SearchBar.css";

const html = registerHtml();

const app: TramOneComponent = () => {
  return html`
    <section class="SearchBar">
      <input placeholder="Search for Drinks or Ingredients" />
    </section>
  `;
};

export default app;
