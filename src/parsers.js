import yaml from 'js-yaml';

const parsers = {
  json: JSON.parse,
  yaml: yaml.load,
  yml: yaml.load,
};

export default (data, format) => {
  if (format in parsers) {
    return parsers[format](data);
  }
  throw new Error(`${format} file format is not supported!`);
};
