// Build-time helper to render a feather-icons SVG as a raw string.
// Use with `set:html` in .astro templates, e.g. <Fragment set:html={feather('github', [21, 21])} />
import feather from "feather-icons"

export default (name, measureArray) => {
    return feather.icons[name].toSvg({
        width: measureArray[0],
        height: measureArray[1],
    })
}
