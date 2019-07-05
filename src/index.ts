/**
 * Sets multiple attributes to an Element.
 * @param el The Element to set.
 * @param attributeTuples An array of string tuples representing the attribute name and intended value.
 */
let setAttributeTuples = <T = Element>(el: Element, attributeTuples: [string, string][] ) => {
    attributeTuples.forEach( (tuple) => {
        el.setAttribute(tuple[0], tuple[1]);
    });
    return el as any as T;
};
export default setAttributeTuples;