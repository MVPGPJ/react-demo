const formatJsonDate = function (jsonStr) {
    var tmp = "";
    if (jsonStr == null || jsonStr == '')
        return '';
    if (jsonStr != null || jsonStr != undefined)
        tmp = jsonStr.toString();
    var seconds = tmp.replace(/\/Date\(/, "").replace(/\)\//, "");

    var now = new Date(parseInt(seconds));
    return now.toLocaleString();
};
const fromatYMDHI = function (jsonStr) {
    var tmp = this.FormatJsonDate(jsonStr);
    tmp = tmp.substr(0, 19);

    return tmp;
};
const formatNow2YMD = function() {
    let d = new Date()
    let y = d.getFullYear()
    let m = d.getMonth() + 1
    m = m < 10 ? "0"+m : m
    let dat = d.getDate()
    dat = dat < 10 ? "0"+dat : dat
    return `${y}-${m}-${dat}`
}
export {
    formatJsonDate,
    fromatYMDHI,
    formatNow2YMD
}