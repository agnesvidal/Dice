/**
 * Class: Clock
 * Represents a clock.
 *
 * @param elemType {string} type of HTMLElement
 * @param classname {string} name of class
 * @constructor
 */
function Clock(elemType, classname) {
    Counter.call(this,elemType, classname);

    // -------------------------------------------------------
    // PRIVATE PROPERTIES
    // -------------------------------------------------------
    /**
     * Current element
     * @type {Clock}
     */
    var m_this = this;

    // -------------------------------------------------------
    // PUBLIC PROPERTIES
    // -------------------------------------------------------
    /**
     * Sets the style of the element
     */
    this.setStyle = function() {
        this.element.className = "clock-content-wrapper";
    };

    /**
     * Sets the current time
     */
    this.setTime = function() {
        var time = new Date();
        var h =  m_this.checkTime(time.getHours());
        var m = m_this.checkTime(time.getMinutes());
        var s = m_this.checkTime(time.getSeconds());
        var timeArr = (""+(h + "" + m + "" + s)).split("").map(Number);

        for(var i = 0; i < timeArr.length; i++) {
            m_this.digits[i].element.className = "clock-digit-" + Main.getClassname(timeArr[i]);
        }

        setInterval(this.setTime, 1000);
    };

    /**
     * Adds a 0 in front of the number if its less than 10.
     * @param time {number}
     * @returns {string}
     */
    this.checkTime = function(time) {
        if (time < 10) {time = "0" + time;}
        return time;
    };
}

    // -------------------------------------------------------
    // INHERITANCE
    // -------------------------------------------------------

    Clock.prototype = Object.create(Counter.prototype);
    Clock.prototype.constructor = Clock;