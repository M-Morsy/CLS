import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { DateFormatService } from './services/date-format.service';
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
    declarations: [
        HeaderComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [
        DateFormatService
    ],
    exports: [
        HeaderComponent,
    ]
})

export class SharedModule { }
