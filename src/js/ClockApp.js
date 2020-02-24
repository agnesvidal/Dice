/**
 * Class ClockApp
 * Represents a clock application.
 * @constructor
 */
function ClockApp() {
}
    // -------------------------------------------------------
    // INHERITANCE
    // -------------------------------------------------------
    ClockApp.prototype = Object.create(App.prototype);
    ClockApp.prototype.constructor = ClockApp;

    // -------------------------------------------------------
    // PUBLIC PROTOTYPE METHOD(S)
    // -------------------------------------------------------

    /**
     * Initializes the UI for the clock application.
     */
    ClockApp.prototype.initUI = function () {
        var m_this = this;
        m_this = new Clock("div", "dice-toolbar-counter-wrapper");
        m_this.setStyle();
        var timeFormat = ["hour","minute","second"];
        for (var i = 0; i < timeFormat.length; i++){
            m_this.setList("clock-digit-wrapper " + [i]);
            m_this.initDigit(2);
        }
        this.wrapper.appendChild(m_this.element);
        m_this.setTime();
    };