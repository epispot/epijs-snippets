# `models/` 

Contains pre-built `JSON` model files for all kinds of models, curated by the community and the EpiJS dev team.

## How do I use these?
Simply download the model you want, and use the following code:

```JavaScript
const epijs = require('@epispot/epijs')

let model = epijs.model.mimport('[filename]')
```
You can the use the model's methods and functions by calling `model.method`, where method is the name of the method you want to call.

## How can I contribute one?

If you have your model, then you can use:
```JavaScript
const { Idiom } = require('@epispot/epijs').comp
const { Model, mexport } = require('@epispot/epijs').model

let susceptible = new Idiom("S-(B*S*I/p)");
let infected = new Idiom("I+(B*S*I/p)-(u*I)");
let recovered = new Idiom("R+(u*I)");

let key = {
  "S": 10000,
  "B": 0.3,
  "I": 100,
  "R": 0,
  "p": 10100,
  "u": 0.2
};

let sirm = new Model([[susceptible, "S"], [infected, "I"], [recovered, "R"]], key)

mexport(sirm, "output.json", file_type=".json")
```
You can then upload `output.json` to EpiJS, however, rename the file to the model name, in this case it would be SIR, or SEIR if there was an exposed compartment. If the name already exists, you can just add a 1 or 2 to the end. 
