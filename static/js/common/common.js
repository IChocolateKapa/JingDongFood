/**
 * Created by Administrator on 2015/8/3.
 */

/*跨浏览器事件处理程序*/

var eventUtil = {
    /*绑定事件*/
    addHandler: function(element, type, method){
        if(element.addEventListener){
            element.addEventListener(type, method, false);
        } else if(element.attachEvent){
            element.attachEvent('on'+type, method);
        } else{
            /*Dom 0级事件处理程序*/
            /*js中，所有点号连接的事件处理程序都可以使用中括号来代替， 即：*/
            /*element.onclick === element['onclick']*/
            element['on'+type] = method;
        }
    },
    /*删除绑定事件*/
    removeHandler: function(element, type, method){
        if(element.removeEventListener){
            element.removeEventListener(type, method, false);
        } else if(element.dettachEvent){
            element.dettachEvent('on'+type, method);
        } else{
            /*Dom 0级事件处理程序*/
            /*js中，所有点号连接的事件处理程序都可以使用中括号来代替， 即：*/
            /*element.onclick === element['onclick']*/
            element['on'+type] = null;
        }
    }


}

