const { Comment } = require('../models');

const dummyComments = [
    {
        user_id: 3,
        post_id: 4,
        comment_text: "This is the best blog website!"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "Nice the code actually works?!"
    },
    {
        user_id: 1,
        post_id: 2,
        comment_text: "Thank you!!"
    },
    {
        user_id: 4,
        post_id: 5,
        comment_text: "We reached the threshold! Hold on tight!"
    },
    {
        user_id: 2,
        post_id: 2,
        comment_text: "Fantastic news!!"
    },
    {
        user_id: 5,
        post_id: 5,
        comment_text: "Are you sure that would even work?"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "I'll be using this in the future"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Dude, what does mine say?!"
    }
]

const comment_seeds = () => Comment.bulkCreate(dummyComments);

module.exports = comment_seeds;