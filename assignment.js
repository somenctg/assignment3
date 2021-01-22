//Kilometer to meter conversion.
function kilometerToMeter(kilometer) {
    var meter = kilometer / 1000;
    return meter;
}
//calculate the total price of watch,phone & laptop
function budgetCalculator(watch,phone,laptop){
    var watchPrice = watch*50;
    var phonePrice = phone*100;
    var laptopPrice = laptop*500;
    var total = watchPrice + phonePrice + laptopPrice;
    return total;
}


// find a longest name from an array.

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


