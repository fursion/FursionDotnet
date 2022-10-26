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
class FursionElement extends HTMLElement {
    Template = ``;
    constructor() {
        super();
        this.init();
        var _this = this;
        document.addEventListener("DOMContentLoaded", function () {
            _this.InitComponent();
            _this.DoSomething();
            console.log('DOM构建完成');
        });
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
            console.log(_this.tagName);
            if (_this.CheckArguments()) {
                _this.OnloadSomething();
            }
        }
    }
    /**
     * 组件初始化
     */
    InitComponent() {

    }
    /**
     * 参数校验
     * @returns
     */
    CheckArguments() {
        if (JSON.parse(this.mode)) {
            this.DrawCustomComponent();
            return this.findComponent(this.shadowDom);
        }
        return this.findComponent(this);
    }
    /**
     * 组件查找
     * @param {*查找域} p 
     * @returns 查找结果  true/false
     */
    findComponent(p) {
        return true;
    }
    /**
     * 需要在onload之后执行的任务
     */
    OnloadSomething() {

    }
    DoSomething() {

    }
    /**
     * 绘制自定义组件在ShadowDom中
     */
    DrawCustomComponent() {
        this.template = document.createElement('template');
        this.template.innerHTML = this.Template;
        this.shadowDom = this.attachShadow({ mode: "open" });
        var script = document.createElement('script');
        script.type = "text/javascript";
        script.src = "https://code.jquery.com/jquery-3.6.1.min.js";
        var scriptfu = document.createElement('script');
        scriptfu.type = "text/javascript";
        scriptfu.src = "fursion.js";
        //this.shadowDom.appendChild(script);
        this.appendChild(this.template.content);
    }
    attributeChangedCallback(name, oldValue, newValue) {
        console.log(newValue);
    }
}
class IframeBox extends FursionElement {
    Template = `<div class="Split-Box"></div>`;
    constructor() {
        super();
    }
}
window.customElements.define("fs-iframebox", IframeBox);
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
    Template = `<div class="box"><style>.box-br{max-width:500px;min-width:300px;max-height:500px;min-height:400px;width:auto;height:auto;border-radius:15px;border:#219ebc solid 1px}.box{display:flex;flex-direction:column;justify-content:center;align-items:center}img{width:150px;height:150px;border:#219ebc solid 1px;border-radius:10px}input[type=button]{border:#219ebc solid 1px;width:120px;height:30px;margin-bottom:30px;border-radius:3px}input[type=button]:active{background-color:#219ebc}input[type=text],input[type=password]{padding-left:3px;margin-bottom:30px;border:none;border-bottom:1px solid#219ebc}input[type=text]::placeholder,input[type=password]::placeholder{padding:3px;font-size:1px}.box-top{border-bottom:#219ebc solid 1px;height:64px;margin-top:15px;display:flex;flex-direction:row;justify-content:flex-end}.box-title{text-align:center;width:100px;height:20px;font-size:x-small;color:#219ebc;margin-left:10px}.box-bottom{width:auto;height:50px;border-top:#219ebc solid 1px;margin-bottom:0px}.box-bg-1{display:flex;height:100%;flex-direction:column;justify-content:space-between;min-height:400px;max-height:500px}.box-bg-2{display:none;height:100%;flex-direction:column;justify-content:space-between;min-height:400px;max-height:500px}.box-switch{margin-left:10px;width:64px;height:64px;align-self:flex-end}.box-switch>img{width:100%;height:100%;border:none}</style><div class="box-br"><div class="box-bg-1"><div class="box-top"><div class="box-title">扫码登录</div><div class="box-switch"onclick="$('.box-bg-2',this).show();$('.box-bg-1',this).hide();"><img src="data:image/svg+xml;base64,PHN2ZyB0PSIxNjY2MDY5MDY2MTM1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjUxMjkiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48cGF0aCBkPSJNOTAzLjgyNTQ3OCA1MzMuNTk5OTQ3bC03ODMuNjM3NjU0IDBjLTE2LjY0MTAwNSAwLTMwLjE0NzYyNC0xMy40OTQzMzktMzAuMTQ3NjI0LTMwLjEzMzI5OCAwLTE2LjYyNTY1NiAxMy41MDc2NDItMzAuMTQ4NjQ3IDMwLjE0NzYyNC0zMC4xNDg2NDdsNzgzLjYzNzY1NCAwYzE2LjY3MDY4MSAwIDMwLjEzMzI5OCAxMy41MjI5OTEgMzAuMTMzMjk4IDMwLjE0ODY0N0M5MzMuOTU4Nzc2IDUyMC4xMDU2MDggOTIwLjQ5NjE2IDUzMy41OTk5NDcgOTAzLjgyNTQ3OCA1MzMuNTk5OTQ3TTgxMy40MjY2MDkgODk1LjI4NDQ1MyA2NDcuMjYxMTI1IDg5NS4yODQ0NTNjLTE2LjY3MDY4MSAwLTMwLjE2Mzk5Ny0xMy40NjI2MTYtMzAuMTYzOTk3LTMwLjEzMjI3NCAwLTE2LjY3MDY4MSAxMy40OTMzMTYtMzAuMTYzOTk3IDMwLjE2Mzk5Ny0zMC4xNjM5OTdsMTY2LjE2NjUwNyAwYzE2LjY0MTAwNSAwIDMwLjEwMjU5OC0xMy40OTIyOTIgMzAuMTAyNTk4LTMwLjEzMjI3NEw4NDMuNTMwMjMxIDY1NC4xNjE3OWMwLTE2LjY3MTcwNSAxMy40OTIyOTItMzAuMTMzMjk4IDMwLjE2Mjk3NC0zMC4xMzMyOTggMTYuNjcyNzI4IDAgMzAuMTMzMjk4IDEzLjQ2MTU5MyAzMC4xMzMyOTggMzAuMTMzMjk4bDAgMTUwLjY5NDExN0M5MDMuODI1NDc4IDg1NC43MTc1MjYgODYzLjI1ODU1MSA4OTUuMjg0NDUzIDgxMy40MjY2MDkgODk1LjI4NDQ1M00zODIuMzAwNTQ0IDg5NS4yODQ0NTMgMjEwLjYwMjA0NCA4OTUuMjg0NDUzYy00OS44NjE2MTggMC05MC40MTMxOTYtNDAuNTY2OTI4LTkwLjQxMzE5Ni05MC40Mjg1NDVMMTIwLjE4ODg0OCA2NTQuMTYxNzljMC0xNi42NzE3MDUgMTMuNTA3NjQyLTMwLjEzMzI5OCAzMC4xNDc2MjQtMzAuMTMzMjk4IDE2LjY0MTAwNSAwIDMwLjExNzk0OCAxMy40NjE1OTMgMzAuMTE3OTQ4IDMwLjEzMzI5OGwwIDE1MC42OTQxMTdjMCAxNi42NDEwMDUgMTMuNTM3MzE4IDMwLjEzMjI3NCAzMC4xNDc2MjQgMzAuMTMyMjc0TDM4Mi4zMDA1NDQgODM0Ljk4ODE4MmMxNi42NzA2ODEgMCAzMC4xNjM5OTcgMTMuNDkzMzE2IDMwLjE2Mzk5NyAzMC4xNjM5OTdDNDEyLjQ2MzUxOCA4ODEuODIxODM3IDM5OC45NzAyMDIgODk1LjI4NDQ1MyAzODIuMzAwNTQ0IDg5NS4yODQ0NTNNMTUwLjMzNjQ3MiAzODIuOTAzNzgzYy0xNi42Mzk5ODIgMC0zMC4xNDc2MjQtMTMuNTA3NjQyLTMwLjE0NzYyNC0zMC4xNDg2NDdMMTIwLjE4ODg0OCAyMDIuMDYxMDE5YzAtNDkuODYxNjE4IDQwLjU1MjYwMS05MC40MTMxOTYgOTAuNDEzMTk2LTkwLjQxMzE5NkwzODIuMzAwNTQ0IDExMS42NDc4MjNjMTYuNjcwNjgxIDAgMzAuMTYzOTk3IDEzLjUwNjYxOSAzMC4xNjM5OTcgMzAuMTQ3NjI0IDAgMTYuNjEwMzA2LTEzLjQ5MzMxNiAzMC4xMTc5NDgtMzAuMTYzOTk3IDMwLjExNzk0OEwyMTAuNjAyMDQ0IDE3MS45MTMzOTVjLTE2LjYxMDMwNiAwLTMwLjE0NzYyNCAxMy41MzczMTgtMzAuMTQ3NjI0IDMwLjE0NzYyNGwwIDE1MC42OTQxMTdDMTgwLjQ1NDQyIDM2OS4zOTYxNDEgMTY2Ljk3NjQ1NCAzODIuOTAzNzgzIDE1MC4zMzY0NzIgMzgyLjkwMzc4M004NzMuNjkyMTgxIDM4Mi45MDM3ODNjLTE2LjY3MDY4MSAwLTMwLjE2Mjk3NC0xMy41MDc2NDItMzAuMTYyOTc0LTMwLjE0ODY0N0w4NDMuNTI5MjA3IDIwMi4wNjEwMTljMC0xNi42MTAzMDYtMTMuNDYxNTkzLTMwLjE0NzYyNC0zMC4xMDI1OTgtMzAuMTQ3NjI0TDY0Ny4yNjExMjUgMTcxLjkxMzM5NWMtMTYuNjcwNjgxIDAtMzAuMTYzOTk3LTEzLjUwNzY0Mi0zMC4xNjM5OTctMzAuMTE3OTQ4IDAtMTYuNjQxMDA1IDEzLjQ5MzMxNi0zMC4xNDc2MjQgMzAuMTYzOTk3LTMwLjE0NzYyNGwxNjYuMTY2NTA3IDBjNDkuODMwOTE5IDAgOTAuMzk4ODcgNDAuNTUyNjAxIDkwLjM5ODg3IDkwLjQxMzE5NmwwIDE1MC42OTQxMTdDOTAzLjgyNTQ3OCAzNjkuMzk2MTQxIDg5MC4zNjQ5MDkgMzgyLjkwMzc4MyA4NzMuNjkyMTgxIDM4Mi45MDM3ODMiIHAtaWQ9IjUxMzAiIGZpbGw9IiMxMjk2ZGIiPjwvcGF0aD48L3N2Zz4="></div></div><div class="box"><input type="text"name=""placeholder="用户名/邮箱/手机号"><input type="password"name=""placeholder="密码"><input type="button"value="login"></div><div class="box-bottom"></div></div><div class="box-bg-2"><div class="box-top"><div class="box-title">账户密码登录</div><div class="box-switch"onclick="$('.box-bg-1').show();$('.box-bg-2').hide();"><img src="data:image/svg+xml;base64,PHN2ZyB0PSIxNjY2MDY5MjYzMDY3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjY1OTciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48cGF0aCBkPSJNMTcwLjY2NjY2NyA1MDEuMzMzMzMzYzAgNC4yNjY2NjcgMCA2LjQgMi4xMzMzMzMgMTAuNjY2NjY3IDQuMjY2NjY3IDEyLjggMTQuOTMzMzMzIDIxLjMzMzMzMyAyNy43MzMzMzMgMjEuMzMzMzMzaDQwNy40NjY2NjdjMTcuMDY2NjY3IDAgMzItMTQuOTMzMzMzIDMyLTMydi0xMjhjMC0xNy4wNjY2NjctMTQuOTMzMzMzLTMyLTMyLTMyaC00MDUuMzMzMzMzLTIuMTMzMzM0Yy0xMi44IDAtMjMuNDY2NjY3IDEwLjY2NjY2Ny0yNy43MzMzMzMgMjEuMzMzMzM0LTIuMTMzMzMzIDQuMjY2NjY3LTIuMTMzMzMzIDYuNC0yLjEzMzMzMyAxMC42NjY2NjZ2MTI4eiBtNjQtOTZoMzQxLjMzMzMzM3Y2NEgyMzQuNjY2NjY3di02NHpNOTc3LjA2NjY2NyA4NDAuNTMzMzMzYy02LjQtODUuMzMzMzMzLTIzLjQ2NjY2Ny0xNTMuNi0xMjUuODY2NjY3LTE3Mi44IDE0LjkzMzMzMy0xMC42NjY2NjcgMjcuNzMzMzMzLTI3LjczMzMzMyAzNi4yNjY2NjctNTMuMzMzMzMzIDIuMTMzMzMzLTQuMjY2NjY3IDIuMTMzMzMzLTguNTMzMzMzIDIuMTMzMzMzLTE0LjkzMzMzM3YtNC4yNjY2NjdjMC00LjI2NjY2NyAyLjEzMzMzMy04LjUzMzMzMyAyLjEzMzMzMy0xMi44VjU3NnYtMjEuMzMzMzMzLTYuNGMwLTU1LjQ2NjY2Ny00NC44LTEwMC4yNjY2NjctMTAyLjQtMTAwLjI2NjY2N3MtMTAyLjQgNDQuOC0xMDYuNjY2NjY2IDEwMC4yNjY2Njd2MzJjMCA0LjI2NjY2NyAwIDguNTMzMzMzIDIuMTMzMzMzIDEwLjY2NjY2NnY2LjRjMCA0LjI2NjY2NyAyLjEzMzMzMyA2LjQgMi4xMzMzMzMgMTAuNjY2NjY3IDYuNCAyOS44NjY2NjcgMTkuMiA0Ni45MzMzMzMgMzYuMjY2NjY3IDU5LjczMzMzMy0xMDQuNTMzMzMzIDE5LjItMTE5LjQ2NjY2NyA4Ny40NjY2NjctMTI1Ljg2NjY2NyAxNzIuOCAwIDE5LjIgMTQuOTMzMzMzIDM0LjEzMzMzMyAzNC4xMzMzMzQgMzQuMTMzMzM0IDE3LjA2NjY2NyAwIDI5Ljg2NjY2Ny0xMi44IDMyLTI5Ljg2NjY2NyA2LjQtNjguMjY2NjY3IDE0LjkzMzMzMy0xMTkuNDY2NjY3IDEyNS44NjY2NjYtMTE5LjQ2NjY2N3MxMjEuNiA1MS4yIDEyNS44NjY2NjcgMTE5LjQ2NjY2N2MyLjEzMzMzMyAxNy4wNjY2NjcgMTQuOTMzMzMzIDI5Ljg2NjY2NyAzMiAyOS44NjY2NjcgMTkuMiAwIDM0LjEzMzMzMy0xNC45MzMzMzMgMjkuODY2NjY3LTM0LjEzMzMzNHpNODMyIDU1NC42NjY2Njd2MjcuNzMzMzMzYzAgNi40LTIuMTMzMzMzIDEyLjgtNC4yNjY2NjcgMTcuMDY2NjY3LTYuNCAxOS4yLTIxLjMzMzMzMyAxOS4yLTM4LjQgMTkuMi0xOS4yIDAtMzIgMC0zOC40LTE5LjItNC4yNjY2NjctNC4yNjY2NjctNC4yNjY2NjctMTAuNjY2NjY3LTQuMjY2NjY2LTE3LjA2NjY2N3YtMi4xMzMzMzMtMTIuOC0xMi44YzAtNC4yNjY2NjcgMC02LjQgMi4xMzMzMzMtMTAuNjY2NjY3IDAtMi4xMzMzMzMgMi4xMzMzMzMtNi40IDQuMjY2NjY3LTguNTMzMzMzIDYuNC0xNC45MzMzMzMgMTkuMi0yMy40NjY2NjcgMzYuMjY2NjY2LTIzLjQ2NjY2N3MyOS44NjY2NjcgOC41MzMzMzMgMzguNCAyMy40NjY2NjdjMi4xMzMzMzMgMi4xMzMzMzMgMi4xMzMzMzMgNi40IDQuMjY2NjY3IDguNTMzMzMzdjEwLjY2NjY2N3oiIHAtaWQ9IjY1OTgiIGZpbGw9IiMxMjk2ZGIiPjwvcGF0aD48cGF0aCBkPSJNNTQ0IDY2MS4zMzMzMzNIMTA2LjY2NjY2N1YyMTMuMzMzMzMzaDU5Ny4zMzMzMzN2MTM4LjY2NjY2N2MwIDE3LjA2NjY2NyAxNC45MzMzMzMgMzIgMzIgMzJzMzItMTQuOTMzMzMzIDMyLTMyVjE5MmMwLTIzLjQ2NjY2Ny0xOS4yLTQyLjY2NjY2Ny00Mi42NjY2NjctNDIuNjY2NjY3SDg1LjMzMzMzM2MtMjMuNDY2NjY3IDAtNDIuNjY2NjY3IDE5LjItNDIuNjY2NjY2IDQyLjY2NjY2N3Y0OTAuNjY2NjY3YzAgMjMuNDY2NjY3IDE5LjIgNDIuNjY2NjY3IDQyLjY2NjY2NiA0Mi42NjY2NjZoMTkydjg1LjMzMzMzNGgtNTMuMzMzMzMzYy0xNy4wNjY2NjcgMC0zMiAxNC45MzMzMzMtMzIgMzJzMTQuOTMzMzMzIDMyIDMyIDMySDUzMy4zMzMzMzN2LTE0OS4zMzMzMzRoMTAuNjY2NjY3YzE3LjA2NjY2NyAwIDMyLTE0LjkzMzMzMyAzMi0zMnMtMTQuOTMzMzMzLTMyLTMyLTMyek00NjkuMzMzMzMzIDgxMC42NjY2NjdoLTEyOHYtODUuMzMzMzM0aDEyOHY4NS4zMzMzMzR6IiBwLWlkPSI2NTk5IiBmaWxsPSIjMTI5NmRiIj48L3BhdGg+PC9zdmc+"></div></div><div class="box"><img src="data:image/png;base64,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"></div><div class="box-bottom"></div></div></div></div>`;
    constructor() {
        super();

    }
}

