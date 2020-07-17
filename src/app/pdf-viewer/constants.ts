import { InjectionToken } from '@angular/core';
import { IFormConfiguration } from './interfaces/form-configuration.type';

export enum SUPPORTED_FORM_FIELD_TYPES {
  TEXT = 'Tx',
  CHECK_BOX = 'Cb',
}

export enum SUPPORTED_DATA_TYPES {
  TEXT = 'TEXT',
  BOOLEAN = 'BOOLEAN',
}

export const PDF_CONFIG = new InjectionToken<Map<string, IFormConfiguration>>('pdf.config');
