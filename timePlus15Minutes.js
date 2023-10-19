function timePlus15Minutes(input) {

    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let time = hours * 60 + minutes + 15;

    let calculateHours = Math.floor(time / 60);
    let calculateMinutes = time % 60;

    if (calculateHours > 23) {
        calculateHours -= 24;
    }

    if (calculateMinutes < 10) {
        console.log(`${calculateHours}:0${calculateMinutes}`);
    } else {
        console.log(`${calculateHours}:${calculateMinutes}`);
    }

}

timePlus15Minutes(["1", "46"]);