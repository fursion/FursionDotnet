var script = document.createElement('script');
script.type = "text/javascript";
script.src = "https://code.jquery.com/jquery-3.6.1.min.js";
document.getElementsByTagName('head')[0].appendChild(script);
class fursion {
    constructor(query) {
        this.targername = query;
        this.init();
    }
    init() {
        this.targer = document.querySelector(this.targername);
    }
    show() {
        this.targer.style.display = 'flex';
    }
    hide() {
        this.targer.style.display = 'none';
    }
}
const $$ = function (query) {
    return new fursion(query);
}
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
    Template = `<div><style>input[type=text]{height:20px;outline:none;box-sizing:border-box;margin:5px}input[type=text]::placeholder{padding-left:3px;font-size:1pt}input[type=text]:focus{outline:none;border:2px solid hsl(190,87%,20%)}input[type=password]{height:20px;outline:none;box-sizing:border-box;margin:5px}input[type=password]::placeholder{padding-left:3px;font-size:1pt}input[type=password]:focus{outline:none;border:2px solid hsl(190,87%,20%)}input[type=button]{height:20px;width:60px;border:0ch;border-radius:3px;margin:5px;outline:none;font-size:x-small;background-color:#457b9d;color:#edf6f9}input[type=button]:active{background-color:#a8dadc}.box{display:flex;flex-direction:column;align-items:center}</style><div class="box"><input type="text"name=""id="_input_text"placeholder="用户名"><input type="password"name=""id="_input_pwd"placeholder="密码"><input type="button"value="点击登录"></div></div>`;
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
class QRCodeLogin extends FursionElement {
    Template = `<head><script src="fursion.js"></script></head><div class="box"><style>.box-br{max-width:500px;min-width:300px;max-height:500px;min-height:400px;width:auto;height:auto;border-radius:15px;border:#219ebc solid 1px}.box{display:flex;flex-direction:column;justify-content:center;align-items:center}img{width:150px;height:150px;border:#219ebc solid 1px;border-radius:10px}input[type=button]{border:#219ebc solid 1px;width:120px;height:30px;margin-bottom:30px;border-radius:3px}input[type=button]:active{background-color:#219ebc}input[type=text],input[type=password]{padding-left:3px;margin-bottom:30px;border:none;border-bottom:1px solid#219ebc}input[type=text]::placeholder,input[type=password]::placeholder{padding:3px;font-size:1px}.box-top{border-bottom:#219ebc solid 1px;height:64px;margin-top:15px;display:flex;flex-direction:row;justify-content:flex-end}.box-title{text-align:center;width:100px;height:20px;font-size:x-small;color:#219ebc;margin-left:10px}.box-bottom{width:auto;height:50px;border-top:#219ebc solid 1px;margin-bottom:0px}.box-bg-1{display:flex;height:100%;flex-direction:column;justify-content:space-between;min-height:400px;max-height:500px}.box-bg-2{display:none;height:100%;flex-direction:column;justify-content:space-between;min-height:400px;max-height:500px}.box-switch{margin-left:10px;width:64px;height:64px;align-self:flex-end}.box-switch>img{width:100%;height:100%;border:none}</style><div class="box-br"><div class="box-bg-1"><div class="box-top"><div class="box-title">扫码登录</div><div class="box-switch"onclick="$('.box-bg-2',this).show();$('.box-bg-1',this).hide();"><img src="data:image/svg+xml;base64,PHN2ZyB0PSIxNjY2MDY5MDY2MTM1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjUxMjkiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48cGF0aCBkPSJNOTAzLjgyNTQ3OCA1MzMuNTk5OTQ3bC03ODMuNjM3NjU0IDBjLTE2LjY0MTAwNSAwLTMwLjE0NzYyNC0xMy40OTQzMzktMzAuMTQ3NjI0LTMwLjEzMzI5OCAwLTE2LjYyNTY1NiAxMy41MDc2NDItMzAuMTQ4NjQ3IDMwLjE0NzYyNC0zMC4xNDg2NDdsNzgzLjYzNzY1NCAwYzE2LjY3MDY4MSAwIDMwLjEzMzI5OCAxMy41MjI5OTEgMzAuMTMzMjk4IDMwLjE0ODY0N0M5MzMuOTU4Nzc2IDUyMC4xMDU2MDggOTIwLjQ5NjE2IDUzMy41OTk5NDcgOTAzLjgyNTQ3OCA1MzMuNTk5OTQ3TTgxMy40MjY2MDkgODk1LjI4NDQ1MyA2NDcuMjYxMTI1IDg5NS4yODQ0NTNjLTE2LjY3MDY4MSAwLTMwLjE2Mzk5Ny0xMy40NjI2MTYtMzAuMTYzOTk3LTMwLjEzMjI3NCAwLTE2LjY3MDY4MSAxMy40OTMzMTYtMzAuMTYzOTk3IDMwLjE2Mzk5Ny0zMC4xNjM5OTdsMTY2LjE2NjUwNyAwYzE2LjY0MTAwNSAwIDMwLjEwMjU5OC0xMy40OTIyOTIgMzAuMTAyNTk4LTMwLjEzMjI3NEw4NDMuNTMwMjMxIDY1NC4xNjE3OWMwLTE2LjY3MTcwNSAxMy40OTIyOTItMzAuMTMzMjk4IDMwLjE2Mjk3NC0zMC4xMzMyOTggMTYuNjcyNzI4IDAgMzAuMTMzMjk4IDEzLjQ2MTU5MyAzMC4xMzMyOTggMzAuMTMzMjk4bDAgMTUwLjY5NDExN0M5MDMuODI1NDc4IDg1NC43MTc1MjYgODYzLjI1ODU1MSA4OTUuMjg0NDUzIDgxMy40MjY2MDkgODk1LjI4NDQ1M00zODIuMzAwNTQ0IDg5NS4yODQ0NTMgMjEwLjYwMjA0NCA4OTUuMjg0NDUzYy00OS44NjE2MTggMC05MC40MTMxOTYtNDAuNTY2OTI4LTkwLjQxMzE5Ni05MC40Mjg1NDVMMTIwLjE4ODg0OCA2NTQuMTYxNzljMC0xNi42NzE3MDUgMTMuNTA3NjQyLTMwLjEzMzI5OCAzMC4xNDc2MjQtMzAuMTMzMjk4IDE2LjY0MTAwNSAwIDMwLjExNzk0OCAxMy40NjE1OTMgMzAuMTE3OTQ4IDMwLjEzMzI5OGwwIDE1MC42OTQxMTdjMCAxNi42NDEwMDUgMTMuNTM3MzE4IDMwLjEzMjI3NCAzMC4xNDc2MjQgMzAuMTMyMjc0TDM4Mi4zMDA1NDQgODM0Ljk4ODE4MmMxNi42NzA2ODEgMCAzMC4xNjM5OTcgMTMuNDkzMzE2IDMwLjE2Mzk5NyAzMC4xNjM5OTdDNDEyLjQ2MzUxOCA4ODEuODIxODM3IDM5OC45NzAyMDIgODk1LjI4NDQ1MyAzODIuMzAwNTQ0IDg5NS4yODQ0NTNNMTUwLjMzNjQ3MiAzODIuOTAzNzgzYy0xNi42Mzk5ODIgMC0zMC4xNDc2MjQtMTMuNTA3NjQyLTMwLjE0NzYyNC0zMC4xNDg2NDdMMTIwLjE4ODg0OCAyMDIuMDYxMDE5YzAtNDkuODYxNjE4IDQwLjU1MjYwMS05MC40MTMxOTYgOTAuNDEzMTk2LTkwLjQxMzE5NkwzODIuMzAwNTQ0IDExMS42NDc4MjNjMTYuNjcwNjgxIDAgMzAuMTYzOTk3IDEzLjUwNjYxOSAzMC4xNjM5OTcgMzAuMTQ3NjI0IDAgMTYuNjEwMzA2LTEzLjQ5MzMxNiAzMC4xMTc5NDgtMzAuMTYzOTk3IDMwLjExNzk0OEwyMTAuNjAyMDQ0IDE3MS45MTMzOTVjLTE2LjYxMDMwNiAwLTMwLjE0NzYyNCAxMy41MzczMTgtMzAuMTQ3NjI0IDMwLjE0NzYyNGwwIDE1MC42OTQxMTdDMTgwLjQ1NDQyIDM2OS4zOTYxNDEgMTY2Ljk3NjQ1NCAzODIuOTAzNzgzIDE1MC4zMzY0NzIgMzgyLjkwMzc4M004NzMuNjkyMTgxIDM4Mi45MDM3ODNjLTE2LjY3MDY4MSAwLTMwLjE2Mjk3NC0xMy41MDc2NDItMzAuMTYyOTc0LTMwLjE0ODY0N0w4NDMuNTI5MjA3IDIwMi4wNjEwMTljMC0xNi42MTAzMDYtMTMuNDYxNTkzLTMwLjE0NzYyNC0zMC4xMDI1OTgtMzAuMTQ3NjI0TDY0Ny4yNjExMjUgMTcxLjkxMzM5NWMtMTYuNjcwNjgxIDAtMzAuMTYzOTk3LTEzLjUwNzY0Mi0zMC4xNjM5OTctMzAuMTE3OTQ4IDAtMTYuNjQxMDA1IDEzLjQ5MzMxNi0zMC4xNDc2MjQgMzAuMTYzOTk3LTMwLjE0NzYyNGwxNjYuMTY2NTA3IDBjNDkuODMwOTE5IDAgOTAuMzk4ODcgNDAuNTUyNjAxIDkwLjM5ODg3IDkwLjQxMzE5NmwwIDE1MC42OTQxMTdDOTAzLjgyNTQ3OCAzNjkuMzk2MTQxIDg5MC4zNjQ5MDkgMzgyLjkwMzc4MyA4NzMuNjkyMTgxIDM4Mi45MDM3ODMiIHAtaWQ9IjUxMzAiIGZpbGw9IiMxMjk2ZGIiPjwvcGF0aD48L3N2Zz4="></div></div><div class="box"><input type="text"name=""placeholder="用户名/邮箱/手机号"><input type="password"name=""placeholder="密码"><input type="button"value="login"></div><div class="box-bottom"></div></div><div class="box-bg-2"><div class="box-top"><div class="box-title">账户密码登录</div><div class="box-switch"onclick="$('.box-bg-1').show();$('.box-bg-2').hide();"><img src="data:image/svg+xml;base64,PHN2ZyB0PSIxNjY2MDY5MjYzMDY3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjY1OTciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48cGF0aCBkPSJNMTcwLjY2NjY2NyA1MDEuMzMzMzMzYzAgNC4yNjY2NjcgMCA2LjQgMi4xMzMzMzMgMTAuNjY2NjY3IDQuMjY2NjY3IDEyLjggMTQuOTMzMzMzIDIxLjMzMzMzMyAyNy43MzMzMzMgMjEuMzMzMzMzaDQwNy40NjY2NjdjMTcuMDY2NjY3IDAgMzItMTQuOTMzMzMzIDMyLTMydi0xMjhjMC0xNy4wNjY2NjctMTQuOTMzMzMzLTMyLTMyLTMyaC00MDUuMzMzMzMzLTIuMTMzMzM0Yy0xMi44IDAtMjMuNDY2NjY3IDEwLjY2NjY2Ny0yNy43MzMzMzMgMjEuMzMzMzM0LTIuMTMzMzMzIDQuMjY2NjY3LTIuMTMzMzMzIDYuNC0yLjEzMzMzMyAxMC42NjY2NjZ2MTI4eiBtNjQtOTZoMzQxLjMzMzMzM3Y2NEgyMzQuNjY2NjY3di02NHpNOTc3LjA2NjY2NyA4NDAuNTMzMzMzYy02LjQtODUuMzMzMzMzLTIzLjQ2NjY2Ny0xNTMuNi0xMjUuODY2NjY3LTE3Mi44IDE0LjkzMzMzMy0xMC42NjY2NjcgMjcuNzMzMzMzLTI3LjczMzMzMyAzNi4yNjY2NjctNTMuMzMzMzMzIDIuMTMzMzMzLTQuMjY2NjY3IDIuMTMzMzMzLTguNTMzMzMzIDIuMTMzMzMzLTE0LjkzMzMzM3YtNC4yNjY2NjdjMC00LjI2NjY2NyAyLjEzMzMzMy04LjUzMzMzMyAyLjEzMzMzMy0xMi44VjU3NnYtMjEuMzMzMzMzLTYuNGMwLTU1LjQ2NjY2Ny00NC44LTEwMC4yNjY2NjctMTAyLjQtMTAwLjI2NjY2N3MtMTAyLjQgNDQuOC0xMDYuNjY2NjY2IDEwMC4yNjY2Njd2MzJjMCA0LjI2NjY2NyAwIDguNTMzMzMzIDIuMTMzMzMzIDEwLjY2NjY2NnY2LjRjMCA0LjI2NjY2NyAyLjEzMzMzMyA2LjQgMi4xMzMzMzMgMTAuNjY2NjY3IDYuNCAyOS44NjY2NjcgMTkuMiA0Ni45MzMzMzMgMzYuMjY2NjY3IDU5LjczMzMzMy0xMDQuNTMzMzMzIDE5LjItMTE5LjQ2NjY2NyA4Ny40NjY2NjctMTI1Ljg2NjY2NyAxNzIuOCAwIDE5LjIgMTQuOTMzMzMzIDM0LjEzMzMzMyAzNC4xMzMzMzQgMzQuMTMzMzM0IDE3LjA2NjY2NyAwIDI5Ljg2NjY2Ny0xMi44IDMyLTI5Ljg2NjY2NyA2LjQtNjguMjY2NjY3IDE0LjkzMzMzMy0xMTkuNDY2NjY3IDEyNS44NjY2NjYtMTE5LjQ2NjY2N3MxMjEuNiA1MS4yIDEyNS44NjY2NjcgMTE5LjQ2NjY2N2MyLjEzMzMzMyAxNy4wNjY2NjcgMTQuOTMzMzMzIDI5Ljg2NjY2NyAzMiAyOS44NjY2NjcgMTkuMiAwIDM0LjEzMzMzMy0xNC45MzMzMzMgMjkuODY2NjY3LTM0LjEzMzMzNHpNODMyIDU1NC42NjY2Njd2MjcuNzMzMzMzYzAgNi40LTIuMTMzMzMzIDEyLjgtNC4yNjY2NjcgMTcuMDY2NjY3LTYuNCAxOS4yLTIxLjMzMzMzMyAxOS4yLTM4LjQgMTkuMi0xOS4yIDAtMzIgMC0zOC40LTE5LjItNC4yNjY2NjctNC4yNjY2NjctNC4yNjY2NjctMTAuNjY2NjY3LTQuMjY2NjY2LTE3LjA2NjY2N3YtMi4xMzMzMzMtMTIuOC0xMi44YzAtNC4yNjY2NjcgMC02LjQgMi4xMzMzMzMtMTAuNjY2NjY3IDAtMi4xMzMzMzMgMi4xMzMzMzMtNi40IDQuMjY2NjY3LTguNTMzMzMzIDYuNC0xNC45MzMzMzMgMTkuMi0yMy40NjY2NjcgMzYuMjY2NjY2LTIzLjQ2NjY2N3MyOS44NjY2NjcgOC41MzMzMzMgMzguNCAyMy40NjY2NjdjMi4xMzMzMzMgMi4xMzMzMzMgMi4xMzMzMzMgNi40IDQuMjY2NjY3IDguNTMzMzMzdjEwLjY2NjY2N3oiIHAtaWQ9IjY1OTgiIGZpbGw9IiMxMjk2ZGIiPjwvcGF0aD48cGF0aCBkPSJNNTQ0IDY2MS4zMzMzMzNIMTA2LjY2NjY2N1YyMTMuMzMzMzMzaDU5Ny4zMzMzMzN2MTM4LjY2NjY2N2MwIDE3LjA2NjY2NyAxNC45MzMzMzMgMzIgMzIgMzJzMzItMTQuOTMzMzMzIDMyLTMyVjE5MmMwLTIzLjQ2NjY2Ny0xOS4yLTQyLjY2NjY2Ny00Mi42NjY2NjctNDIuNjY2NjY3SDg1LjMzMzMzM2MtMjMuNDY2NjY3IDAtNDIuNjY2NjY3IDE5LjItNDIuNjY2NjY2IDQyLjY2NjY2N3Y0OTAuNjY2NjY3YzAgMjMuNDY2NjY3IDE5LjIgNDIuNjY2NjY3IDQyLjY2NjY2NiA0Mi42NjY2NjZoMTkydjg1LjMzMzMzNGgtNTMuMzMzMzMzYy0xNy4wNjY2NjcgMC0zMiAxNC45MzMzMzMtMzIgMzJzMTQuOTMzMzMzIDMyIDMyIDMySDUzMy4zMzMzMzN2LTE0OS4zMzMzMzRoMTAuNjY2NjY3YzE3LjA2NjY2NyAwIDMyLTE0LjkzMzMzMyAzMi0zMnMtMTQuOTMzMzMzLTMyLTMyLTMyek00NjkuMzMzMzMzIDgxMC42NjY2NjdoLTEyOHYtODUuMzMzMzM0aDEyOHY4NS4zMzMzMzR6IiBwLWlkPSI2NTk5IiBmaWxsPSIjMTI5NmRiIj48L3BhdGg+PC9zdmc+"></div></div><div class="box"><img src="data:image/png;base64,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"></div><div class="box-bottom"></div></div></div></div>`;
    constructor() {
        super();

    }

}
window.customElements.define("fs-qrlogin", QRCodeLogin);
window.customElements.define("fs-con", fursionlogin);

//https://www.zhangxinxu.com/wordpress/2019/08/js-dom-mutation-observer/