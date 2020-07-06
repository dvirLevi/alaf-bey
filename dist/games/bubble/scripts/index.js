import PlayerBubble from "../scripts/classes/playerBubble.js"
import randLetter from "../scripts/helpers/randLetter.js"

// https://zimjs.com - JavaScript Canvas Framework - Code Creativity!
const frame = new Frame("full", 1024, 768, '#fff', dark);
frame.on("ready", () => {
    const stage = frame.stage;
    let stageW = frame.width;
    let stageH = frame.height;
    const waiter = new Waiter(stage);
    waiter.show(); // show the waiter until assets load
    var load = frame.loadAssets(["fing.png", "boom.mp3", "success.mp3", "1.mp3", "2.mp3", "3.mp3", "4.mp3", "5.mp3", "6.mp3", "7.mp3", "8.mp3", "9.mp3", "10.mp3", "11.mp3", "12.mp3", "13.mp3", "14.mp3", "15.mp3", "16.mp3", "17.mp3", "18.mp3", "19.mp3", "20.mp3", "21.mp3", "22.mp3", "23.mp3", "24.mp3", "25.mp3", "26.mp3", "27.mp3", "28.mp3", "29.mp3", "30.mp3", "31.mp3", "32.mp3", "33.mp3", "34.mp3", ], 'assets/');
    load.on("complete", () => {
        waiter.hide();
        const physics = new Physics(-5);
        let score = {
            score: 0
        };

        const createScoreTab = {
            life: [new Circle(15, '#f7943e'), new Circle(15, '#f7943e'), new Circle(15, '#f7943e'), new Circle(15, '#f7943e')],
            wrapTab: new Rectangle({
                width: 200,
                height: 100,
                color: "#fff0",
                corner: 20
            }).pos(-50, 10, RIGHT, TOP),
            score: new Label({
                text: score.score,
                size: 40,
                font: "Varela Round",
                color: "#4a6bae",
                bold: true,
            }),
            tile: new Tile(new Circle(15, '#f7943e'), 4, 1, 10, 10),
            create() {
                this.wrapTab.addChild(this.score.center(this.wrapTab));
            },
            addLife() {
                this.wrapTab.addChild(this.tile.center(this.wrapTab).pos(-100));
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

        const mainInterval = interval(1, () => {
            const typePlayer = [1, 0]
            let playerBubble;
            if (typePlayer[rand(0, 1)]) {
                playerBubble = new PlayerBubble("good", randLetter(), score, "red");
            } else {
                playerBubble = new PlayerBubble("bad", randLetter().letter, score, "black", createScoreTab.life);
            }
            playerBubble.addPlayer(rand(0, stageW), stageH);
            playerBubble.testHit(stage, createLineTop.topLineCleanrBubble, stageW);
            playerBubble.testHit(stage, createFing.pin, stageW);
        })

        Ticker.add(() => {
            createScoreTab.score.text = score.score;
            createScoreTab.addLife();
            if (!createScoreTab.life.length) {
                mainInterval.pause()
            }
        })


        stage.update();
    })


});