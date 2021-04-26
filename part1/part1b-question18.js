function printTime() {
    let d = new Date();
    let time = d.toLocaleDateString();
    console.log(time);
}

window.setInterval(printTime, 1000);