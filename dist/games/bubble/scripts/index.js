import PlayerBubble from "../scripts/classes/playerBubble.js"
import PopupGame from "../scripts/classes/PopupGame.js"
import randLetter from "../scripts/helpers/randLetter.js"

// https://zimjs.com - JavaScript Canvas Framework - Code Creativity!
let sizeWindow = (mobile()) ? "full" : "fit"
const frame = new Frame(sizeWindow, 1024, 768, '#fff', dark);
frame.on("ready", () => {
    const stage = frame.stage;
    let stageW = frame.width;
    let stageH = frame.height;
    const waiter = new Waiter(stage);
    waiter.show(); // show the waiter until assets load
    var load = frame.loadAssets(["fing.png", "heart.png","heart2.png","heart3.png","heart4.png", "boom.mp3", "success.mp3", "1.mp3", "2.mp3", "3.mp3", "4.mp3", "5.mp3", "6.mp3", "7.mp3", "8.mp3", "9.mp3", "10.mp3", "11.mp3", "12.mp3", "13.mp3", "14.mp3", "15.mp3", "16.mp3", "17.mp3", "18.mp3", "19.mp3", "20.mp3", "21.mp3", "22.mp3", "23.mp3", "24.mp3", "25.mp3", "26.mp3", "27.mp3", "28.mp3", "29.mp3", "30.mp3", "31.mp3", "32.mp3", "33.mp3", "34.mp3", ], 'assets/');
    load.on("complete", () => {
        waiter.hide();
        const fontType = 'Varela Round'
        const physics = new Physics(-5);
        let score = {
            score: 0
        };

        // frame.asset("heart.png").center();
        // frame.asset("heart2.png").center();

        const createScoreTab = {
            life:  [frame.asset("heart.png").sca(.1), frame.asset("heart2.png").sca(.1), frame.asset("heart3.png").sca(.1), frame.asset("heart4.png").sca(.1)],
            wrapTab: new Rectangle({
                width: 200,
                height: 100,
                color: "#fff0",
                corner: 20
            }).pos(-50, 10, RIGHT, TOP),
            score: new Label({
                text: score.score,
                size: 40,
                font: fontType,
                color: "#4a6bae",
                bold: true,
            }),
            tile: new Tile(new Circle(15, '#f7943e'), 4, 1, 10, 10),
            create() {
                this.wrapTab.addChild(this.score.center(this.wrapTab));
            },
            addLife() {
                this.wrapTab.addChild(this.tile.center(this.wrapTab).pos(-100));
                // this.tile.align = "right";
                this.tile.rows = 1;
                this.tile.cols = 4;
                this.tile.items = this.life;
                this.tile.remake()
            },
        }
        createScoreTab.create()


        const createLineTop = {
            topLineCleanrBubble: new Line(stageW, 0, '#fff').pos(0, 10),
        }

        const createFing = {
            wrapFin: new Rectangle({
                width: 30,
                height: 180,
                color: "#fff0"
            }).pos(stageW / 2 - 15, 40).addPhysics({
                density: 0
            }).cur('grab'),
            pin: new Rectangle({
                width: 30,
                height: 30,
                color: "#fff0"
            }),
            cetch: frame.asset("fing.png").sca(.8).rot(-90),
            create() {
                this.wrapFin.addChild(this.cetch).center()
                this.wrapFin.addChild(this.pin).pos(0, 150);
                this.wrapFin.physics.drag();
            }
        }
        createFing.create()

        
        // let mainInterval;
        // const startGame = ()=> {
             
        // }

        let initalGame = true;

        const startAndPauseGame = {
            mainInterval: null,
            ifActiv: false,
            startGame() {
                if(!this.ifActiv) {
                    createScoreTab.life = [frame.asset("heart.png").sca(.1), frame.asset("heart2.png").sca(.1), frame.asset("heart3.png").sca(.1), frame.asset("heart4.png").sca(.1)];
                    this.mainInterval = interval(1, () => {
                        const typePlayer = [1, 0]
                        let playerBubble;
                        if (typePlayer[rand(0, 1)]) {
                            playerBubble = new PlayerBubble("good", randLetter(), score, "red");
                        } else {
                            playerBubble = new PlayerBubble("bad", randLetter().letter, score, "black", createScoreTab.life);
                        }
                        playerBubble.addPlayer(rand(0, stageW), stageH);
                        playerBubble.testHit(stage, createLineTop.topLineCleanrBubble, stageW);
                        playerBubble.testHit(stage, createFing.pin, stageW, createFing.cetch);
                    })
                    this.ifActiv = true
                }
                initalGame = true;
            },
            pauseGame() {
                this.mainInterval.pause();
                this.ifActiv = false
            }
        }

        const createOpenGame = new PopupGame("גררו את המחווט, תפסו את כל הבלונים עם האותיות והתחמקו מהמוקשים", "התחל", fontType);
        createOpenGame.create(stage, startAndPauseGame, score);


        Ticker.add(() => {
            createScoreTab.score.text = score.score;
            if (!createScoreTab.life.length && initalGame) {
                startAndPauseGame.pauseGame();
                const endGame = new PopupGame(`הניקוד שלך הוא ${score.score}.`, "שחק שוב", fontType);
                endGame.create(stage, startAndPauseGame, score);
                initalGame = false
            } else {
                createScoreTab.addLife();
            }
        })


        stage.update();
    })


});