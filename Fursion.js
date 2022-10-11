
class fursionDOM {
    constructor(fristname) {
        this.fristname = fristname;
    }
    test() {
        console.log("obj");
    }
}
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
        this.audiourl = "http://dl.stream.qqmusic.qq.com/C400000GVhGu078nKq.m4a?guid=9220424184&vkey=696FF233FC769EEB72E26BD9F659748F10A49FD28BF73190BF3BA5A75E17D7BFD5C97151B34272D2428909AA671967BE3A74588B2B9C0A11&uin=&fromtag=120032";
        this.defimage = "data:image/svg+xml;base64,PHN2ZyB0PSIxNjY1Mzk1NTM5MDYwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ4NjQiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48cGF0aCBkPSJNNTEyIDUxLjJjMjUzLjk1MiAwIDQ2MC44IDIwNi44NDggNDYwLjggNDYwLjhzLTIwNi44NDggNDYwLjgtNDYwLjggNDYwLjgtNDYwLjgtMjA2Ljg0OC00NjAuOC00NjAuOCAyMDYuODQ4LTQ2MC44IDQ2MC44LTQ2MC44bTAtNTEuMkMyMjkuMzc2IDAgMCAyMjkuMzc2IDAgNTEyczIyOS4zNzYgNTEyIDUxMiA1MTIgNTEyLTIyOS4zNzYgNTEyLTUxMlM3OTQuNjI0IDAgNTEyIDB6IiBwLWlkPSI0ODY1Ij48L3BhdGg+PHBhdGggZD0iTTUxMiAzNDMuMDRjOTMuMTg0IDAgMTY4Ljk2IDc1Ljc3NiAxNjguOTYgMTY4Ljk2cy03NS43NzYgMTY4Ljk2LTE2OC45NiAxNjguOTYtMTY4Ljk2LTc1Ljc3Ni0xNjguOTYtMTY4Ljk2IDc1Ljc3Ni0xNjguOTYgMTY4Ljk2LTE2OC45Nm0wLTUxLjJjLTEyMS4zNDQgMC0yMjAuMTYgOTguODE2LTIyMC4xNiAyMjAuMTZzOTguODE2IDIyMC4xNiAyMjAuMTYgMjIwLjE2IDIyMC4xNi05OC44MTYgMjIwLjE2LTIyMC4xNi05OC44MTYtMjIwLjE2LTIyMC4xNi0yMjAuMTZ6IiBwLWlkPSI0ODY2Ij48L3BhdGg+PHBhdGggZD0iTTUxMiA1MTJtLTgxLjkyIDBhODEuOTIgODEuOTIgMCAxIDAgMTYzLjg0IDAgODEuOTIgODEuOTIgMCAxIDAtMTYzLjg0IDBaIiBwLWlkPSI0ODY3Ij48L3BhdGg+PC9zdmc+";
        this.template.innerHTML = `
        <style>
        .audio-box{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 300px;
            height: auto;
            border-radius: 10px;
            box-shadow: 0 0 30px hsl(85, 0%, 90%) inset;
        }
        .audio-img{
            margin-top:10px;
            width: 200px;
            height: 200px;
        }
        #audio-title{
            margin-bottom: 10px;
        }
        .audio-player{
            width: 260px;
            height: 40px;
            margin-bottom: 10px;
        }.fs-glass{
            filter :blur(1px);
        }
    </style>
    <div class="audio-box">
        <img draggable="false" class="audio-img" src="" alt="...">
        <label id="audio-title">...</label>
        <audio class="audio-player" src="" controls="controls"></audio>
    </div>
        `;
        this.shadowDom = this.attachShadow({ mode: "open" });
        this.shadowDom.appendChild(this.template.content);
        this.audiotitle = this.shadowDom.querySelector('#audio-title');
        this.addEvent();
        this.audiolist = new Array();

    }
    static get observedAttributes() {
        return ['src'];
    }
    get src() {
        return this._src;
    }
    set src(value) {
        console.log("属性设置");
        this.setAttribute('src', value);
    }
    addEvent() {
        this.audio = this.shadowDom.querySelector('.audio-player');
        this.setImage();
        this.audiotitle.innerHTML = "音乐";
        this.audiotitle.style.color = 'rgba(0,0,233,1)';
        this.audio.setAttribute("src", this.audiourl);
    }
    setImage() {
        let image = this.shadowDom.querySelector('.audio-img');
        image.setAttribute("src", this.defimage);
    }
    connectedCallback() {
        console.log("挂载组件");
        this.src = this.audiourl;
    }
    disconnectedCallback() {
        console.log("移除组件");
    }
    attributeChangedCallback(name, oldValue, newValue) {
        this._src = newValue;
        this.audiourl = this.src;
        this._updateRendering();
    }
    _updateRendering() {
        this.audio.setAttribute("src", this.audiourl);
    }
}

class FursionElement extends HTMLElement {
    constructor() {
        super();
        this.initevent = new CustomEvent("binding", {})
        this.addEventListener("binding", this.init);
        this.dispatchEvent(this.initevent);
    }
    init() {
        console.log("自定义事件");
    }
    attributeChangedCallback(name, oldValue, newValue) {
        console.log(newValue);
    }
}
class fursionlogin extends FursionElement {
    constructor() {
        super();
    }
    attributeChangedCallback(name, oldValue, newValue) {

    }
    init() {
        console.log(this.querySelector("#con"));
        var _this=this;
        window.onload = function () {
            var ob = document.getElementById("con");
            console.log(_this.querySelector("#con"));
            console.log(this.window.document.querySelector("#con"));
            console.log(ob);
        }
    }
    onload(){
        console.log("call");
    }
    test() {

    }
}
//window.customElements.define("fs-control", Fursionel);
window.customElements.define("fs-con", fursionlogin);
window.customElements.define("fs-audio", fursionElement);
//https://www.zhangxinxu.com/wordpress/2019/08/js-dom-mutation-observer/