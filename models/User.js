const { Schema, model } = require('mongoose');

// User schema
const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: 'Please enter a username!',
        trim: true
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: 'Please enter an email!',
        validate: {
            validator: function(email) {
                return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email);
            },
            message: 'Please enter a valid email!'
        }
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    // not sure if this is correct for self-reference?
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
},
{
    toJSON: {
        virtuals: true
    },
    id: false
});

// virtual for friend count
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

// create the user model using UserSchema
const User = model('User', UserSchema);

module.exports = User;