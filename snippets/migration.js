/** 
 * Saves EpiJS v1 `model` models as a JSON/JS file which are compatible with v2.
 * 
 * NOTE: EpiJS v2.0.0 cannot load and save models from files, however, v2.1+ can.
*/

const fs = require('fs');


/**
 * Saves the model as a JSON/JS file, that can be loaded up in EpiJS v2. 
 * @param model - The model to save.
 * @param {String} output - The file to save the model to.
 * @param {String} file_type - The file type to save the model as. Supported types are `json` and `js`.
 * 
 * @example
 * 
 * saveModel(model, 'file.json');
 */
function saveModel(model, output, file_type='.json') {
    var jsonout = {
		"compartments": {

		},
		"key": model.key
	}
	for (var x in model.compartments) {
		jsonout.compartments[model.compartments[x][1]] = model.compartments[x][0]
	}

	if (file_type === ".json") {
		fs.writeFileSync(output, JSON.stringify(jsonout, null, 2))
	} else if (file_type === ".js") {
		fs.writeFileSync(output, "module.exports = " + JSON.stringify(jsonout, null, 2))
	}
}

exports.saveModel = saveModel
