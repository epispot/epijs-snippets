# `snippets/`

Code snippets for the EpiJS package. 

## What are these?

These snippets are a collection of random code snippets that can help you get things done quicker, which might take a long time.

## How do I use them?

You can simply just download the file and require it in your code:
```JavaScript
const snippet = require('[file]')
```
And run any function it has with:
```JavaScript
snippet.function()
```

## How can I contribute one?

If you find doing a task takes a long time, or perhaps you just created a function for something which doens't exist in the package yet, then add your snippet in this format:

```JavaScript
const epijs = require('@epispot/epijs') // Not required

function snippet (param) {
    // Put your code here
}

exports.snippet = snippet
```

You can upload the file to this folder and submit a PR. Give the file a unique name!
