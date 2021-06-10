$(document).ready(function () {
    var friends = ["Daze", "Rico", "JC", "Javi", "Yari"];
    var locations = ["rice cooker", "gym mat", "nachos", "backyard", "fruit display", "safe", "flowerpot", "garden", "study", "gazebo"];
    var weapons = ["wand", "bat", "glock", "pen", "scissors", "toothbrush", "rock", "nunchucks", "bottle", "kettlebell", "card", "iPhone", "fart gun", "AK-47", "chopsticks", "butterknife", "uzi", "skates", "sombrero", "machete"];

    for (var i = 1; i <= 100; i++) {
        var $h3 = $("<h3>Accusation " + i + "</h3>");
        $h3.appendTo($("main"));
        $h3.click(getAlert(i));
    }

    function getAlert(i) {
        var friend = friends[i % 5]; //5 = friends.length
        var location = locations[i % 10]; //10 = locations.length
        var weapon = weapons[i % 20]; //20 = weapons.length
        function accuAlert() {
            alert("Accusation " + i + ": I accuse " + friend + ", with the " + weapon + " in the " + location + "!");
            var $ul = $("<ul>Accusation " + i + ": I accuse " + friend + ", with the " + weapon + " in the " + location + "!</ul>");
            $ul.appendTo("body");
        }
        return accuAlert;
    }
});