/**
 * Created by Administrator on 2018/6/12.
 */

// /** + enter 快速生成注释

/**
 * 通过id名称获取标签
 * @param id id名称
 * @returns {Element} 返回获取到的标签
 */
function $(id) {
    return document.getElementById(id);
}
/**
 * 通过标签名称获取元素
 * @param obj 要在哪个标签里面获取
 * @param tagName 标签名称
 * @returns {NodeList} 找到的伪数组
 */
function getElementTagName(obj,tagName) {
    return obj.getElementsByTagName(tagName);
}
/**
 * 遍历数组/伪数组 并且把元素和索引返回
 * @param obj 要遍历的数组和位数
 * @param callback 回调函数 第一个参数是元素 第二个参数是索引
 */
function each(obj,callback) {
    for(var i = 0; i<obj.length; i++){
        var node = obj[i];
        if (callback) callback(node,i);
    }
}
/**
 * 获取滚动距离
 */
function scroll() {
    if (window.pageXOffset || window.pageYOffset){
        // IE9+ 和最新的浏览器
        var obj = {
            top:window.pageYOffset,
            left:window.pageXOffset
        };
        return obj;
    }else if(document.compatMode == 'CSS1Compat'){
        // 标准模式
        return {
            top:document.documentElement.scrollTop,
            left:document.documentElement.scrollLeft
        }
    }else {
        // 怪异
        return {
            top:document.body.scrollTop,
            left:document.body.scrollLeft
        }
    }
}
/**
 * 获取网页可视区域的宽度和高度
 */
function client() {
    if (window.innerWidth || window.innerHeight) {
        return {
            width:window.innerWidth,
            height: window.innerHeight
        }
    }else if (document.compatMode == 'CSS1compat'){
        // 标准
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        }
    }else {
        return {
            width: document.body.clientWidth,
            height: document.body.clientHeight
        }
    }
}