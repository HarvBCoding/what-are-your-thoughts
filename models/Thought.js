const { Schema, model, Types } = require('mongoose');

// Reaction schema
const ReactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: 'Please enter a reaction!',
        maxlength: 280
    },
    username: {
        type: String,
        required: 'Please enter your username!'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Thought Schema
const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: 'Please enter a thought!',
        minLength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    username: {
        type: String,
        required: 'Please add your username!'
    },
    //use the reaction schema to validate data for reaction
    reactions: [
        // reaction schema 
    ]
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
});

// virtual to get the reaction count of a given thought

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;