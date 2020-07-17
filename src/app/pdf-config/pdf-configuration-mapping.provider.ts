
import { DOCUMENT_ACROFORM_FIELD_MAP as FW4_MAP } from './fw4/fw4-2020-field-mapping.config';
import { IFormConfiguration } from '../pdf-viewer/interfaces/form-configuration.type';

/**
 * A map of all supported forms with a mapping to a field mapping configuration file.
 * Map<string - filename, IFormConfiguration> (key of map is a pdf filename)
 */
export const FORM_CONFIGURATION_MAPPING = new Map<string, IFormConfiguration>([['fw4.pdf', { fieldMap: FW4_MAP }]]);
