/**
 * Created by Administrator on 2016/10/17.
 */
/*正则验证*/
function isTest(){
	this.userAg = navigator.userAgent;
}
isTest.prototype = {
	constructor:isTest,
	isIOS:function(){
		if(!!this.userAg.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)){
			return true;
		}else {
			return false;
		}
	},
	isAndroid:function(){
		if(this.userAg.indexOf('Android') > -1 || this.userAg.indexOf('Adr') > -1){
			return true;
		}else {
			return false;
		}
	},
	isName:function(str){
		if(/[\u4e00-\u9fa5]{2,}/.test(str)){
			return true;
		}else {
			return false;
		}
	},
	isPhoneNum:function(str){
		if(/^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/.test(str)){
			return true;
		}else {
			return false;
		}
	},
	isEmail:function(str){
		if(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(str)){
			return true;
		}else {
			return false;
		}
	},
	isQq:function(str){
		if(/[1-9]([0-9]{5,11})/.test(str)){
			return true;
		}else {
			return false;
		}
	},
	isPassWord:function(str){
		if(/^[A-Za-z0-9_-]+$/.test(str)){
			return true;
		}else {
			return false;
		}
	},
	isAccount:function(str) {
		if(/^[a-zA-z][a-zA-Z0-9_]{2,9}$/.test(str)) {
			return true;
		}else {
			return false;
		}
	}
};