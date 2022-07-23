import { registerHtml, TramOneComponent } from "tram-one";
import "./Carousel.css";

const html = registerHtml();

const app: TramOneComponent = () => {
  return html`
    <section class="SearchResultsPage">
    </section>
  `;
};

export default app;
