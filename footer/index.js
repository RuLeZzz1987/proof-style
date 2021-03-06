import Link from "../link";

import s from "./styles.scss";

export default function Footer() {
  return `<div class="${s.footer}">
        ${Link({id: "google", name: "google"})}
      <span class="${s.text}">&copy; 2016 CompanyName, Inc. All Rights Reserved.</span>
      <span class="${s.text}">Site support: <a href="mailto:design@megacorp.kk" class="${s.link}">design@megacorp.kk</a></span>
  </div>`;
}
