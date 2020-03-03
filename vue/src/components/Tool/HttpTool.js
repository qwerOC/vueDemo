import Axios from "axios";

var service = Axios.create({
    timeout: 5000,
    headers: {
        'content-type': 'application/json',
    }
})
//   请求拦截器拦截器 追踪请求参数 header 头等配置信息
service.interceptors.request.use(
    config => {
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        // if(TOKEN){
        //     // 配置请求头 token
        //     config.headers['Authorization'] = TOKEN;
        //  }
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject(error);
    }
)
//  返回拦截器 区分可以在此 这里的error 基本都是http错误
service.interceptors.response.use(
    function (response) {
        // 可以在这里拦截一些公共的code 码处理 比如登录失效       
        const res = response.data;
        if (res.code === 0) {
            return res;
        } else {
            alert(res.msg);
            // return null;
        }
    },
    function (error) {
        return Promise.reject(error);
    }
)
export default service

// export default {
//     getRequest(url, params) {
//         console.log(params.page);
//         return new Promise(function (resolve, reject) {
//             service({
//                 method: 'post',
//                 url,
//                 params: params,
//             }).then(function (res) {
//                 resolve(res);
//             }).catch(function (err) {
//                 console.log("错误" + err);
//             })
//         });
//     }

// }

