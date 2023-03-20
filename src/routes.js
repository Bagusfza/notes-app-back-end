const {
    addNoteHandler,
    getAllNotesHandler,
    getNoteByIdHandler,
    editNoteByIdHandler,
    deleteNoteByIdHandler,
} = require('./handler');

const routes = [
    {
        // method: 'GET' digunakan untuk mendapatkan data dari server
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
    },
    {
        // method: 'GET' path: '/notes' digunakan untuk mendapatkan data dari server 
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler,
    },
    {
        // method: 'GET' path: '/notes/{id}' digunakan untuk mendapatkan data dari server dengan id tertentu
        method: 'GET',
        path: '/notes/{id}',
        handler: getNoteByIdHandler,
    },
    {
        // method: 'PUT' path: '/notes/{id}', digunakan untuk mengubah data dari server dengan id tertentu
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNoteByIdHandler,
    },
    {
        // method: 'DELETE' path: '/notes/{id}', digunakan untuk menghapus data dari server dengan id tertentu
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler,
    },
]

module.exports = routes;