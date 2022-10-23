import logo from './logo.svg';
import './App.css';
import {Button} from 'antd';
function App() {
  return (
    <Dsboard></Dsboard>
  );
}
function Dsboard() {
  return (
      <div class="mask">
      <div class="bg"></div>
      <div class="settingpage">
          <div id="close-btn">
              <svg class="close-btn icon" onclick="ClosePage()" t="1666437170706" viewBox="0 0 1024 1024"
                  version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2992" width="16" height="16">
                  <path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#F55300" p-id="2993">
                  </path>
                  <path
                      d="M258.56 358.912l434.432 434.432a51.2 51.2 0 0 0 72.3968-72.3968L330.9568 286.5152A51.2 51.2 0 1 0 258.56 358.912z"
                      fill="#F9F9F9" p-id="2994"></path>
                  <path
                      d="M258.56 712.192l434.432-434.432a51.2 51.2 0 0 1 72.448 72.3968l-434.4832 434.432A51.2 51.2 0 1 1 258.56 712.192z"
                      fill="#F9F9F9" p-id="2995"></path>
              </svg>
          </div>
          <div class="title ">
              <h1>设置</h1>
          </div>
          <div class="line"></div>
          <div class="content"></div>
          <div class="btn-group">
              <input type="button" value="保存"></input>
              <input type="button" value="取消" id=""></input>
          </div>
      </div>
  </div>
  );
}
function ClosePage() {
  console.log('关闭页面');
}
export default App;
