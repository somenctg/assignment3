

function kilometerToMeter(kilometer) {
    var meter = kilometer / 1000;
    return meter;
}


function budgetCalculator(watch,phone,laptop){
    var watchCost = watch * 50;
    var phoneCost = phone * 100;
    var laptopCost = laptop * 500;
    var total = watchCost + phoneCost + laptopCost;
    return total;
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


