import Reveal from 'reveal.js';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/moon.css';
import RevealNotes from 'reveal.js/plugin/notes/notes';
import RevealZoom from 'reveal.js/plugin/zoom/zoom';
import { of, zipAll } from 'rxjs';

// see available themes in the
// node_modules/reveal.js/dist/theme
// beige, black, blood, league, moon, night, serif, simple, ...
// import ComparisonSlider from "comparison-slider";

const deck = new Reveal();
deck.initialize({
  hash: true,
  slideNumber: true,
  plugins: [RevealNotes, RevealZoom, RevealHighlight],
});

const observable1 = of(1, 2, 3);
const observable2 = of(4, 5, 6);

const result = zipAll([observable1, observable2]);

result.subscribe(([x, y]) => console.log(x, y));
