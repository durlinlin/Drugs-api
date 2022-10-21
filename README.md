# Drugs-api
API consists of common disease states, along with corresponding drugs for treatment.

## Installation
In the root directory, run these commands in terminal:
- <mark>npm install</mark>
- <mark>node db:seed</mark>
- <mark>node seed/01-nested-seed.js</mark> (requires to manually exit via CTRL + C)

- <mark>node server.js</mark>


# Routes

## Drugs
| root | routes | response |
|-|-|-|
http://localhost:3000|/drugs|get all drugs|
 .get|/drugs/:id|get drugs by id|
 .get|/drugs/name/:drugName|get drugs by name|
 .post| /drugs/ |create new drug|
 .put|/drugs/:id|update drugs|
 .delete|/drugs/:id|delete drug by id|


## Diseases
 | root | routes | response |
|-|-|-|
http://localhost:3000|/diseaseStates|get all drugs|
 .get|/diseaseStates/:id|get disease by id|
 .get|/diseaseStates/name/:drugName|get disease by name|
 .post| /diseaseStates/ |create new disease|
 .put|/diseaseStates/:id|update disease|
 .delete|/diseaseStates/:id|delete disease by id|
