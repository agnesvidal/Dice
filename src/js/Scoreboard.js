/**
 * Class: ScoreBoard
 * Represents a scoreboard.
 *
 * @param elemType {string} type of HTMLElement
 * @param classname {string} name of class
 * @constructor
 */
function Scoreboard(elemType, classname) {
    Counter.call(this,elemType, classname);
}
    // -------------------------------------------------------
    // INHERITANCE
    // -------------------------------------------------------
    Scoreboard.prototype = Object.create(Counter.prototype);
    Scoreboard.prototype.constructor = Scoreboard;

    // -------------------------------------------------------
    // PUBLIC PROTOTYPE PROPERTIES
    // -------------------------------------------------------
    /**
     * Sets the current score
     * @param value {number} Sum of points
     */
    Scoreboard.prototype.setScore = function(value) {
        var scoreArr = (""+value).split("").map(Number);
        for(var i = 0; i < this.digits.length; i++) {
            this.digits[i].setValue(0);
        }
        for(var i = this.digits.length - 1, j = scoreArr.length - 1; i >= 0, j >= 0; i--, j--) {
            this.digits[i].setValue(scoreArr[j]);
        }
    };