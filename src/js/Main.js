// -------------------------------------------------------
// PUBLIC CLASS
// -------------------------------------------------------
/**
 * Class: Main
 * Manages the webb application's basic functionality.
 */
var Main = {
    // -------------------------------------------------------
    // PUBLIC PROPERTIES
    // -------------------------------------------------------
    /**
     * @type {HTMLElement | null} Reference to DOMElement containing the page-wrapper
     */
    pageWrapper : null,

    /**
     * @type {HTMLElement | null} Reference to button that creates/opens up new dice app.
     */
    diceBtn : null,

    /**
     * @type {HTMLElement | null} Reference to button that creates/opens up new clock app.
     */
    clockBtn : null,

    /**
     * @type {Array} containing all created/opened apps.
     */
    allApps : [],

    /**
     * @type {DragnDrop} Reference to class handling draggable objects.
     */
    drag : null,

    // -------------------------------------------------------
    // PUBLIC METHODS
    // -------------------------------------------------------

    /**
     * Initializes UI
     */
    init : function() {
        Main.pageWrapper = document.getElementById("page-content-wrapper");
        Main.diceBtn     = document.getElementById("icon-dice");
        Main.clockBtn    = document.getElementById("icon-clock");
        Main.diceBtn.addEventListener("click", function() {Main.startApp(event,"dice")});
        Main.clockBtn.addEventListener("click", function() {Main.startApp(event,"clock")});
        Main.elem = new Element();

        /***************************************************************************************
         *    Author: Henrik Andersen, Date: Jan 18, 2019
         ***************************************************************************************/
        Main.drag = new DragnDrop();
    },

    /**
     * Creates new instance of app (DiceApp || ClockApp)
     * @param event Event object
     */
    startApp : function(event,type) {
        var newApp = null;
        (type === "dice") ? newApp = new DiceApp() : newApp = new ClockApp();
        newApp.newWindow(type);
        newApp.initUI();
        Main.allApps.push(newApp);
    },

    /**
     * Removes app after closing its window.
     * @param app
     */
    removeApp : function(app) {
        Main.allApps.splice(app, 1);
        Main.drag.m_elements.splice(app, 1);
    },

    /**
     * Converts a number into characters.
     * @param value
     * @returns {string}
     */
    getClassname : function(value) {
    var classname = "";
    switch(value) {
        case 0: classname = "zero"; break;
        case 1: classname = "one"; break;
        case 2: classname = "two"; break;
        case 3: classname = "three"; break;
        case 4: classname = "four"; break;
        case 5: classname = "five"; break;
        case 6: classname = "six"; break;
        case 7: classname = "seven"; break;
        case 8: classname = "eight"; break;
        case 9: classname = "nine"; break;
    }
    return classname;
    }
};

window.addEventListener("load", Main.init);