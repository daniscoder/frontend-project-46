import yaml from 'js-yaml';

export default (data, format) => {
  if (format === 'json') {
    return JSON.parse(data);
  }
  if (format === 'yml' || format === 'yaml') {
    return yaml.load(data);
  }
  throw new Error(`${format} file format is not supported!`);
};
