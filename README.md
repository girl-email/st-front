# st-sdkjs 

## 安装方法  

> npm i st-sdkjs 


## 项目内使用 

```js 
import st from 'st-sdkjs';

/**
 * main.js内调用此方法
 */
st.init();

/**
 * 登陆后调用此方法传入信息
 * @param {string} appKey 闪调后台获取应用appkey
 * @param {string} appKey 当前用户姓名
 * @param {number} userId 当前用户唯一标识id
 */
st.login(appKey, userName, userId);
```