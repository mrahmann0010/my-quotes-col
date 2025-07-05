// const mongoose = require('mongoose');

// const authorSchema = new mongoose.Schema({
//   authorID: {
//     type: String,
//     required: true,
//     unique: true,
//     minlength: 3,
//     maxlength: 20
//   },
//   fullName: {
//     type: String,
//     required: true,
//     trim:true
//   },
//   nativeName: {
//     type: String,
//     required: true,
//     trim:true
//   },
//   dateBirth: {
//     type: Date,
//     required: true
//   },
//   dateDeath: {
//     type: Date
//   },
//   birthPlace: {
//     type: String
//   },
//   gender: {
//     type: String,
//     enum: ['Male', 'Female', 'Other'],
//     default: 'Other'
//   },
//   photograph: {
//     type: String,
//     default: ""
//   },
//   genres: {
//     type: [String],
//     default: []
//   },
//   notableWorks: {
//     type: [String],
//     default: []
//   },
//   tags: {
//     type: [String],
//     default: []
//   },
//   extSources: {
//     type: [String],
//     default: []
//   },
//   bio: {
//     type: String,
//     maxlength: 1000
//   }
// }, {
//   timestamps: true
// });

// // Create and export the model
// const Authors = mongoose.model('Authors', authorSchema);
// module.exports = Authors;
