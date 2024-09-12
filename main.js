// Implement the getPostsByTags function in app.js:

const express = require('express');
const app = express();

const posts = [
  {
    id: '1',
    title: 'First post',
    content: 'This is the first post.',
    tags: ['tag1', 'tag2']
  },
  {
    id: '2',
    title: 'Second post',
    content: 'This is the second post.',
    tags: ['tag2', 'tag3']
  },
  {
    id: '3',
    title: 'Third post',
    content: 'This is the third post.',
    tags: ['tag3', 'tag4']
  }
];

function getPostsByTags(tags) {
  // Implement this function
  if(!tags) return [];

  let tagArray = [];
  if(typeof tags === 'string') {
    tagArray = [tags];
  }else{
    tagArray = tags;
  }

  const filteredPosed = [];

  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    let matchPost = false;
    for (let j = 0; j < posts.tags.length; j++) {
      for (let k = 0; k < tagArray.length; k++) {
        if(post.tags[i] === tagArray[k]) {
          matchPost = true;
          break;
        }
      }
      if(matchPost) break;
    }
    if(matchPost) {
      filteredPosed[filteredPosed.length] = post;
    }
  }
  return filteredPosed;
}

app.get('/posts', (req, res) => {
  const tags = req.query.tags;
  const posts = getPostsByTags(tags);
  res.json(posts);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
