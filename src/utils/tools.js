
function getLocalTime(i) {
    if (typeof i !== 'number') return;
    var d = new Date(); //得到1970年一月一日到现在的秒数 
    var len = d.getTime();//本地时间与GMT时间的时间偏移差(注意：GMT这是UTC的民间名称。GMT=UTC）
    var offset = d.getTimezoneOffset() * 60000;//得到现在的格林尼治时间
    var utcTime = len + offset;
    return new Date(utcTime + 3600000 * i);
}

export { getLocalTime }