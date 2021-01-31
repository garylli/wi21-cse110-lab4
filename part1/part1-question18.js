let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};
for (let option in statistics) {
    if (option.charAt(0) == 'r' || (statistics[option]%2 == 1)) {
        console.log(statistics[option]);
    }
}
