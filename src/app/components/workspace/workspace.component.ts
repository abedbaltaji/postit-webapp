import { Component, OnInit} from '@angular/core';
import { Note, Notes } from 'src/app/models/Note';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {

  myNotes:Note[] = Notes.getNotes();
  public inAddMode:boolean;
  public editNoteId:number;

  updateWindowState(event:boolean){
    this.inAddMode=event; // usually the listened value will be false
    this.editNoteId= undefined;

    return event;
  }

  show(){
    this.inAddMode=true;

    return this.inAddMode;
    
  }

  delete_note(id:number): void {
    Notes.deleteNote(id);
    this.myNotes = Notes.getNotes();
  }

  edit_note(id:number) {
    this.editNoteId=id;
    this.inAddMode=true;
  }

  ngOnInit(): void {
    this.myNotes = Notes.getNotes();
    this.inAddMode= false;

  }
}