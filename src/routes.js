const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByIdHandler, deleteNoteByIdHandler } = require("./handler");

const routes = [
    {
        method: 'POST',
        path: '/notes',
        //Ini mengacu ke handler.js di bagian addNoteHandler
        handler: addNoteHandler,        
    },
    {
        method: 'GET',
        path: '/notes',
        //Ini mengacu ke handler.js di bagian getAllNotesHandler
        handler: getAllNotesHandler
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNoteByIdHandler
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNoteByIdHandler
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler
    }
];

module.exports = routes;