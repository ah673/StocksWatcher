module.exports = function checkTriggers(realTimeData, watches) {
    var dict = {};
    watches.forEach(function (d) {
        dict[d.symbol] = d;
    });

    var isArray = Array.isArray(realTimeData);
    if(!isArray){
        realTimeData = [realTimeData];
    }

    realTimeData.forEach(function (d) {
        if (d.Ask >= dict[d.symbol].highTarget) {
            console.log(d.symbol, 'greater than high target with a price of ', d.Ask);
        }
        if (d.Ask <= dict[d.symbol].lowTarget) {
            console.log(d.symbol, 'lower than low target with a price of ', d.Ask);
        }
        if (d.Ask <= d.YearRange.split(' ')[0]) {
            console.log(d.symbol, 'lower than 52 week low with a price of', d.Ask);
        }
    });
}


