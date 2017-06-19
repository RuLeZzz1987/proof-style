import Link from "../link";
import s from "./styles.css";

const items = [
  { id: "oocss", name: "OOCSS" },
  { id: "smacss", name: "SMACSS" },
  { id: "atomic", name: "Atomic" },
  { id: "organic", name: "Organic" },
  { id: "bem-css", name: "BEM CSS" },
  { id: "bem-flexboxgrid", name: "BEM Flexbox Grid" },
  { id: "bem-platform/pages/index", name: "BEM Platform" },
  { id: "css-modules", name: "CSS-modules" },
  { id: "raw", name: "Raw" }
];



export default function Nav() {
  return `<div class="${s.nav}">
      <ul class="${s.list}">
          ${items.map(item => `<li class="global-link">${Link(item)}</li>`).join("\n")}
      </ul>
  </div>`;
}
