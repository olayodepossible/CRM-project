/**
 * @author Abayomi.
 */

import mongoose from 'mongoose';


const Schema = mongoose.Schema(
  {
    firsName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
    },
    company: {
      type: String,
    },
    phone: {
      type: Number,
    },
  },
  { timestamps: true }
);

const ApiUser = mongoose.model('Contact', Schema, 'crm_contact');

export { ApiUser, Schema};