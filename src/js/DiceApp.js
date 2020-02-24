/**
 * Class: DiceApp
 * (Inherits from App)
 * @constructor
 */
function DiceApp() {
    // -------------------------------------------------------
    // PRIVATE PROPERTIES
    // -------------------------------------------------------
    /**
     * @type {DiceApp} Reference to this object
     */
    var m_this = this;

    /**
     * @type {Scoreboard} Reference to object for ScoreBoard
     */
    var m_scoreboard = null;

    /**
     * @type {Toolbar} Reference to this Toolbar
     */
    var m_toolbar = null;

    /**
     * @type {HTMLElement}
     */
    var contentWrapper = null;

    /**
     * @type {Array}
     */
    var diceArr = [];

    /**
     * @type {number}
     */
    var DICE_AREA = 1122;

    /**
     * @type {number}
     */
    var contentArea = 0;

    /**
     * @type {HTMLElement}
     */
    var audio = null;

    // -------------------------------------------------------
    // PUBLIC METHODS
    // -------------------------------------------------------
    /**
     * Initializes dice app UI
     */
    this.initUI = function () {
        initToolbar();
        initScoreboard();
        initAudio();
        contentWrapper = Main.elem.appendTo(m_this.wrapper,"div","dice-content-wrapper");
        contentArea = contentWrapper.offsetWidth * contentWrapper.offsetHeight;
    };

    // -------------------------------------------------------
    // PRIVATE METHODS
    // -------------------------------------------------------
    /**
     * Initializes and creates toolbar
     */
    var initToolbar = function() {
        m_toolbar = new Toolbar(m_this.wrapper);
        m_toolbar.addBtn.addEventListener("click", addDice);
    };

    /**
     * Initializes and creates scoreboard
     */
    var initScoreboard = function() {
        m_scoreboard = new Scoreboard("li");
        m_scoreboard.setList("dice-toolbar-counter-wrapper");
        m_scoreboard.initDigit(5);
        m_toolbar.list.appendChild(m_scoreboard.element);
    };

    /**
     * Initializes and creates audio
     */
    var initAudio = function() {
        audio = document.createElement("audio");
        audio.src = "src/wav/add.wav";
        audio.autoplay = 0;
    };

    /**
     * Manages event handlers for removeBtn and rollBtn, e.g. removes event handler when there are no dices.
     * @param status {boolean}
     */
    var eventHandler = function (status) {
        if (status === true) {
            m_toolbar.removeBtn.addEventListener("click", removeDice);
            m_toolbar.rollBtn.addEventListener("click", rollDices);
        } else {
            m_toolbar.removeBtn.removeEventListener("click", removeDice);
            m_toolbar.rollBtn.removeEventListener("click", rollDices);
        }
    };

    /**
     * Adds a dice
     */
    var addDice = function () {
        if (contentArea > DICE_AREA) {
            var dice = new Dice();
            dice.roll();
            contentWrapper.appendChild(dice.element);
            dice.element.addEventListener("click", function(){dice.roll(); sumScore(); });
            diceArr.push(dice);

            audio.play();
            contentArea = contentArea - DICE_AREA;
            if (diceArr.length === 1) {eventHandler(true);}
            sumScore();
        }
    };

    /**
     * Removes the last dice
     */
    var removeDice = function () {
        var lastDice = diceArr[diceArr.length - 1];
        diceArr.pop();
        lastDice.element.parentNode.removeChild(lastDice.element);

        audio.play();
        contentArea = contentArea + DICE_AREA;
        if (diceArr.length < 1) {eventHandler(false);}
        sumScore();
    };

    /**
     * Rolls all dices
     */
    var rollDices = function () {
        for(var i = 0; i < diceArr.length; i++) {
            diceArr[i].roll();
        }
        audio.play();
        if (diceArr.length < 1) {eventHandler(false);}
        sumScore();
    };

    /**
     * Summarizes the score
     */
    var sumScore = function () {
        var sum = 0;
        for (var i = 0; i < diceArr.length; i++) {
            sum += diceArr[i].value;
        }
        m_scoreboard.setScore(sum);
    };
}

    // -------------------------------------------------------
    // INHERITANCE
    // -------------------------------------------------------
    DiceApp.prototype = Object.create(App.prototype);
    DiceApp.prototype.constructor = DiceApp;