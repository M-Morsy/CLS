import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AddEditItemComponent } from './components/add-edit-item/add-edit-item.component';
import { ListingComponent } from './components/listing.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ButtonsModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddEditItemComponent,
    ListingComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    ButtonsModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  entryComponents: [
    AddEditItemComponent
  ]
})

export class ListingModule { }
