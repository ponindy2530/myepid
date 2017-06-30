import { CountjsonPipe, TojsonPipe, SplitjsonPipe, CountdataPipe, ParamdataPipe } from './pipe/countjson.pipe';
import { delfilesService } from './service/delfiles.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import {
    DataTableModule,
    SharedModule,
    TooltipModule,
    DialogModule,
    PanelModule,
    DropdownModule,
    SplitButtonModule,
    ButtonModule,
    AutoCompleteModule,
    AccordionModule,
    FieldsetModule,
    FileUploadModule,
    GrowlModule,
    MessagesModule,
    DataScrollerModule,
    GalleriaModule,
    LightboxModule
} from 'primeng/primeng';

// import {
//     MdCardModule,
//     MdButtonModule,
//     MdCheckboxModule,
//     MaterialModule,
//     MdNativeDateModule,
//     MdToolbarModule,
//     MdAutocompleteModule,
//     MdChipsModule
// } from '@angular/material';

import { CookieService } from 'angular2-cookie/services/cookies.service';
// import { ChartModule } from 'angular2-highcharts';
// import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
// import * as highcharts from 'highcharts';
import { PSharedComponent } from './p-shared/p-shared.component';
import { PDataService } from './service/p-data.service';
// import 'hammerjs';


@NgModule({
    imports: [
        CommonModule,
        // MdCardModule,
        // MdButtonModule,
        // MdCheckboxModule,
        // MaterialModule,
        // MdNativeDateModule,
        // ChartModule
    ],
    declarations: [
        PSharedComponent,
        CountjsonPipe,
        TojsonPipe,
        SplitjsonPipe,
        CountdataPipe,
        ParamdataPipe
    ],
    exports: [
        HttpModule,
        FormsModule,
        DataTableModule,
        SharedModule,
        TooltipModule,
        DialogModule,
        PanelModule,
        DropdownModule,
        SplitButtonModule,
        ButtonModule,
        AutoCompleteModule,
        // ChartModule,
        AccordionModule,
        // MdCardModule,
        // MdButtonModule,
        // MdCheckboxModule,
        // MaterialModule,
        // MdNativeDateModule,
        // MdToolbarModule,
        // MdAutocompleteModule,
        // MdChipsModule,
        FieldsetModule,
        FileUploadModule,
        GrowlModule,
        MessagesModule,
        DataScrollerModule,
        GalleriaModule,
        CountjsonPipe,
        TojsonPipe,
        LightboxModule,
        SplitjsonPipe,
        CountdataPipe,
        ParamdataPipe
    ]
})


export class PSharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: PSharedModule,
            providers: [
                CookieService,
                PDataService,
                delfilesService,
                // { provide: HighchartsStatic, useValue: highcharts }
            ]
        };
    }
}