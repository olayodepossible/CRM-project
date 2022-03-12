import { saveNewContact, sendContactList, sendContact, editContact, deleteContact } from "../service/contactService.js";

const addNewContact = async (req, res) => {
    try {
        const data = await saveNewContact(req.body);
        return res.status(200).json({ status: 'success', data});
    } catch (error) {
        console.log(`Error message: ${error}`);
        res.send(error)
    }
}

const getContacts = async (req, res) => {
    try {
        const data = await sendContactList();
        return res.status(200).json({ status: 'success', data});
    } catch (error) {
        console.log(`Error message: ${error}`);
        res.send(error);
    }
}

const getContact = async (req, res) => {
    const { contactId }= req.params;
    try {
        const data = await sendContact(contactId);
        return res.status(200).json(data);
    } catch (error) {
        console.log(`Error message: ${error}`);
        res.send(error);
    }
}

const updateContact = async (req, res) => {
    const { contactId }= req.params;
    const contact = req.body;
    try {
        const data = await editContact(contactId, contact);
        return res.status(200).json(data);
    } catch (error) {
        console.log(`Error message: ${error}`);
        res.send(error);
    }
}

const removeContact = async (req, res) => {
    const { contactId }= req.params;
    try {
        const data = await deleteContact(contactId);
        return res.status(200).json({success: true, message: "contact successfully deleted", data});
    } catch (error) {
        console.log(`Error message: ${error}`);
        res.send(error);
    }
}

export  {addNewContact, getContacts, getContact, updateContact, removeContact}