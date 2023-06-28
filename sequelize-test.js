const db = require('./models');

const createJoke = async () => {
  try {
    const newJoke = await db.joke.create({
      text: 'broken product',
    });
    console.log(newJoke);
  } catch (error) {}
};

// createJoke();

const createComment = async () => {
  try {
    const foundJoke = await db.joke.create({
      text: 'new joke',
    });
    const newComment = await db.comment.create({
      text: 'comment',
      jokeId: foundJoke.id,
    });
    // console.log('joke', foundJoke);
    // console.log('comment', newComment);
  } catch (error) {
    console.log(error);
  }
};

createComment();

const getComments = async () => {
  try {
    const foundJoke = await db.joke.findOne({
      where: {
        id: 2,
      },
    });
    const jokeComments = await foundJoke.getComments();
    console.log(jokeComments);
  } catch (error) {
    console.log(error);
  }
};

// getComments();
