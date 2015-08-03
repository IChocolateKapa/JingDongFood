/**
 * Created by Administrator on 2015/8/3.
 */

/*��������¼��������*/

var eventUtil = {
    /*���¼�*/
    addHandler: function(element, type, method){
        if(element.addEventListener){
            element.addEventListener(type, method, false);
        } else if(element.attachEvent){
            element.attachEvent('on'+type, method);
        } else{
            /*Dom 0���¼��������*/
            /*js�У����е�����ӵ��¼�������򶼿���ʹ�������������棬 ����*/
            /*element.onclick === element['onclick']*/
            element['on'+type] = method;
        }
    },
    /*ɾ�����¼�*/
    removeHandler: function(element, type, method){
        if(element.removeEventListener){
            element.removeEventListener(type, method, false);
        } else if(element.dettachEvent){
            element.dettachEvent('on'+type, method);
        } else{
            /*Dom 0���¼��������*/
            /*js�У����е�����ӵ��¼�������򶼿���ʹ�������������棬 ����*/
            /*element.onclick === element['onclick']*/
            element['on'+type] = null;
        }
    }


}

