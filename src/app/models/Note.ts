export class Note {
    public constructor(
        public id: number,
        public name: string,
        public content: string
      ) {}
}

export class Notes {
  private notes: Note[];

  private static notesSingleton: Notes = new Notes(
    JSON.parse(<string>localStorage.getItem('notes_app/notes'))
  );

  private constructor(notes: Note[]) {
    if (notes == null) {
      this.notes = [];
    } else {
      this.notes = notes.map((item) => {
        return new Note(
            item.id,
            item.name,
            item.content
        );
      });
    }
  }

  public static AddNote = (
    name: string,
    content: string
  ) => {
    Notes.notesSingleton.notes.push(
      new Note(
        Date.now(), // id (milliseconds elapsed since January 1st 1970)
        name,
        content
      )
    );
    localStorage.setItem('notes_app/notes', JSON.stringify(Notes.notesSingleton.notes));
  };

  public static getNotes = () => {
    return Notes.notesSingleton.notes;
  };

  public static deleteNote = (id: Number) => {
    Notes.notesSingleton = new Notes(
      Notes.notesSingleton.notes.filter((note) => {
        return id != note.id;
      })
    );
    localStorage.setItem('notes_app/notes', JSON.stringify(Notes.notesSingleton.notes));
  };
  
  public static getNoteById = (id: Number) => {
    for (var n of Notes.notesSingleton.notes){
        if (n.id === id) {
            return n;
        }
    }
    return null;
  };

  public static updateById = (id: Number, name:string, content:string) => {
    for (var n of Notes.notesSingleton.notes){

        if (n.id === id) {
            n.name= name;
            n.content= content;
            localStorage.setItem('notes_app/notes', JSON.stringify(Notes.notesSingleton.notes));
            break;
        }
    }
  };
  
  public static editNote = (id: Number, name: string, content: string) => {
    Notes.notesSingleton = new Notes(
      Notes.notesSingleton.notes.map((note) => {
        if (note.id === id) {
          note.name = name;
          note.content = content;
        }
        return note;
      })
    );
    localStorage.setItem('notes_app/notes', JSON.stringify(Notes.notesSingleton.notes));
  };
}
