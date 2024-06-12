# Population-projection-D3-dashboard-beta
---
## Overview
This project is a dashboard that visualises population projection data. The dashboard includes a sidebar with navigation links and a dropdown menu to select different datasets. The visualisation is created using D3.js.

## Current Folder Structure
```
project-folder/
│
├── package-lock.json # npm lock file
├── package.json # npm package file
│
├── D3_dashboard_test/
│ ├── index.html # Main HTML file
│ ├── page1.html # Additional page 1
│ ├── page2.html # Additional page 2
│ ├── README.md # Project README file
│ ├── samples.json # Sample JSON data
│ ├── styles.css # CSS file for styling
│ │
│ ├── .vscode/
│ │ └── settings.json # VS Code settings
│ │
│ ├── data/
│ │ ├── merged_population_long_data.csv # CSV file containing population projection data
│ │ └── samples.json # Additional sample JSON data
│ │
│ ├── Images/
│ │ ├── database_url.png # Sample image
│ │ └── GLA-Logo.png # Logo image used in the sidebar and as favicon
│ │
│ ├── python_scripts/
│ │ └── projection_plotly.ipynb # Jupyter notebook with Plotly script
│ │
│ └── static/
│ └── js/
│ ├── .gitkeep # Keep directory structure in Git
│ ├── app.js # JavaScript for main application logic
│ ├── main.js # JavaScript for initialising and fetching data
│ └── plots.js # JavaScript for plotting functions
```

## Getting Started
Prerequisites
Node.js installed on your machine.
Basic knowledge of HTML, CSS, and JavaScript.
Familiarity with D3.js.
Installation
Clone the repository:
```git clone https://github.com/yourusername/your-repo-name.git```
Running the Project
Ensure you have a local server running. You can use simple servers like ```http-server``` or ```live-server```. Install one of them globally if you haven't: ```npm install -g http-server```

Start the server http-server

Open your browser and navigate to http://127.0.0.1:8080.

## Usage
The sidebar includes navigation links and a dropdown menu for dataset selection. The multi-line graph displays the population projections over the years. Code Structure index.html Contains the basic structure of the dashboard, including the sidebar, dropdown, and main content area for the graph.

## app.js
Handles interactions and functionality related to the application, such as event listeners for the dropdown menu.

## plots.js
Contains the functions for plots which is responsible for rendering the multi-line graph using D3.js.

## main.js
Fetches the CSV data and initialises graphs by calling functions in plots.js.

## Data
The data folder contains the CSV file merged_population_long_data.csv with population projection data. The data is expected to have the following format:
year,projection,value
2001,5yr,160922740.0

## Customisation
CSS: Modify the styles in the <style> tags within index.html to customise the appearance of the dashboard. JavaScript: Modify app.js and plots.js to add or change functionality and data visualisation.

## Contributing
1. Fork the repository.
2. Create a new branch (git checkout -b feature-branch).
3. Make your changes.
4. Commit your changes (git commit -am 'Add new feature').
5. Push to the branch (git push origin feature-branch).
6. Create a new Pull Request. 

  
