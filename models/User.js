const { Schema, model, now } = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            require: true,
            trim: true
        },

        email: {
            type: String,
            require: true,
            unique: true,
            match: /.+\@.+\..+/
        },

        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],

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
    }
);

// create a virtual called friendCount that retrieves the length of the user's friends array field on query


// create user model
const User = model('User', UserSchema);

module.exports = User;