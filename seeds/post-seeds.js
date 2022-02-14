const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post_text: 'Test text for testing',
    user_id: 1
  },
  {
    title: 'The Meaning of Lyfe',
    post_text: 'To understand the meaning of lyfe, one must first organize their sock-drawer',
    user_id: 2
  },
  {
    title: 'Test 3',
    post_text: 'This is another test... the third in fact',
    user_id: 3
  },
  {
    title: 'Test 4',
    post_text: 'Yet another test to make sure this site is running smoothly',
    user_id: 4
  },
  {
    title: 'Test 5',
    post_text: 'Lets add a fifth test with text for good measure', 
    user_id: 5
  },
  {
    title: 'The test numbered 6',
    post_text: 'This is the sixth test blog post. there are many like it, but this one is mine',
    user_id: 6
  },
  {
    title: 'Number Seven',
    post_text: 'The seventh test post. He comes from a long line of test posts. His father was a test post, and his father, and his father before him',
    user_id: 7
  },
  {
    title: 'the test known as number 8',
    post_text: 'This is the text for test number 8',
    user_id: 8
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
