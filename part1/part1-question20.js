setInterval(timebySecond, 1000);
function timebySecond() {
let d = new Date();
let time = d.toLocaleTimeString();
console.log(time);
}
