class PlayerBubble {
    constructor(typeOfPlayr, letter, score, color, life) {
        this.typeOfPlayr = typeOfPlayr;
        this.player = new Circle(30, color);
        this.letter = letter;
        this.label = new Label({
            text: this.letter.letter,
            size: 40,
            font: "Varela Round",
            color: color,
            bold: true,
        });
        this.circle = new Circle({
            min: 5,
            max: 10
        }, color).alp(1);
        this.fire = new Circle({
            min: 5,
            max: 10
        }, '#d97445').alp(1)
        this.score = score;
        this.color = color;
        this.life = life
    }
    addPlayer(x, y) {
        this.player.pos(x, y).cur('pointer');
        this.player.addPhysics({
            bounciness: .8
        })
        if (this.typeOfPlayr === "good") {
            var label = new Label({
                text: this.letter.letter,
                size: 40,
                font: "Varela Round",
                color: "white",
                bold: true,
            }).center(this.player);
            label.center(this.player);
            this.player.addChild(label)
        }

    }
    testHit(stage, object, points, cetch) {
        Ticker.add(() => {
            // this.label.color = "red"
            if (this.player.hitTestRect(object, points)) {
                let particle;
                if (this.typeOfPlayr === "good") {
                    particle = (object.type === 'Line') ? this.circle : this.label;
                    if (object.type !== 'Line') {
                        this.score.score = this.score.score + 5;
                        asset(this.letter.sound).play({
                            volume: 3
                        })
                        asset("success.mp3").play({
                            volume: .2
                        })
                        
                    } else {
                        if (this.score.score > 0) {
                            this.score.score = this.score.score - 5
                        }
                    }
                } else if (this.typeOfPlayr === "bad") {
                    particle = [this.circle, this.fire];
                    if (object.type !== 'Line') {
                        if (this.score.score > 0) {
                            this.score.score = this.score.score - 5;
                            
                          
                        }
                        cetch.alpha = .1
                        timeout(.1, ()=>{
                            cetch.alpha = 1
                         });
                        console.log(cetch)
                          this.life.splice(0, 1);
                            console.log(this.life)
                        // this.clearLife()
                        

                        asset("boom.mp3").play({
                            volume: .1
                        })
                    }
                    
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