import { Component, SimpleChanges, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note, Notes } from 'src/app/models/Note';

@Component({
  selector: 'app-postit-window',
  templateUrl: './postit-window.component.html',
  styleUrls: ['./postit-window.component.css']
})
export class PostitWindowComponent implements OnInit {

  @Output() postitWindowState = new EventEmitter();

  @Input() noteToEdit!:number;
  
  newNoteName:string= "";
  newNoteContent:string= "";
  tempNote:Note;

  hide(){ // on click cancel

    this.postitWindowState.emit(false);
    this.newNoteName="";
    this.newNoteContent="";
    
  }

  add_note(){ // on click add
    if (this.newNoteName &&  this.newNoteContent){
      
      if (this.noteToEdit === undefined){
      Notes.AddNote(
      this.newNoteName,
      this.newNoteContent
    );
    }
    else {
      Notes.updateById(
        this.noteToEdit,
        this.newNoteName,
        this.newNoteContent
      );
    }
    this.newNoteName="";
    this.newNoteContent="";
    

    this.postitWindowState.emit(false);

    }
    
  }

  fetchNoteToEdit() {
    this.tempNote=  Notes.getNoteById(this.noteToEdit);
    this.newNoteName=this.tempNote.name;
    this.newNoteContent=this.tempNote.content;
  }

  ngOnChanges(changes: SimpleChanges): void {
   
    for (const propName in changes) {
      const chng = changes[propName];
      if (chng.currentValue !== undefined){
        this.fetchNoteToEdit();
      }
    }
  }

  ngOnInit(): void {
    
  }
}
