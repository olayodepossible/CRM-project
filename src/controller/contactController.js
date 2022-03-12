import { saveNewContact, sendContactList } from "../service/contactService";

const addNewContact = async (req, res) => {
    try {
        const data = saveNewContact(req.body);
        return res.json(data);
    } catch (error) {
        console.log(`Error message: ${error}`);
        res.send(error)
    }
}
const getContacts = async (req, res) => {
    try {
        const data = sendContactList();
        return res.json(data);
    } catch (error) {
        console.log(`Error message: ${error}`);
        res.send(error);
    }
}

export default {addNewContact, getContacts}