/**
 * 监控Iframe
 */
class MonitorIframe extends FursionElement {
    constructor() {
        super();
    }
    DoSomething() {
        this.classList.add('monitor');
        this.box = document.createElement("div");
        this.box.classList.add('monitor');
        this.appendChild(this.box);
        this.Draw();
        window.addEventListener('fullscreenchange', function (e) {
            if (window.document.fullscreenElement && e.target.tagName == 'IFRAME') {
                console.log(e.target);
            } else if (e.target.tagName == 'IFRAME') {
                e.target.dispatchEvent(MonitorEvent);
            }
        })
    }
    ReadConfig() {
        if (localStorage.getItem('Config')) {
            return localStorage.getItem('Config');
        } else {
            var url = 'Config.json';
            var request = new XMLHttpRequest();
            request.open('GET', url);
            request.send(null);
            request.onload = function () {
                var json = JSON.parse(request.responseText);
                localStorage.setItem('Config', JSON.stringify(json));
                return localStorage.getItem('Config');
            }
        }
    }
    Draw() {
        var config = this.ReadConfig();
        let TaskS = JSON.parse(config)['iframes'];
        TaskS.forEach(task => {
            this.DrawMonitEntity(task);
        });

    }
    DrawMonitEntity(MonitTask) {
        var window = new MonitorWindow(this.box, MonitTask)
    }

}
window.customElements.define("fs-monitor", MonitorIframe);
const MonitorEvent = new CustomEvent('Exitallowscreen');
/**
 * 网页监控窗口
 */
