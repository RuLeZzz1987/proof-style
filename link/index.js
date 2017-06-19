const root = "https://aleshaoleg.github.io/holy-grail-markup/";
const active = "css-modules";
const separate = "raw";

export default link => {
    const activeCls = link.id === active ? "linkActive" : "";
    const separateCls = link.id === separate ? "linkSeparate" : "";
    return (
        `
            <a href="${root}${link.id}" class="link ${separateCls} ${activeCls}">
              ${link.name}
            </a>
        `
    );
}