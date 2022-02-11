function getInt(id) {return parseInt(document.getElementById(id).value);}

function setStats() {

    stats = {};

    // Store basic stats
    stats["gamesPlayed"] = getInt("gamesPlayed");
    stats["currentStreak"] = getInt("currentStreak");
    stats["maxStreak"] = getInt("maxStreak");

    // Store guesses
    guesses = {};
    guesses["1"] = getInt("guesses_1");
    guesses["2"] = getInt("guesses_2");
    guesses["3"] = getInt("guesses_3");
    guesses["4"] = getInt("guesses_4");
    guesses["5"] = getInt("guesses_5");
    guesses["6"] = getInt("guesses_6");
    

    // Calculate additional attributes
    gamesWon = Object.values(guesses).reduce((a, b) => a + b);
    stats["gamesWon"] = gamesWon;

    fail = stats["gamesPlayed"] - gamesWon;
    guesses["fail"] = fail;
    stats["guesses"] = guesses;

    winPercentage = Math.round((gamesWon / stats["gamesPlayed"]) * 100);
    stats["winPercentage"] = winPercentage;

    // Save to local storage
    myStorage = window.localStorage;
    myStorage.setItem("statistics", JSON.stringify(stats));

    // Let user know and go back to game
    alert("Stats saved")
    window.location.href = "not-wordle.htm";

}
