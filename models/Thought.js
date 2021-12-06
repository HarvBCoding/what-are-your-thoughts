const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

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
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal)
    }
},
{
    toJSON: {
        getters: true
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
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal)
    },
    username: {
        type: String,
        required: 'Please add your username!'
    },
    //use the reaction schema to validate data for reaction
    reactions: [
        // reaction schema 
        ReactionSchema
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
ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;