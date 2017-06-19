import local from "./styles.css";
const root = "https://aleshaoleg.github.io/holy-grail-markup/";
const active = "css-modules";
const separate = "raw";

// const withStyles = localStyles => component => (...args) => frameStyles => {
//     let styles;
//     if (frameStyles instanceof Object) {
//         styles = Object.keys(localStyles).reduce((styles, key) => {
//             if (frameStyles[key]) {
//                 styles[key] = `${localStyles[key]} ${frameStyles[key]}`;
//             } else {
//                 styles[key] = localStyles[key];
//             }
//             return styles;
//         }, {});
//     } else {
//         styles = localStyles;
//     }
//     return component(styles)(...args);
// };

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