fetch('data/merged_population_long_data.csv')
  .then(response => response.text())
  .then(csvData => {
    // Parse the CSV data using D3
    const data = d3.csvParse(csvData);

    // Log the parsed data (for debugging purposes)
    console.log('Parsed Data:', data);

    // Convert 'value' from string to number and 'year' to number if necessary
    const cleanedData = data.map(d => ({
      year: +d.year, // Convert 'year' to number using +
      projection: d.projection,
      value: parseFloat(d.value)  // Convert 'value' to number
    })).filter(d => !isNaN(d.value) && !isNaN(d.year));  // Filter out NaN values for 'value' and 'year'

    // Log the cleaned data (for debugging purposes)
    console.log('Cleaned Data:', cleanedData);

    // Check if there are any NaN values in cleanedData
    if (cleanedData.some(d => isNaN(d.value) || isNaN(d.year))) {
      console.log('Cleaned data contains NaN values.');
    } else {
      console.log('Cleaned data does not contain NaN values.');
    }

    // Display the data in a table (assuming you have a function for this)
    displayDataAsTable(cleanedData);

    // Plot the graph using Plotly
    plotMultiLineGraphPlotly(cleanedData);
  })
  .catch(error => {
    console.error('Error fetching or parsing data:', error);
  });


// Function to display data in a table
function displayDataAsTable(data) {
  // Select the element where you want to append the table
  const tableContainer = document.getElementById('table-container');

  // Clear any existing content in the table container
  tableContainer.innerHTML = '';

  // Create a table element
  const table = document.createElement('table');

  // Create table headers (assuming first object in data has headers)
  const headers = Object.keys(data[0]);
  const headerRow = document.createElement('tr');
  headers.forEach(headerText => {
    const th = document.createElement('th');
    th.textContent = headerText;
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);

  // Create rows for each data entry
  data.forEach(item => {
    const row = document.createElement('tr');
    headers.forEach(headerText => {
      const td = document.createElement('td');
      td.textContent = item[headerText];
      row.appendChild(td);
    });
    table.appendChild(row);
  });

  // Append the table to the container
  tableContainer.appendChild(table);
}

// Function to plot the graph using Plotly
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
