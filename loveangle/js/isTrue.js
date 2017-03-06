/**
 * Created by Administrator on 2016/10/17.
 */
/*正则判断一群东西*/
function isTrue(){
	this.userAg = navigator.userAgent;
}
isTrue.prototype = {
	constructor:isTrue,
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
		if(/^\S+$/.test(str)){
			return true;
		}else {
			return false;
		}
	},
	isPhoneNum:function(str){
		if(/0?(13|14|15|17|18)[0-9]{9}/.test(str)){
			return true;
		}else {
			return false;
		}
	},
	isEmail:function(str){
		if(/\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/.test(str)){
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
	}
};
var reg = new isTrue();