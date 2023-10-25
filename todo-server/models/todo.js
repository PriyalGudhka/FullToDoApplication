/* Imports the mongoose library */
import mongoose from 'mongoose';

var now = new Date(); //Used for fetching the current system date



/* Sets the scehma by defining columns such as title, description, createdDate and lastmodifiedDate */
const schema = new mongoose.Schema({
    title: {
        type: String,
        required: 'The title field is required.'
    },
    description: {
        type: String,
        required: 'The description field is required.' //Used for making the field as mandatory
    },
    dueDate: {
        type: Date
        },
    createdDate: {
        type: Date,
        min: [now, "Created Date cannot be less than today's date"],
        default: () => Date.now() //Sets the default value as the current system date
    },
    lastModifiedDate: {
        type: Date,
        min: [now, "Last Modified Date cannot be less than today's date"],
        default: Date.now()
    },
    status: {
        type: Boolean,
        default: false
    }
}, { versionKey: false })

const model = mongoose.model('todos', schema);

export default model;