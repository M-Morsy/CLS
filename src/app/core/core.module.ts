import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserModule } from '../features/user-management/user.module';
import { ListingModule } from '../features/listing/listing.module';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
    declarations: [
        FooterComponent
    ],
    imports: [
        BrowserModule,
        UserModule,
        ListingModule
    ],
    exports: [FooterComponent],
    providers: []
})

export class CoreModule { }
