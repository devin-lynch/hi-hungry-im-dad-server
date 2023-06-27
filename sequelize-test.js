const db = require('./models');

const createJoke = async () => {
  try {
    const newJoke = await db.joke.create({
      text: 'broken product',
    });
    console.log(newJoke);
  } catch (error) {}
};

createJoke();
