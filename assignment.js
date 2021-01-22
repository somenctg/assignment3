function kilometerToMeter(kilometer) {
    var meter = kilometer / 1000;
    return meter;
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
var result = megaFriend(friends);
console.log(result);

