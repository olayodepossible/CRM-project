import {ApiUser} from '../model/crmModel.js'

const saveNewContact = async (contact) => {
    const contactData = {
        firstName: contact.firstName,
        lastName: contact.lastName,
        email: contact.email,
        company: contact.company,
        phone: `0${contact.phone.slice(-10)}`,
    }
    let newContact = new ApiUser(contactData);

    const data = await newContact.save();
    console.log(`New contact created successfully ------- `);
    return data;
}

const sendContactList = async () => {
   return await ApiUser.find();
}


const sendContact = async (contactId) => {
    return await ApiUser.findById(contactId)
}


const editContact = async (contactId, contact) => {
    return await ApiUser.findOneAndUpdate({_id: contactId}, contact, {new: true, useFindAndModify: false})
}


const deleteContact = async (contactId, contact) => {
    return await ApiUser.remove({_id: contactId})
}


export {saveNewContact, sendContactList, sendContact, editContact, deleteContact}