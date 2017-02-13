/**
 * Created by codoon on 2017/2/7.
 */
import http from 'axios';
import qs from 'qs';
import NProgress from 'nprogress'//页面顶部进度条
import 'nprogress/nprogress.css'

console.log(NProgress)

http.defaults.baseURL = 'https://backendtest.blastapp.net';
http.defaults.timeout = 5000;
http.defaults.withCredentials = true;
http.defaults.crossDomain = true;

http.interceptors.request.use(function (config) {
    // 请求前 干一些事情
    NProgress.start();
    return config;
}, function (error) {
    // 发送请求出错
    NProgress.done();
    return Promise.reject(error);
});

http.interceptors.response.use(function (response) {
    // 请求成功后  你要搞一些事情
    NProgress.done();
    return response;
}, function (error) {
    // 请求出现错误
    NProgress.done();
    window.location.href = '#/login';
    return Promise.reject(error);
});


// 把默认的两种请求方式封装
const post = (url, data) =>{
  return http({
    method: 'post',
    url: url,
    data: qs.stringify(data),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  }).then(checkStatus)
};

const get = (url, params) => {
  return http({
    method: 'get',
    url: url,
    params,
  }).then(checkStatus)
};

function checkStatus(response) {
  if (response.status === 200 || response.status === 304) {
    return response = response.data;
  }
  return {
    data: {
      code: -400,
      message: response.statusText || '服务起发生错误~'
    }
  }
}


export const userLogin = data => {return post('/www/login', data)};

// 用户
export const feedback = data => {return get('www/blast/feedback', data)};
