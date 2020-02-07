import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { ListingService } from '../../services/listing.service';
import { ListingRequest } from '../../models/listing-request.model';

@Component({
  selector: 'app-add-edit-item',
  templateUrl: './add-edit-item.component.html',
  styleUrls: ['./add-edit-item.component.css']
})
export class AddEditItemComponent implements OnInit {

  listingForm: ListingRequest = {
    id: 0,
    title: '',
    desc: ''
  }

  id: number;

  onClose: any;

  constructor(
    public bsModalRef: BsModalRef,
    private listingService: ListingService
  ) { }

  ngOnInit() {
    if (this.id) {
      this.getSelectedNote();
    }
    // console.log(this.listingForm);
  }

  getSelectedNote() {
    this.listingService.getNote(this.id).subscribe(note => {
      console.log(note);
      this.listingForm = note
    });
  }

  onAddItem() {
    console.log(this.listingForm);
    this.listingService.addNote(this.listingForm).subscribe(added => {
      console.log(added);
      this.onClose(added);
      this.bsModalRef.hide();
    });
  }

  onEditItem() {
    console.log(this.listingForm);
    this.listingService.editNote(this.listingForm).subscribe(updated => {
      console.log(updated);
      this.onClose(updated);
      this.bsModalRef.hide();
    })
  }



}
