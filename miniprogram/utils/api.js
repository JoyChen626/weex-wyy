import { post, get } from './util.js'


export const IndexBanner = params => post('User/Login', params);

export const IndexUrl = params => get('User/Login', params); //首页数据接口

