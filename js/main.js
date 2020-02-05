queue()
    .defer(d3.csv, "data/airport_Stats.csv")
    .await(makeGraphs);

function makeGraphs(error, flightData){
    var ndx = crossfilter(flightData);


    show_airports(ndx);


    dc.renderAll();
}

function show_airports(ndx){
   var dim = ndx.dimmension(dc.pluck('reporting_airport'));
    var group = dim.group();

    dc.barChart("#origin-airport")
        .width(350)
        .height(250)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.unit.ordinal)
        .elasticY(true)
        .xAxisLabel("Airport")
        .yAxis().ticks(20);
}