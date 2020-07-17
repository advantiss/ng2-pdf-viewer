/**
 * Created by vadimdez on 01/11/2016.
 */
import { NgModule, ModuleWithProviders } from '@angular/core';

import { PdfViewerComponent } from './pdf-viewer.component';
import { PDFJSStatic } from 'pdfjs-dist';
import { IFormConfiguration } from './interfaces/form-configuration.type';
import { PDF_CONFIG } from './constants';

declare global {
  const PDFJS: PDFJSStatic;
}

export {
  PDFJSStatic,
  PDFDocumentProxy,
  PDFViewerParams,
  PDFPageProxy,
  PDFSource,
  PDFProgressData,
  PDFPromise
} from 'pdfjs-dist';

@NgModule({
  declarations: [PdfViewerComponent],
  exports: [PdfViewerComponent]
})
export class PdfViewerModule {
  /**
   * `forRoot` enables the passing of a configuration map for specific fil
   */
  static forRoot(configMap: Map<string, IFormConfiguration>): ModuleWithProviders<PdfViewerModule> {
    return {
      ngModule: PdfViewerModule,
      providers: [{provide: PDF_CONFIG, useValue: configMap}],
    };
  }
}
