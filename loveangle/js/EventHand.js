/**
 * Created by Administrator on 2016/12/20.
 */
function EventHand(){
    
}
EventHand.prototype = {
    constructor:EventHand,
    upFile:function(ev,element){
        var userLink = ev.target.value;
        element.val(userLink);
    },
    getImgUrl:function(file){
        var url = null ;
        if (window.createObjectURL!=undefined) {    // basic
            url = window.createObjectURL(file) ;
        } else if (window.URL!=undefined) {         // mozilla(firefox)
            url = window.URL.createObjectURL(file) ;
        } else if (window.webkitURL!=undefined) {   // webkit or chrome
            url = window.webkitURL.createObjectURL(file) ;
        }
        return url ;
    }
};

var EventHand = new EventHand;