/**
 * Class: Toolbar
 * Represents a toolbar used in an app
 *
 * @param parentElem
 * @constructor
 */
function Toolbar(parentElem) {
    /**
     * @type {HTMLElement|void} Reference to this element.
     */
    this.element        = Main.elem.appendTo(parentElem, "div", "dice-toolbar-wrapper");
    /**
     * @type {HTMLElement|null} Reference to list
     */
    this.list           = null;

    /**
     * @type {HTMLElement|null} References to buttons
     */
    this.addBtn         = null;
    this.removeBtn      = null;
    this.rollBtn        = null;

    /**
     * Creates ul-element and buttons
     */
    this.init = function() {
        this.list       = Main.elem.appendTo(this.element, "ul");
        this.addBtn     = Main.elem.appendTo(this.list, "li", "add");
        this.removeBtn  = Main.elem.appendTo(this.list, "li", "remove");
        this.rollBtn    = Main.elem.appendTo(this.list, "li", "roll");
    };

    this.init();
}