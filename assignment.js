// https://github.com/somenctg/assignment3

function kilometerToMeter(kilometer) {
    var meter = kilometer / 1000;
    return meter;
}


function budgetCalculator(watch, phone, laptop) {
    var watchCost = watch * 50;
    var phoneCost = phone * 100;
    var laptopCost = laptop * 500;
    var total = watchCost + phoneCost + laptopCost;
    return total;
}

function hotelCost(days) {
    var cost = 0;
    if (days <= 10) {
        cost = 10 * 100;
    }
    else if (days <= 20) {
        var firstPart = 10 * 100;
        var remaining = days - 10;
        var secondPart = remaining * 80;
        cost = firstPart + secondPart;
    }
    else{
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = days - 20;
        var thirdPart = remaining * 50;
        cost = firstPart + secondPart + thirdPart;
    }
    return cost;
}


var friends = ["Rahul", "Ayan", "Subrata", "Sakib", "Saiful"];
var longestName = friends[0];

function megaFriend(friends) {


    for (var i = 0; i < friends.length; i++) {
        var element = friends[i];
        if (element.length > longestName.length) {
            longestName = element;
        }
    }
    return longestName;
}


