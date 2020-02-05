
//如果说我们后面还有一些其他需要辅助处理的方法，都是可以放到util里面的，比如说处理金额信息，处理时间信息，或者是做一些其他的辅助
//生成一个随机数，所有和业务相关的操作都可以放进来
function friendlyDate(datsStr) {
    let dateObj = typeof datsStr === 'object' ? datsStr : new Date(datsStr)
    let time = dateObj.getTime()
    let now = Date.now()
    let space = now - time
    let str = ''

    switch (true) {
        case space < 60000:
            str = '刚刚'
            break
        case space < 1000*3600:
            str = Math.floor(space/60000) + '分钟前'
            break
        case space < 1000*3600*24:
            str = Math.floor(space/(1000*3600)) + '小时前'
            break
        default:
            str = Math.floor(space/(1000*3600*24)) + '天前'

    }
    return str

}

//这就是一个简单的插件
export  default {
    install (Vue,options){
        Vue.prototype.friendlyDate = friendlyDate
    }
}