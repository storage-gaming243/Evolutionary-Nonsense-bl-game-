var points = 0;
var state = 0;
var tstate = 0;
var bl = false;
var cd = false;
var dias = [false, false, false, false, false];
var dias5 = false;

if (dias[0] == false) {
    diaA();
    dias[0] = true;
}

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
    if (cd == true && dias[2] == true && state < 5) {
        diaO();
    }
    if (cd == true && state == 4) {
        diaG();
    }
});

setInterval(function coconut() {
    if (bl == true) {
        dias5 = false;
        if (dias[1] == false) {
            diaB();
            dias[1] = true;
        }
        if (state == 3 && dias[3] == false) {
            diaD();
            dias[3] = true;
        }
        if (state == 4) {
            diaF();
        }
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
        if (state == 0 && dias[1] == true && dias5 == false) {
            dias5 = true;
            diaN();
        }
        if (state == 1 && dias[2] == false) {
            diaC();
            dias[2] = true;
        }
        if (state == 5 && dias[4] == false) {
            diaE();
            dias[4] = true;
        }
    }
    if (state > 5) {
        document.getElementById("simulate").innerHTML = `重開檔案重來`;
        state = 5;
        tstate = 5;
    }
}, 42);

function talk(a) {
    document.getElementById("diafa").innerHTML += "\n" + a;
}

function diaA() {
    talk("醫生(你)：不好意思，其實...");
    talk("迪亞：我知道會有困難，但是，知道醫生有儀器之後，我希望可以...變得更強大，幫助我心裡重要的人");
    talk("醫生(你)：不是之前治療過後，你的身體就已經改善很多嗎？你身體這樣就已經足夠了");
    talk("迪亞：可是...");
    talk("醫生(你)：先等等，我突然覺得有趣了，但別高興得太早，我可不是做慈善的。想要我幫忙，得先讓我看看你條件如何");
    talk("迪亞：意思是？");
    talk("醫生(你)：你先站上進化儀上吧，我得先警告你，這可不是開玩笑的，我也只是先讓你試試水溫而已");
}

function diaB() {
    talk("醫生(你)：怎麼樣，有感覺嗎");
    talk("迪亞：麻麻的");
}

function diaC() {
    talk("醫生(你)：有沒有甚麼不一樣");
    talk("迪亞：有，我感覺我身材變得更好了");
    talk("醫生(你)：還有呢？");
    talk("迪亞：我可以輕易控制身體的每束肌肉");
    talk("醫生(你)：很好，那我們去報...");
    talk("迪亞：不，我還要...");
}

function diaD() {
    talk("醫生(你)：即便你進化了，你還是不知道你在做甚麼吧？");
    talk("迪亞：是呀，但是，醫生是我的恩人，這點是無庸置疑的，在我臥病在床的期間，都是你在照顧我，你是我的家人、老師兼朋友");
    talk("醫生(你)：我不敢激怒現在的你，但是，我很確定你是錯的");
    talk("迪亞：...");
}

function diaE() {
    talk("迪亞：醫生，我們成功了，你看我現在的肉體，是無比的堅韌、靈活、強而有力");
    talk("但是...醫生...卻在哭泣");
    talk("醫生(你)：我的孩子，實驗失敗，你在其間喪失了理智，我將你的意識區分離成獨立的個體，值得慶幸的事，你已經演化成單靠部分組織就能成功生長成完整個體的生命，但剩下的我幫不了你，因為他不願意離開你，而我已經沒辦法繼續幫你了");
    talk("迪亞：？");
    talk("迪亞錯愕地看向後方，他失去理智的部分追上了迪亞，雖然迪亞能輕鬆與他抗衡，但妳為了自保，還是踉蹌逃離現場");
}

function diaF() {
    talk("迪亞：痾...痾痾...呃...");
}

function diaG() {
    talk("迪亞：阿..阿恩...醫生，你成功了...阿...");
}

function diaN() {
    talk("迪亞：是不是不夠久，醫生？");
    talk("醫生(你)：我們再試試看");
}

function diaO() {
    talk("醫生(你)：你確定嗎？你的身體快吃不消了");
    talk("迪亞：不，我...");
    talk("迪亞用不可言喻的手段試圖控制醫生，醫生也有察覺，但是他怕了");
    talk("迪亞：我們繼續");
    talk("醫生(你)：...");
}
