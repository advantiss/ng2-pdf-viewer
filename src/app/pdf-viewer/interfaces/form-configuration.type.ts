import { FieldConfiguration } from './field-configuration.class';

export interface IFormConfiguration {
  fieldMap: Map<string, FieldConfiguration>;
  // tslint:disable-next-line: ban-types
  scripts?: Function[];
}
