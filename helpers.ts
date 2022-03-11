import ExampleJson from './example.json';
// const ExampleTwo = require('./exampleTwo.json');
export { default as ExampleTwo } from './exampleTwo.json';
export const Assets = [require('./src/assets/back-icon.png')];

export function helper() {
  return ExampleJson;
}
