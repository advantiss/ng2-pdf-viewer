import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DemoMaterialModule } from './material.module';
import { PdfViewerModule } from './pdf-viewer/pdf-viewer.module';
import { AppComponent } from './app.component';
import { FORM_CONFIGURATION_MAPPING } from './pdf-config/pdf-configuration-mapping.provider';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    NoopAnimationsModule,
    DemoMaterialModule,

    PdfViewerModule.forRoot(FORM_CONFIGURATION_MAPPING)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
