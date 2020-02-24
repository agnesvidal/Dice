/**
 * Class: Element
 * Handles creating and appending elements.
 * @type {Function}
 */
var Element = (function() {
    /**
     * Creates new element with class-attribute
     * @param type {string}
     * @param classname {string}
     * @returns {HTMLElement}
     */
    this.createElem = function (type, classname) {
        var element = document.createElement(type);
        if (classname !== undefined) {element.setAttribute("class",classname);}
        return element;
    };
    /**
     * Creates new element and appends to parent element
     * @param parent {string}
     * @param type {string}
     * @param classname {string}
     * @returns {HTMLElement}
     */
    this.appendTo = function (parent, type, classname) {
        var element = this.createElem(type, classname);
        parent.appendChild(element);
        return element;
    };
});