
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
    Template = ``;
    constructor() {
        super();
        this.init();
    }
    get mode() {
        return this.getAttribute('mode');
    }
    set mode(value) {
        this.setAttribute('mode', value);
    }
    init() {
        var _this = this;
        window.onload = function () {
            if (_this.CheckArguments()) {
                _this.DoSomething();
            }
        }
    }
    CheckArguments() {
        if (JSON.parse(this.mode)) {
            this.DrawCustomComponent();
            return this.findComponent(this.shadowDom);
        }
        return this.findComponent(this);
    }
    findComponent(p) {
        return true;
    }
    DoSomething() {

    }
    DrawCustomComponent() {
        this.template = document.createElement('template');
        this.template.innerHTML = this.Template;
        this.shadowDom = this.attachShadow({ mode: "open" });
        this.shadowDom.appendChild(this.template.content);
    }
    attributeChangedCallback(name, oldValue, newValue) {
        console.log(newValue);
    }
}
class fursionlogin extends FursionElement {
    Template = `
    <div><style>
    input[type=text] {
        height: 20px;
        outline: none;
        box-sizing: border-box;
        margin: 5px;
    }

    input[type=text]::placeholder {
        padding-left: 3px;
        font-size: 1pt;
    }

    input[type=text]:focus {
        outline: none;
        border: 2px solid hsl(190, 87%, 20%);
    }

    input[type=password] {
        height: 20px;
        outline: none;
        box-sizing: border-box;
        margin: 5px;
    }

    input[type=password]::placeholder {
        padding-left: 3px;
        font-size: 1pt;
    }
    input[type=password]:focus{
        outline: none;
        border: 2px solid hsl(190, 87%, 20%);
    }
    input[type=button] {
        height: 20px;
        width: 60px;
        border: 0ch;
        border-radius: 3px;
        margin: 5px;
        outline: none;
        font-size: x-small;
        background-color: hsl(190, 87%, 50%);
        color: hsl(5, 0%, 95%);
    }

    input[type=button]:active {
        background-color: hsl(190, 87%, 20%);
    }

    .box {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
<div class="box">
<input type="text" name="" id="_input_text" placeholder="用户名">
<input type="password" name="" id="_input_pwd" placeholder="密码">
<input type="button" value="点击登录">
</div>
    </div>  
    `;
    constructor() {
        super();
    }
    get action() {
        return this.getAttribute('action');
    }
    set action(value) {
        this.setAttribute('action', value);
    }
    findComponent(p) {
        var _this = p;
        this.UserName = _this.querySelector('input[type=text]');
        this.PWD = _this.querySelector('input[type=password]');
        this.Submitbtn = _this.querySelector("input[type=button]");
        return true;
    }
    DoSomething() {
        var _this = this;
        this.Submitbtn.onclick = function () {
            console.log(_this.UserName.value);
            console.log(_this.PWD.value);
        };
    }
}
window.customElements.define("fs-con", fursionlogin);
window.customElements.define("fs-audio", fursionElement);
//https://www.zhangxinxu.com/wordpress/2019/08/js-dom-mutation-observer/