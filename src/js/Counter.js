/**
 * Class: Counter
 * Represents a counter.
 * @param elemType {string} Type of element to be created.
 * @constructor
 */
function Counter(elemType) {
// -------------------------------------------------------
// PUBLIC PROPERTIES
// -------------------------------------------------------
    /**
     * @type {HTMLElement} Reference to the counter element
     */
    this.element = document.createElement(elemType);

    /**
     * @type {Array} Holds all digits
     */
    this.digits = [];

    /**
     * @type {HTMLLIElement} Reference to the inner list element.
     */
    this.counterlist = null;
}

// -------------------------------------------------------
// PUBLIC PROTOTYPE METHODS
// -------------------------------------------------------

/**
 * Initializes counter element
 * @param classname {string}
 */
Counter.prototype.setList = function(classname) {
    this.counterlist = document.createElement("ul");
    this.counterlist.setAttribute("class", classname);
    this.element.appendChild(this.counterlist);
};

/**
 * Initializes digits
 * @param numDigits {number} Number of digits.
 */
Counter.prototype.initDigit = function(numDigits) {
    for (var i = 0; i < numDigits; i++) {
        var d = new Digit();
        d.setValue(0);
        this.digits.push(d);
        this.counterlist.appendChild(d.element);
    }
};