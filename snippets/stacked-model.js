/** 
 * This extention allows you to create a stacked chart from a `pre` module model.
 * 
 * If using this on the web, use `browserify` to convert the file.
*/

const epijs = require('@epispot/epijs')

/** 
 * @param model - The model to be used for the stacked chart, can only be a `com` or `pre` model.
 * @param {HTMLCanvasElement} canvas - The canvas element to be used for the chart.
 * @param {Number} days - The number of days to be used for the chart.
 * @param {Array} colors - The colors to be used for the chart.
 * 
 * @returns {Object} - The chart object, if needed for further modification.
 * @example 
 * 
 * var model = sir(4, 9999, 1, 100, 1/21, 10000, true)
 * 
 * stack(model, document.getElementById('canvas'), 100, ['#ff0000', '#ffa500', '#ffff00', '#00ff00'])
*/
function stack (model, canvas, days, colors=null) {
    let plot = epijs.plots.plot(model, canvas, days, colors, {
        responsive: true,
        title: {display: true, text: 'Total Cases'}, 
        scales: {yAxes: [{ticks: {beginAtZero: true}}], y: {stacked: true, display: true}}
    })
    let newplot = epijs.plots.manipulate(plot, "fill", true)

    return newplot
}

exports.stack = stack