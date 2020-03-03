import httpTool from "./HttpTool.js";
import UrlManager from "./UrlManager.js";
import CommdTools from "./CommdTools.js";

// 登录接口
export default {
    postLoginRequest(params = {}) {
        return httpTool.post(UrlManager.loginUrl, params);
    }
}
