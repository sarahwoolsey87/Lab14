'use strict';

let canvasElem = document.getElementById('chart');

/* TODO:
 * - Instantiate a new AppState
 * - Use a method on that AppState to load vote data from localStorage.
 * - Create a data object for chart.js using your AppState's allProducts array.
 * - Combine the data object with configuration information for chart.js type, colors, etc
 * - Call chart.js with the configuration and the canvasElem
 *
 */

function renderChart() {
  // Instantiate a new AppState
  const appState = new AppState();

  // Use a method on that AppState to load vote data from localStorage.
  appState.loadItems();

  // Create a data object for chart.js using your AppState's allProducts array.
  const chartData = {
    labels: appState.allProducts.map(product => product.name),
    datasets: [
      {
        label: 'Vote Count',
        data: appState.allProducts.map(product => product.timesClicked),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Combine the data object with configuration information for chart.js type, colors, etc
  const chartConfig = {
    type: 'bar',
    data: chartData,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  // Call chart.js with the configuration and the canvasElem
  new Chart(canvasElem, chartConfig);
}

renderChart();