class MonitorWindow {
    constructor(root, data) {
        this.Init(data);
        root.appendChild(this.window);
    }
    Init(data) {
        this.window = document.createElement("div");
        this.window.id = data.name + "-window";
        this.window.classList.add('window-2x2');
        this.Bar = document.createElement("div");
        this.Bar.classList.add('monitor-bar');
        this.AddController(this.Bar, function (t) {

        });
        this.title = document.createElement("div");
        this.title.classList.add('monitor-bar-block');
        this.title.innerText = data.title;
        this.Bar.appendChild(this.title);
        var settingbtn = document.createElement("div");
        settingbtn.classList.add('monitor-bar-block');
        settingbtn.innerHTML = `<svg t="1666688039131" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="23712" width="32" height="32"><path d="M928 608h-46.72l32-32L832 492.48V192a96 96 0 0 0-96-96H192a96 96 0 0 0-96 96v480a96 96 0 0 0 96 96h9.6a224 224 0 0 0 344.64 118.08l23.68 23.36 21.44-13.12 16.64-15.04V928h160v-46.72l32 32 108.16-108.16-12.16-20.48-14.72-16.64H928z" fill="#FFFFFF" p-id="23713"></path><path d="M416 704m-192 0a192 192 0 1 0 384 0 192 192 0 1 0-384 0Z" fill="#E9EAEB" p-id="23714"></path><path d="M128 288h672v448H192a64 64 0 0 1-64-64V288z" fill="#FFFFFF" p-id="23715"></path><path d="M192 128h544a64 64 0 0 1 64 64v96H128V192a64 64 0 0 1 64-64z" fill="#A3D4FF" p-id="23716"></path><path d="M608 192h96v32h-96z" fill="#2A5082" p-id="23717"></path><path d="M736 128H192a64 64 0 0 0-64 64v480a64 64 0 0 0 64 64h224v-32H192a32 32 0 0 1-32-32V192a32 32 0 0 1 32-32h544a32 32 0 0 1 32 32v224h32V192a64 64 0 0 0-64-64z" fill="#2A5082" p-id="23718"></path><path d="M704 256H192v32h512V256zM416 352H288v32h128v-32zM256 352H192v32h64v-32zM576 448H288v32h288v-32zM256 448H192v32h64v-32zM352 544H288v32h64v-32zM256 544H192v32h64v-32z" fill="#2A5082" p-id="23719"></path><path d="M896 736v-96h-72.96a102.4 102.4 0 0 0-5.44-13.76L869.12 576 800 506.88l-51.52 51.52a102.4 102.4 0 0 0-13.76-5.44V480H640v72.96a102.4 102.4 0 0 0-13.76 5.44L576 506.88 506.88 576l51.52 51.52a102.4 102.4 0 0 0-5.44 13.76H480v96h72.96a102.4 102.4 0 0 0 5.44 13.76L506.88 800 576 869.12l51.52-51.52a102.4 102.4 0 0 0 13.76 5.44V896h96v-72.96a102.4 102.4 0 0 0 13.76-5.44L800 869.12 869.12 800l-51.52-51.52a102.4 102.4 0 0 0 5.44-13.76z m-208 16a64 64 0 1 1 64-64 64 64 0 0 1-64 64z" fill="#A3D4FF" p-id="23720"></path><path d="M704 512v64l21.44 7.68 10.56 4.16 20.48 9.92 16-16 28.8-28.8 22.4 22.4-28.8 28.8-16 16 9.92 20.48c1.6 3.52 2.88 7.04 4.16 10.56L800 672h64v32h-64l-7.68 21.44c0 3.52-2.56 7.04-4.16 10.56l-9.92 20.48 16 16 28.8 28.8-22.4 22.4-28.8-28.8-16-16-20.48 9.92-10.56 4.16L704 800v64h-32v-64l-21.44-7.68-10.56-3.52-20.48-9.92-16 16-28.8 28.8-22.4-22.4 28.8-28.8 16-16-9.92-20.48c-1.6-3.52-2.88-7.04-4.16-10.56L576 704h-64v-32h64l7.68-21.44c0-3.52 2.56-7.04 4.16-10.56l9.92-20.48-16-16-28.8-28.8 22.4-22.4 28.8 28.8 16 16 20.48-9.92 10.56-4.16L672 576v-64h32m32-32h-96v72.96a102.4 102.4 0 0 0-13.76 5.44L576 506.88 506.88 576l51.52 51.52a102.4 102.4 0 0 0-5.44 13.76H480v96h72.96a102.4 102.4 0 0 0 5.44 13.76L506.88 800 576 869.12l51.52-51.52a102.4 102.4 0 0 0 13.76 5.44V896h96v-72.96a102.4 102.4 0 0 0 13.76-5.44L800 869.12 869.12 800l-51.52-51.52a102.4 102.4 0 0 0 5.44-13.76H896V640h-72.96a102.4 102.4 0 0 0-5.44-13.76L869.12 576 800 506.88l-51.52 51.52a102.4 102.4 0 0 0-13.76-5.44V480z" fill="#2A5082" p-id="23721"></path><path d="M688 656a32 32 0 1 1-32 32 32 32 0 0 1 32-32m0-32a64 64 0 1 0 64 64 64 64 0 0 0-64-64z" fill="#2A5082" p-id="23722"></path></svg>`;
        var allowscreenBtn = document.createElement("div");
        allowscreenBtn.classList.add('monitor-bar-block');
        allowscreenBtn.onclick = function () {
            _this.Iframe.requestFullscreen();
            _this.temp = _this.Refresh;
            _this.Refresh = false;
        }
        allowscreenBtn.innerHTML = `<svg t="1666688150327" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="25486" width="32" height="32"><path d="M512 512m-448 0a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#8C9EFF" p-id="25487"></path><path d="M567.12 477.88c-5.37 0-10.75-2.05-14.85-6.15-8.2-8.2-8.2-21.5 0-29.7l189-189c8.2-8.2 21.49-8.2 29.7 0 8.2 8.2 8.2 21.5 0 29.7l-189 189c-4.1 4.09-9.47 6.15-14.85 6.15zM456.88 477.88c-5.37 0-10.75-2.05-14.85-6.15l-189-189c-8.2-8.2-8.2-21.5 0-29.7s21.49-8.2 29.7 0l189 189c8.2 8.2 8.2 21.5 0 29.7a21.003 21.003 0 0 1-14.85 6.15zM756.12 777.12c-5.37 0-10.75-2.05-14.85-6.15l-189-189c-8.2-8.2-8.2-21.5 0-29.7s21.49-8.2 29.7 0l189 189c8.2 8.2 8.2 21.5 0 29.7-4.1 4.1-9.47 6.15-14.85 6.15zM267.88 777.12c-5.37 0-10.75-2.05-14.85-6.15-8.2-8.2-8.2-21.5 0-29.7l189-189c8.2-8.2 21.49-8.2 29.7 0 8.2 8.2 8.2 21.5 0 29.7l-189 189a20.96 20.96 0 0 1-14.85 6.15z" fill="#FFFFFF" p-id="25488"></path><path d="M260 438.5c-11.59 0-21-9.4-21-21V275.75c0-20.26 16.49-36.75 36.75-36.75H417.5c11.59 0 21 9.4 21 21s-9.41 21-21 21H281v136.5c0 11.6-9.41 21-21 21zM764 438.5c-11.59 0-21-9.4-21-21V281H606.5c-11.59 0-21-9.4-21-21s9.41-21 21-21h141.75c20.26 0 36.75 16.49 36.75 36.75V417.5c0 11.6-9.41 21-21 21zM748.25 281h0.14-0.14zM417.5 785H275.75c-20.26 0-36.75-16.49-36.75-36.75V606.5c0-11.6 9.41-21 21-21s21 9.4 21 21V743h136.5c11.59 0 21 9.4 21 21s-9.41 21-21 21zM748.25 785H606.5c-11.59 0-21-9.4-21-21s9.41-21 21-21H743V606.5c0-11.6 9.41-21 21-21s21 9.4 21 21v141.75c0 20.26-16.49 36.75-36.75 36.75z" fill="#FFFFFF" p-id="25489"></path></svg>`;
        this.Bar.appendChild(allowscreenBtn);

        this.Refresh = (JSON.parse(data.autorefresh));

        this.ControllerUpdate();
        this.Bar.appendChild(settingbtn);
        this.window.appendChild(this.Bar);
        this.Iframe = document.createElement("iframe");
        this.Iframe.classList.add('monitor-iframe')
        this.Iframe.src = data.url;
        this.Iframe.allowFullscreen = true;

        this.Iframe.addEventListener('Exitallowscreen', function () {
            _this.Refresh = _this.temp;
            _this.ControllerUpdate();
        });
        this.window.appendChild(this.Iframe);
        var _this = this;
        window.setInterval(function () {
            if (_this.Refresh) {
                _this.Iframe.src = _this.Iframe.src;
            }
        }, data.retime);
    }
    Refresh = false;
    ControllerUpdate() {
        if (this.Refresh) {
            this.Controller.innerHTML = `<svg t="1666594278133" class="icon" viewBox="0 -50 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14161" width="32" height="32"><path d="M764.904497 251.418146 259.086289 251.418146c-143.076626 0-259.065314 115.989711-259.065314 259.065314 0 143.077649 115.988688 259.063267 259.065314 259.063267l505.818207 0c143.074579 0 259.063267-115.985618 259.063267-259.063267C1023.967764 367.407857 907.980099 251.418146 764.904497 251.418146zM764.904497 747.164974c-130.507356 0-236.682537-106.175181-236.682537-236.682537S634.397141 273.798876 764.904497 273.798876s236.683561 106.176205 236.683561 236.683561S895.411853 747.164974 764.904497 747.164974z" p-id="14162" fill="#1afa29"></path></svg>`;
        } else {
            this.Controller.innerHTML = `<svg t="1666593216208" class="icon" viewBox="0 -50 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13622" width="32" height="32" data-spm-anchor-id="a313x.7781069.0.i15"><path d="M764.867148 249.793136 259.0735 249.793136c-143.070486 0-259.052011 115.984594-259.052011 259.052011 0 143.07151 115.982548 259.050987 259.052011 259.050987l505.793648 0c143.067416 0 259.050987-115.979478 259.050987-259.050987C1023.917112 365.778754 907.933541 249.793136 764.867148 249.793136zM259.0735 745.516428c-130.501216 0-236.671281-106.172111-236.671281-236.671281 0-130.501216 106.170065-236.671281 236.671281-236.671281S495.744781 378.344954 495.744781 508.84617C495.744781 639.34534 389.574716 745.516428 259.0735 745.516428z" p-id="13623" fill="#515151" data-spm-anchor-id="a313x.7781069.0.i14"></path></svg>`;
        }
    }
    AddController(node, event) {
        this.Controller = document.createElement("div");
        this.Controller.classList.add('monitor-bar-block');
        this.Controller.id = "contor";
        this.Controller.innerHTML = `<svg t="1666593216208" class="icon" viewBox="0 -50 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13622" width="32" height="32" data-spm-anchor-id="a313x.7781069.0.i15"><path d="M764.867148 249.793136 259.0735 249.793136c-143.070486 0-259.052011 115.984594-259.052011 259.052011 0 143.07151 115.982548 259.050987 259.052011 259.050987l505.793648 0c143.067416 0 259.050987-115.979478 259.050987-259.050987C1023.917112 365.778754 907.933541 249.793136 764.867148 249.793136zM259.0735 745.516428c-130.501216 0-236.671281-106.172111-236.671281-236.671281 0-130.501216 106.170065-236.671281 236.671281-236.671281S495.744781 378.344954 495.744781 508.84617C495.744781 639.34534 389.574716 745.516428 259.0735 745.516428z" p-id="13623" fill="#515151" data-spm-anchor-id="a313x.7781069.0.i14"></path></svg>`;
        var _this = this;
        this.Controller.onclick = function (e) {
            _this.Refresh = !_this.Refresh;
            event(_this.Refresh);
            _this.ControllerUpdate();
        }
        node.appendChild(this.Controller);
    }
}
/**
 * 弹窗
 */
