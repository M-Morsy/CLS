import { Component, OnInit } from '@angular/core';
import { ListingService } from '../services/listing.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AddEditItemComponent } from './add-edit-item/add-edit-item.component';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  notes: any = [];
  bsModalRef: BsModalRef;

  constructor(
    private listingService: ListingService,
    private modalService: BsModalService,
    private login: LoginService
    ) { 
  }


  ngOnInit() {
    this.getNotes();
  }

  getNotes() {
    this.listingService.getAllNotes()
    .subscribe(res => {
      this.notes = res;
      console.log(res);
    }, 
      err => {
        console.log(err);
      });
  }

  onAddNote() {
    this.bsModalRef = this.modalService.show(AddEditItemComponent);
    this.bsModalRef.content.onClose = (added) => { 
        this.getNotes(); 
    }
  }

  onEditNote(note) {
    const initialState = {id: note.id};
    // const initialState = {listingForm: note};
    this.bsModalRef = this.modalService.show(AddEditItemComponent, {initialState});
    this.bsModalRef.content.onClose = () => { 
        this.getNotes(); 
    }
  }

  onDeleteNote(noteId: number, index) {
    let confirmDelete = confirm('Delete Note?');
    if (confirmDelete) {
      this.listingService.deleteNote(noteId)
      .subscribe(deleted => {
        console.log(deleted);
        // this.notes.splice(index, 1);
        this.getNotes();
      },
      err => {console.log(err);
      });
    } else {
      return 0;
    }
  }

  onLogOut() {
    this.login.logout();
  }

}
