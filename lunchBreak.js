function lunchBreak(input) {

    let name = input[0];
    let episodeDuration = Number(input[1]);
    let restDuration = Number(input[2]);

    let lunchTime = restDuration / 8;
    let relaxTime = restDuration / 4;

    let freeTime = restDuration - (lunchTime + relaxTime);

    let timeLeft = freeTime - episodeDuration;

    let neededTime = episodeDuration - freeTime;

    if (episodeDuration <= freeTime) {
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(timeLeft)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(neededTime)} more minutes.`);
    }
}

lunchBreak(["Teen Wolf", "48", "60"]);