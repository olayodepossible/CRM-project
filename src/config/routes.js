import { addNewContact, getContacts } from "../controller/contactController";

const routeSetup =  (app) => {

    app.get('/', getContacts)
    app.post('/', addNewContact)
}

export default  routeSetup;