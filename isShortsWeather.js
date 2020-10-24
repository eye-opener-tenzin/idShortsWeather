// DEFINE YOUR FUNCTION BELOW:
function isShortsWeather(tem) {
    if(tem >= 75) {
        return true;
    }else {
        return false;
    }
}
console.log(isShortsWeather(80));
console.log(isShortsWeather(48));
console.log(isShortsWeather(75));