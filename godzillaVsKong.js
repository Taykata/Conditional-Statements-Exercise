function godzillaVsKong(input) {

    let budget = Number(input[0]);
    let people = Number(input[1]);
    let pricePerPerson = Number(input[2]);

    let decorPrice = budget * 0.10;
    let totalPeoplePrice = people * pricePerPerson;

    if (people > 150) {
        totalPeoplePrice *= 0.90;
    }

    let totalMoney = decorPrice + totalPeoplePrice;

    if (budget >= totalMoney) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - totalMoney).toFixed(2)} leva left.`);
    } else {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(totalMoney - budget).toFixed(2)} leva more.`);
    }

}

godzillaVsKong(["20000", "120", "55.5"])