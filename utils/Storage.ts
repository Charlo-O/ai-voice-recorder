import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Note {
  id: string;
  preview: string;
  text: string;
  createdAt: Date;
}

const NOTES_KEY = 'voice_notes';

export class LocalStorage {
  /**
   * 获取所有笔记
   */
  static async getNotes(): Promise<Note[]> {
    try {
      const notesJson = await AsyncStorage.getItem(NOTES_KEY);
      if (!notesJson) return [];
      
      const notes = JSON.parse(notesJson);
      return notes.map((note: any) => ({
        ...note,
        createdAt: new Date(note.createdAt)
      }));
    } catch (error) {
      console.error('Error getting notes:', error);
      return [];
    }
  }

  /**
   * 保存笔记
   */
  static async saveNote(noteData: Omit<Note, 'id' | 'createdAt'>): Promise<Note> {
    try {
      const notes = await this.getNotes();
      const newNote: Note = {
        id: Date.now().toString(),
        preview: noteData.preview,
        text: noteData.text,
        createdAt: new Date(),
      };

      notes.unshift(newNote);
      await AsyncStorage.setItem(NOTES_KEY, JSON.stringify(notes));
      return newNote;
    } catch (error) {
      console.error('Error saving note:', error);
      throw error;
    }
  }

  /**
   * 更新笔记
   */
  static async updateNote(id: string, noteData: Omit<Note, 'id' | 'createdAt'>): Promise<void> {
    try {
      const notes = await this.getNotes();
      const noteIndex = notes.findIndex(note => note.id === id);
      
      if (noteIndex === -1) {
        throw new Error('Note not found');
      }

      notes[noteIndex] = {
        ...notes[noteIndex],
        preview: noteData.preview,
        text: noteData.text,
      };

      await AsyncStorage.setItem(NOTES_KEY, JSON.stringify(notes));
    } catch (error) {
      console.error('Error updating note:', error);
      throw error;
    }
  }

  /**
   * 删除笔记
   */
  static async deleteNote(id: string): Promise<void> {
    try {
      const notes = await this.getNotes();
      const filteredNotes = notes.filter(note => note.id !== id);
      await AsyncStorage.setItem(NOTES_KEY, JSON.stringify(filteredNotes));
    } catch (error) {
      console.error('Error deleting note:', error);
      throw error;
    }
  }

  /**
   * 清除所有笔记
   */
  static async clearAllNotes(): Promise<void> {
    try {
      await AsyncStorage.removeItem(NOTES_KEY);
    } catch (error) {
      console.error('Error clearing notes:', error);
      throw error;
    }
  }
}