class PlayerBubble {
    constructor(letter, score) {
        this.player = new Circle(30, "red");
        this.ifCame = true;
        this.letter = letter;
        this.label = new Label({
            text: this.letter,
            size: 40,
            font: "Varela Round",
            color: "red",
            bold: true,
        });
        this.circle = new Circle({
            min: 5,
            max: 10
        }, 'red').alp(1)
        this.score = score
    }
    addPlayer(x, y) {
        this.player.pos(x, y).cur('pointer');
        this.player.addPhysics({
            bounciness: .8
        })
        var label = new Label({
            text: this.letter,
            size: 40,
            font: "Varela Round",
            color: "white",
            bold: true,
        }).center(this.player);
        label.center(this.player);
        this.player.addChild(label)
    }
    testHit(stage, object, points) {
        Ticker.add(() => {
            // this.label.color = "red"
            if (this.player.hitTestRect(object, points)) {
            let particle = (object.type === 'Line') ? this.circle : this.label;
                if(object.type !== 'Line'){
                    this.score.score = this.score.score + 5;
                    console.log(this.score.score)
                } else {
                    this.score.score = this.score.score - 5
                }
                var emitter = new Emitter({
                    obj: particle,
                    num: 5,
                    // interval:30,
                    // life:500,
                    // decayTime:500,
                    gravity: 6,
                    force: 3,
                    startPaused: true
                })
                emitter.loc(this.player).spurt(30);
                emitter.on('spurtdecayed', () => {
                    emitter.removeFrom(stage);
                })
                this.player.removePhysics();
                this.player.removeFrom(stage);
            }
        });
    }
}

export default PlayerBubble