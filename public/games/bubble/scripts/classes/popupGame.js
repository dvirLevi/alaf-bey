class PopupGame {
    constructor(text, fontType, startGameFun) {
        this.wrap= new Rectangle({
            width() {
                return (mobile()) ? 300 : 600
            },
            height: 300,
            color: "#d6d6d0",
            corner: 20
        });
        this.text= new Label({
            text: text,
            size() {
                return (mobile()) ? 25 : 30
            },
            font: fontType,
            color: "#4a6bae",
            bold: true,
            lineWidth: 300,
            align: 'center'
        });
        this.button= new Button({
            label: new Label({
                text: "התחלה",
                size: 25,
                font: fontType,
                color: "white",
                bold: true,
            }),
            width: 120,
            height: 70,
            backgroundColor: "#6da453",
            rollBackgroundColor: "#679352",
            corner: 8
        });
        // this.startGame = startGameFun()
    }
    create(stage, startGame, score) {
        // this.text.x = 100;
        // this.text.y = 100;
        this.wrap.center()
        this.text.pos(0, -30, CENTER, CENTER)
        this.button.pos(0, 100, CENTER, CENTER)
        this.button.on("click",  ()=>{
            score.score = 0;
            startGame.startGame();
            this.wrap.removeFrom(stage)
            this.text.removeFrom(stage)
            this.button.removeFrom(stage)
        });
    }
 
}

export default PopupGame