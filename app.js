const config = require('./config-filters.json');
const filters = require('./filters');
const { steps } = config;

Object.values(filters).forEach((filter, index) => {
  if (typeof filter !== 'function') {
    throw new Error(`filter ${Object.keys(filters)[index]} is not a function`);
  }
  console.info(`filter '${Object.keys(filters)[index]}' available`);
});

if (!steps && typeof params === 'object') {
  throw new Error(`invalid config file`);
}

for (const [key, value] of Object.entries(steps)) {
  if (!value.filter) {
    throw new Error(`invalid filter attribute at step ${key}`);
  }
  if (!value.params && typeof params === 'array') {
    throw new Error(`invalid params attribute params at step ${key}`);
  }
}

const filter = (key, data = null) => {
  let params = [];
  if (steps[key].hasOwnProperty('params')) {
    params = [...params, ...steps[key].params];
  }
  if (data) {
    params = [...params, data];
  }
  console.log(`Executing filter ${steps[key].filter}`);
  let result = filters[steps[key].filter](...params);
  if (steps[key].next) filter(steps[key].next, result);
};

filter(1);
