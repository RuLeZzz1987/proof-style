import local from "./styles.css";
const root = "https://aleshaoleg.github.io/holy-grail-markup/";
const active = "css-modules";
const separate = "raw";

export default link => {
    const activeCls = link.id === active ? local.linkActive : "";
    const separateCls = link.id === separate ? local.linkSeparate : "";
    return (
        `
            <a href="${root}${link.id}" class="${local.link} ${separateCls} ${activeCls}">
              ${link.name}
            </a>
        `
    );
}