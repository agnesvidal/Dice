/**
 * Class: Digit
 * Represents a digit.
 * @constructor
 */
function Digit() {
    // -------------------------------------------------------
    // PUBLIC PROPERTIES
    // -------------------------------------------------------
    /**
     * @type {HTMLLIElement} Reference to the digit element.
     */
    this.element = document.createElement("li");

    /**
     * @type {number} value of the digit
     */
    this.value = 0;
}

    // -------------------------------------------------------
    // PUBLIC PROTOTYPE METHODS
    // -------------------------------------------------------
    /**
     * Sets the value of the digit.
     * @param value
     */
    Digit.prototype.setValue = function(value) {
        this.value = value;
        this.setStyle(value);
    };

    /**
     * Sets the style of the digit.
     * @param value
     */
    Digit.prototype.setStyle = function(value) {
        this.element.setAttribute("class", Main.getClassname(value))
    };


