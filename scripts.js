var points = 0;
var state = 0;
var tstate = 0;
var bl = false;
var cd = false;

document.getElementById("simulate").addEventListener("mousedown", function apple() {
    if (cd == false) {
        bl = true;
        document.getElementById("states").innerHTML = `刺激中`;
        document.getElementById("states").style.border = "5px solid rgb(255, 0, 0)";
        document.getElementById("states").style.color = "rgb(255, 0, 0)";
        document.getElementById("image").setAttribute("src", `assets/${tstate.toString()}n.png`);
    }
});

document.getElementById("simulate").addEventListener("mouseup", function banana() {
    bl = false;
    cd = true;
    document.getElementById("states").innerHTML = `冷卻中`;
    document.getElementById("states").style.border = "5px solid rgb(255, 255, 0)";
    document.getElementById("states").style.color = "rgb(255, 255, 0)";
    document.getElementById("image").setAttribute("src", `assets/${state.toString()}p.png`);
});

setInterval(function coconut() {
    if (bl == true) {
        if (points <= 2800) {
            points += 1;

        }
        if (points >= 400) {
            if (tstate <= state) {
                tstate += 1;
            }
        }
    } else {
        if (points > 0) {
            points -= 1;
        }
    }
    if (points == 0) {
        if (tstate > state) {
            state += 1;
        }
        cd = false;
        document.getElementById("states").innerHTML = `可刺激狀態/${state.toString()}`;
        document.getElementById("states").style.border = "5px solid rgb(0, 127, 0)";
        document.getElementById("states").style.color = "rgb(0, 127, 0)";
        document.getElementById("image").setAttribute("src", `assets/${tstate.toString()}a.png`);
    }
    if (state > 5) {
        document.getElementById("simulate").innerHTML = `重開檔案重來`;
        state = 5;
        tstate = 5;
    }
}, 42);