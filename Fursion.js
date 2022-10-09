class fursionDOM {
    constructor(fristname) {
        this.fristname = fristname;
    }
    test() {
        console.log("obj");
    }
}
var vi = document.createElement("audio");
vi.setAttribute("src", "http://dl.stream.qqmusic.qq.com/C400000hmeNW4gTT74.m4a?guid=7427835792&vkey=5BA98CD4CE8B90952E1373DAA3AB2F94208378130C3B766C4EAC87DCD4CBB53BB61026D5DA4DE99DB67FA62EDFA7D2247DCFED630902C282&uin=&fromtag=120032");
vi.setAttribute("controls", "controls");
document.body.appendChild(vi);
function alertTip(message) {
    window.alert(message);
}
function EditText(id, message) {
    var el = document.getElementsByClassName(id);
    console.log(el);
    document.getElementsByClassName(id).innerHTML = message;
}
class fursionElement extends HTMLElement {
    template = document.createElement("template");
    constructor() {
        super();
        this.template.innerHTML = `
        <style>
        .vido-box{
            display: flex;
            flex-direction: column;
            width: 300px;
            height: auto;
            border: rgb(143, 222, 185) solid 3px;
            border-radius: 3px;
        }
        .vido-img{
            width: 300px;
            height: 300px;
        }
        .vido-player{
            width: 300px;
            height: 50px;
        }
    </style>
    <div class="vido-box">
        <img class="vido-img" src="" alt="">
        <audio class="vido-player" src="" controls="controls"></audio>
    </div>
        `;
        this.shadowDom = this.attachShadow({ mode: "open" });
        this.shadowDom.appendChild(this.template.content);
    }
}
window.customElements.define("fursion-el", fursionElement);