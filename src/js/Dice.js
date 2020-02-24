/**
 * Class: Dice
 * Represents a dice.
 * @constructor
 */
function Dice() {
    // -------------------------------------------------------
    // PUBLIC PROPERTIES
    // -------------------------------------------------------
    /**
     * @type {HTMLLIElement} Reference to the dice element.
     */
    this.element = document.createElement("li");

    /**
     * @type {number} Value of the dice
     */
    this.value = 0;
}
    // -------------------------------------------------------
    // PUBLIC PROTOTYPE METHODS
    // -------------------------------------------------------
    /**
     * Rolls the dice; assigning it a random value between 1-6.
     */
    Dice.prototype.roll = function() {
        this.value = Math.floor(Math.random() * (6 - 1)) + 1;
        this.element.setAttribute("class", "dice dice-side-" + Main.getClassname(this.value));
    };