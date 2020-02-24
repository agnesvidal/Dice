/**
 * Class: App
 * Creates new app(window)
 * @constructor
 */
function App() {
}

// -------------------------------------------------------
// PUBLIC PROTOTYPE METHODS
// -------------------------------------------------------
/**
 * Creates a new window.
 * @param type {String} representing the type of application.
 */
App.prototype.newWindow = function(type) {
    var m_this = this;
    this.wrapper = Main.elem.appendTo(Main.pageWrapper, "div", (type + "-window-wrapper"));
    var menubarElem = Main.elem.appendTo(this.wrapper, "div", (type + "-menubar-wrapper"));
    var closeAppBtn = Main.elem.appendTo(menubarElem, "div", "close");
    closeAppBtn.addEventListener("click", function(){m_this.closeWindow(m_this.wrapper, m_this.menubarELem)});

    this.wrapper.addEventListener("click", function(){m_this.toFront(m_this.wrapper)});
    Main.drag.add(this.wrapper, menubarElem);
};

/**
 * Brings window to front.
 */
App.prototype.toFront = function() {
    /***************************************************************************************
     *    Author: Henrik Andersen, Date: Jan 18, 2019
     ***************************************************************************************/
    this.wrapper.style.zIndex = Math.floor(new Date().getTime()/1000);
};

/**
 * Closes the app window.
 */
App.prototype.closeWindow = function() {
    this.wrapper.parentNode.removeChild(this.wrapper);
    Main.removeApp(this);
};
