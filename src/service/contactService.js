import {ApiUser} from '../model/crmModel'

const saveNewContact = async (req, res) => {
    let newContact = new ApiUser(req.body);

    const data = await newContact.save();
    console.log('New contact created successfully');
    return data;
}

const sendContactList = async () => {
   return await ApiUser.find();
}


export default {saveNewContact, sendContactList}