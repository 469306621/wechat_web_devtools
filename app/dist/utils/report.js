'use strict';var _exports;function init(){const a=require('../config/urlConfig.js');_exports=b=>{const c=require('../common/request/request.js');let d={url:a.CLIENTREPORT_URL,body:JSON.stringify({client_useinfo:b}),method:'post',needToken:1};c(d,(e,f,g)=>{})}}init(),module.exports=_exports;