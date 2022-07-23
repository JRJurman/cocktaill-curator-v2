import { registerHtml, TramOneComponent } from "tram-one";
import SearchBar from "../SearchBar";
import "./Chrome.css";

const html = registerHtml({
  SearchBar,
});

const app: TramOneComponent = (props, children) => {
  return html`
    <section class="Chrome">
      <section class="title">
        <h1>Cocktail Curator</h1>
      </section>
      <section class="shuffle">
        <button>Wing it!</button>
      </section>
      <section class="search">
        <SearchBar />
      </section>
      <section class="content">
        ${children}
      </section>
    </header>
  `;
};

export default app;
