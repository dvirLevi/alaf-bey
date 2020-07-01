import PlayerBubble from "../scripts/classes/playerBubble.js"

// https://zimjs.com - JavaScript Canvas Framework - Code Creativity!
const frame = new Frame("full", 1024, 768, '#fff', dark);
frame.on("ready", () => {
    const stage = frame.stage;
    let stageW = frame.width;
    let stageH = frame.height;
    var load = frame.loadAssets(["fing.png"], 'assets/');
    load.on("complete", () => {
        const physics = new Physics(-5);
        let score = {
            score: 0
        };

        var scoreLabel = new Label({
            text:":ניקוד",
            size:60,
            font:"Varela Round",
            color:"red",
            rollColor:"red",
            bold:true,
         });
         scoreLabel.pos(stageW - 200, 10);

        const createLineTop = {
            topLineCleanrBubble: new Line(stageW, 0, '#fff').pos(0, 10), 
        }

        const createFing = {
            wrapFin: new Rectangle({
                width: 30,
                height: 150,
                color: "#fff0"
            }).pos(stageW / 2 - 90, 40).addPhysics({
                density: 0
            }),
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

        interval(1, () => {
            const playerBubble = new PlayerBubble("ש", score);
            playerBubble.addPlayer(rand(0, stageW), stageH);
            playerBubble.testHit(stage, createLineTop.topLineCleanrBubble, stageW)
            playerBubble.testHit(stage, createFing.pin, stageW)
        })





        stage.update();
    })


});