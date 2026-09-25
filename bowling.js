 const pins = 
[
    [10,10],
    [10,10],
    [10,10],
    [10,10],
    [10,0],
    [10,6],
    [8,10],
    [10,10],
    [8,7],
    [10,0,8]
]

let x = 0
let score = 0
function Openframe(){
    if (pins[x][0] < 10 && pins[x][0] + pins[x][1] < 10) {
        score += pins[x][0] + pins[x][1]
    } else {
        return
    }
} 
function Spare() {
    if (pins[x][0] < 10 && pins[x][0] + pins[x][1] === 10) {
        if(x === 9) {
            score += pins[x][0] + pins[x][1] + pins[x][2]
        } else {
            score += 10 + pins[x+1][0]
        }
    } else {
        return
    }
}
function Strike() {
    if (pins[x][0] == 10) {
        if(x === 9) {
            score += pins[x][0] + pins[x][1] + pins[x][2]
        } else {
            score += 10 + pins[x+1][0] + pins[x+1][1]
        }
    } 
    else {
        return
    }
}
while(x<=9){
    Openframe()
    Spare()
    Strike()
    x += 1
}
console.log(score);