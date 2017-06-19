import s from "./styles.scss";
import Nav from "../nav";
import Content from "../content";
import News from "../news";

export default function Main() {
  return `<div class="${s.main}">
      ${Nav()}
      ${Content()}
      ${News()}
  </div>`;
}
