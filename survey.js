const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :)', (answer) => {
  // TODO: Log the answer in a database
  console.log(`${answer}, That's a great name! `);

  rl.question('What\'s an activity you like doing?', (answer) => {
  // TODO: Log the answer in a database
    console.log(`I like asking people questions, that's a lot different than ${answer} `);
  
    rl.question('What do you listen to while doing that?', (answer) => {
    // TODO: Log the answer in a database
      console.log(`I'm into Rock music but ${answer} is cool too`);

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer) => {
        // TODO: Log the answer in a database
        console.log(`${answer} is an important meal! `);

        rl.question('What\'s your favourite thing to eat for that meal?', (answer) => {
          // TODO: Log the answer in a database
          console.log(`${answer} sounds really yummy! `);

          rl.question('Which sport is your absolute favourite?', (answer) => {
            // TODO: Log the answer in a database
            console.log(`${answer} is surely a great way to have fun. `);

            rl.question('What is your superpower? Or in a few words, tell us what you are amazing at!', (answer) => {
              // TODO: Log the answer in a database
              console.log(`${answer} sounds amazing! I wish i could read minds, yet here we are... `);
              console.log('Thank you for answering my survey!');
              rl.close();
            });
          });
        });
      });
    });
  });
});