class PopWindow extends FursionElement {
    constructor() {
        super();
    }
    InitComponent() {
        this.PopWindow = document.createElement("div");
        this.PopWindow.classList.add('pop-window');
        this.window_content = document.createElement("div");
        this.window_content.classList.add('pop-window-contentbox');
        this.PopWindow.appendChild(this.window_content);
        this.window_header = document.createElement("div");
        this.window_header.classList.add('pop-window-content-header');
        this.closeBtn = document.createElement("span")
        this.closeBtn.id = "close"
        this.closeBtn.innerHTML = `&times;`;
        this.closeBtn.title = '关闭';
        this.closeBtn.onclick = function () {
            _this.PopWindow.style.display = 'none';
        };
        this.H1 = document.createElement('h1');
        this.H1.innerText = this.title;
        this.window_header.appendChild(this.closeBtn);
        this.window_body = document.createElement("div");
        this.window_body.classList.add('pop-window-content-body');

        this.window_footer = document.createElement("div");
        this.window_footer.classList.add('pop-window-content-footer')
        this.window_content.appendChild(this.window_header);
        this.window_content.appendChild(this.window_body);
        this.window_content.appendChild(this.window_footer);
        this.appendChild(this.PopWindow);
        var _this = this;

    }
    DoSomething() {
        this.setContent();
        this.setHeader();
        this.setfotter();
        this.setController();
        var _closebtn = this.querySelector('.pop-closebtn');
        if (_closebtn) {
            var _this = this;
            _closebtn.onclick = function () {
                _this.PopWindow.style.display = 'none';
            }
        }
    }
    setContent() {
        var content = this.querySelector('.pop-window-content');
        if (content) {
            this.window_body.appendChild(content);
        }

    }
    setHeader() {
        var header = this.querySelector(".pop-window-header");
        if (header) {
            this.window_header.appendChild(header);
        }
    }
    setfotter() {
        var footer = this.querySelector(".pop-window-footer");
        if (footer) {
            this.window_footer.appendChild(footer);
        }
    }
    setController() {
        this.controller = document.getElementById(this.getAttribute('controller'));
        if (this.controller) {
            var _this = this;
            this.controller.onclick = function () {
                _this.PopWindow.style.display = 'block';
            }
        } else {
            console.error('没找到控制器,请通过controller属性设置控制器');
        }

    }
}
class JSONEditor extends FursionElement {
    constructor() {
        super();
    }
    DoSomething() {
        var r = document.createElement("div")
        r.id = 'con-root';
        this.appendChild(r);
        this.findController();
        this.Loadingfiles();

    }
    findController() {
        this.SaveBtn = document.getElementById(this.getAttribute('save'));
        this.ResetBtn = document.getElementById(this.getAttribute('reset'));
        this.CancelBtn = document.getElementById(this.getAttribute('cancel'));
        var _this = this;
        this.SaveBtn.onclick = function () {
            _this.SaveEvent();
        };
        this.ResetBtn.onclick = function () {
            _this.ResetEvent();
        }
        this.CancelBtn.addEventListener("click", function (e) {
            _this.CancelEvent();
        }, false);
    }
    SaveEvent() {
        console.log('🧐');
        console.log(this.ObjConfig);
        var str = JSON.stringify(this.ObjConfig);
        localStorage.setItem('Config', str);
        console.log(str);
        location.reload();
    }
    ResetEvent() {
        console.log('🧐');
        var url = 'Config.json';
        var request = new XMLHttpRequest();
        request.open('GET', url);
        request.send(null);
        var _this = this;
        request.onload = function () {
            var json = JSON.parse(request.responseText);
            localStorage.setItem('Config', JSON.stringify(json));
            _this.Loadingfiles();
        }
    }
    CancelEvent() {
        this.Loadingfiles();
    }
    Loadingfiles() {
        let config = localStorage.getItem('Config');
        console.log(config);
        this.ObjConfig = JSON.parse(config);
        let ElRoot = document.getElementById('con-root');
        while (ElRoot.hasChildNodes()) {
            ElRoot.removeChild(ElRoot.firstChild);
        }
        this.getJsonDOM(this.ObjConfig, ElRoot);
    }
    getJsonDOM(obj, El, key, AddDelBtn, lastobj) {
        if (obj instanceof Array) {
            for (var item in obj) {
                if (obj[item] instanceof Object) {
                    this.getJsonDOM(obj[item], this.DrawItem(item, obj, El, false), item, true, obj);
                } else {
                    this.DrawItem(item, obj, El, true);
                }

            }
        } else {
            for (var item in obj) {
                if (obj[item] instanceof Object) {
                    this.getJsonDOM(obj[item], this.DrawItem(item, obj, El, false), item);
                } else {
                    this.DrawItem(item, obj, El, true);
                }
            }
            if (AddDelBtn) {
                var _this = this;
                this.AddDelButton(El, function () {
                    console.log('🧐:', key);
                    console.log(_this.ObjConfig);
                    lastobj.splice(key);
                    console.log(lastobj);
                    console.log(_this.ObjConfig);
                    El.parentNode.removeChild(El);
                });
            }
        }
        if (key != undefined) {
            this.NewItemBtn(El, obj, key);
        }
    }
    AddDelButton(El, event) {
        let div = document.createElement("div");
        div.classList.add('new-item');
        div.innerHTML = `<svg t="1666539305873" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15714" width="16" height="16"><path d="M67.661 517.598a447.654 455.375 0 1 0 895.308 0 447.654 455.375 0 1 0-895.308 0Z" fill="#d81e06" p-id="15715"></path><path d="M683.858 350.83H335.13c-4.4 0-8-3.6-8-8v-24.345c0-4.4 3.6-8 8-8h348.729c4.4 0 8 3.6 8 8v24.345c-0.001 4.4-3.601 8-8.001 8zM657.18 383.79h-34.698c0.033 0.515 0.056 1.034 0.056 1.557v267.779c0 33.728-27.596 61.324-61.324 61.324H457.909c-34.023 0-61.859-27.837-61.859-61.859V385.347c0-0.524 0.023-1.042 0.056-1.557H361.81c-6.6 0-12 5.4-12 12v360.012c0 6.6 5.4 12 12 12h295.37c6.6 0 12-5.4 12-12V395.79c0-6.6-5.4-12-12-12z" fill="#FFFFFF" p-id="15716"></path><path d="M511.333 251.135m-43.846 0a43.846 43.846 0 1 0 87.692 0 43.846 43.846 0 1 0-87.692 0Z" fill="#FFFFFF" p-id="15717"></path></svg>`;
        div.onclick = event;
        El.appendChild(div);
    }
    GetTemplate(localdata, tempdata, tproot) {
        for (var item in localdata) {

            if (localdata[item] instanceof Object) {
                let div = document.createElement("div");
                div.classList.add('item-box');
                tproot.appendChild(this.GetTemplate(localdata[item], tempdata[item], div));
            } else {
                tproot.appendChild(this.DrawTemplateItem(item, tempdata));
            }
        }
        return tproot;
    }
    DrawTemplateItem(item, tempdata) {
        let itembox = document.createElement("div");
        itembox.classList.add('item-box');
        let label = document.createElement("label");
        let input = document.createElement("input");
        input.onchange = function () {
            tempdata[item] = input.value;
        }
        label.innerText = item + " :";
        itembox.appendChild(label);
        itembox.appendChild(input);
        return itembox;
    }
    DrawItem(nodename, data, lastnode, isDr) {
        if (isDr) {
            let div = document.createElement("div");
            div.classList.add('item');
            let label = document.createElement("label");
            let input = document.createElement("input");
            input.value = data[nodename];
            input.style.width = Object.keys(data[nodename]).length * 16 + 'px';
            input.onchange = function () {
                data[nodename] = input.value;
            }
            label.innerText = nodename + " :";
            div.appendChild(label);
            div.appendChild(input);
            lastnode.appendChild(div);
            return div;
        } else {
            let div = document.createElement("div");
            div.classList.add('item-box');
            let label = document.createElement("label");
            label.innerHTML = nodename;
            div.appendChild(label);
            lastnode.appendChild(div);
            return div;
        }

    }
    NewItemBtn(El, localdata, key) {
        if (!localdata[0] instanceof Object || undefined == localdata[0]) {
            return;
        }
        let div = document.createElement("div");
        div.classList.add('new-item');
        var _this = this;
        div.onclick = function () {
            let div = document.createElement("div");
            div.classList.add('item-box');
            var tempdata = {};
            var btn = El.lastChild;

            El.removeChild(El.lastChild);
            var newbox = _this.GetTemplate(localdata[0], tempdata, div);
            _this.AddDelButton(newbox, function () {
                El.removeChild(newbox);
                _this.ObjConfig[key].splice(_this.ObjConfig[key].indexOf(tempdata));
                console.log(_this.ObjConfig);
            })
            El.appendChild(newbox);
            El.appendChild(btn);
            _this.ObjConfig[key].push(tempdata);
            _this.SaveEvent = function () {
                console.log('🧐🧐🧐🧐🧐🧐🧐🧐');
                var str = JSON.stringify(_this.ObjConfig);
                localStorage.setItem('Config', str);
                console.log(str);
                location.reload();
            }
        }
        div.innerHTML = `<svg t="1666521266920" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2177" width="16" height="16"><path d="M512 938.666667C276.362667 938.666667 85.333333 747.637333 85.333333 512S276.362667 85.333333 512 85.333333s426.666667 191.029333 426.666667 426.666667-191.029333 426.666667-426.666667 426.666667z m0-64c200.298667 0 362.666667-162.368 362.666667-362.666667S712.298667 149.333333 512 149.333333 149.333333 311.701333 149.333333 512s162.368 362.666667 362.666667 362.666667z m32-394.666667h128a32 32 0 0 1 0 64H544v128a32 32 0 0 1-64 0V544H352a32 32 0 0 1 0-64h128V352a32 32 0 0 1 64 0v128z" p-id="2178"></path></svg>`;
        El.appendChild(div);
    }
}
window.customElements.define("fs-jsoneditor", JSONEditor);
window.customElements.define("fs-popwindow", PopWindow);
window.customElements.define("fs-qrlogin", QRCodeLogin);
window.customElements.define("fs-con", fursionlogin);

//https://www.zhangxinxu.com/wordpress/2019/08/js-dom-mutation-observer/