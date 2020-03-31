/**
 * 事件循环机制
 * 
 * 事件分为微任务和宏任务
 * 微任务有 
 * new promise()
 * new fun()
 * ~~~~~
 *宏任务有
 settimeout
 setinterval
js会优先执行微任务然后执行宏任务

 */