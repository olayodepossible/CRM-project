import { addNewContact, getContacts, getContact, updateContact } from "../controller/contactController.js";

const routeSetup =  (app) => {

    app.get('/contact', getContacts)
    app.post('/contact', addNewContact)
    app.get('/contact/:contactId', getContact)
    app.put('/contact/:contactId', updateContact)
    app.delete('/contact/:contactId', updateContact)
    
}

export default routeSetup;
