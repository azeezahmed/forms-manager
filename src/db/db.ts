import Dexie, { type EntityTable } from 'dexie';
import { FormElement } from './model.d';

const db = new Dexie('FormsDatabase') as Dexie & {
    formEntites: EntityTable<FormElement, 'id'>
};

// Schema declaration:
db.version(1).stores({
    formEntites: '++id, name, tagName, placeholder, type' // primary key "id" (for the runtime!)
});

export { db };