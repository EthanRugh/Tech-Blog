const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Nunc rhoncus dui vel sem.',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'Test comment number 2',
    user_id: 1,
    post_id: 2
  },
  {
    comment_text: 'Hey, great post, bro',
    user_id: 2,
    post_id: 3
  },
  {
    comment_text: 'This post is totes muh-gotes',
    user_id: 3,
    post_id: 4
  },
  {
    comment_text: 'Such post. Much doge',
    user_id: 4,
    post_id: 5
  },
  {
    comment_text: 'Jolly good show wot',
    user_id: 5,
    post_id: 6
  },
  {
    comment_text: 'Jolly good post I say! Jolly good indeed',
    user_id: 6,
    post_id: 7
  },
  {
    comment_text: 'I heart this post so hard. Dope post 10/10 would like again',
    user_id: 7,
    post_id: 8
  },
  {
    comment_text: 'This post straight bussin no cap',
    user_id: 1,
    post_id: 8
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
