function plotMultiLineGraphPlotly(data) {
    const years = data.map(d => d.year);
    const projectionNames = ['5yr', '10yr', '15yr'];
    const projections = {};

    projectionNames.forEach(name => {
        projections[name] = data.map(d => +d[name]);
    });

    const traces = projectionNames.map(name => {
        return {
            x: years,
            y: projections[name],
            mode: 'markers+lines',
            name: name
        };
    });

    const shapes = [
        {
            type: 'line',
            x0: 2015,
            y0: 0,
            x1: 2015,
            y1: Math.max(...Object.values(projections).flat()) * 1.05,
            line: {
                color: 'red',
                width: 2,
                dash: 'dash'
            }
        }
    ];

    const layout = {
        title: 'Population Projections',
        xaxis: {
            title: 'Year'
        },
        yaxis: {
            title: 'Population',
            range: [Math.min(...Object.values(projections).flat()) * 0.95, Math.max(...Object.values(projections).flat()) * 1.05]
        },
        shapes: shapes
    };

    Plotly.newPlot('multiLineGraph', traces, layout);
}
