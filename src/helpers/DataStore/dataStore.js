const dataStore = {
  photosUrls: [
    {
      url: 'https://imgur.com/tjCln69.jpg',
      alt: 'Phoebe looks at a spoon at a cafe'
    }, 
    {
      url: 'https://imgur.com/Xa78e9I.jpg',
      alt: 'Phoebe stares out at the ocean with a film camera around her neck'
    }, 
    {
      url: 'https://imgur.com/ZPaRhnv.jpg', 
      alt: 'Phoebe leans against a blue door'
    }, 
    {
      url: 'https://imgur.com/PZfqIPP.jpg',
      alt: 'Phoebe takes a photo from the top of the Arc du Triomphe'
    }, 
    {
      url: 'https://imgur.com/4SL8xuI.jpg', 
      alt: `Phoebe takes a selfie, mirroring a sculpture that looks like it's taking a selfie`
    }
  ],
  
  projects: [
    // {
    //   name: 'Bootcamp Trivia',
    //   subtitle: 'A Quiz App for Parents of Bootcamp Students',
    //   imageUrl: 'https://imgur.com/3dlqiJC.png',
    //   // imageUrl: 'https://via.placeholder.com/600x400.jpg',
    //   description: 'This quiz app was made with Badri Narayana for our parents to get a better understanding of our bootcamp and have fun while doing so (and show off our new skills to them!). Using jQuery and a store, it provides user feedback after each question and gives a running score. It also has a "results" screen, where users can follow a link to reset the test (without refreshing the page).',
    //   skillsApplied: ['html', 'css', 'javascript', 'jquery'],
    //   liveSiteUrl: "https://thinkful-ei-gecko.github.io/badri-phoebe-day-5",
    //   clientRepoUrl: 'https://github.com/thinkful-ei-gecko/badri-phoebe-day-5'
    // }, 
    // {
    //   name: 'Marble Keeper',
    //   subtitle: 'A Bookmarks App',
    //   imageUrl: 'https://imgur.com/jFZOsn1.png',
    //   // imageUrl: 'https://via.placeholder.com/600x400.jpg',
    //   description: 'This is a simple bookmarks app; it allows users to add bookmarks, a title, a rating, and a description. Users are able to expand and collpase by the details, sort by minimum rating, and delete bookmarks. Using API calls, the results are saved to a server (and refreshed every 24 hours). The theme came from me being a forgetful person; it\'s easy to feel like I\'m always going crazy ("losing my marbles") because of it. A bookmarks app is a memory management tool, so it keeps you from feeling that way ;)',
    //   skillsApplied: ['html', 'css', 'javascript', 'jquery'],
    //   liveSiteUrl: 'https://thinkful-ei-gecko.github.io/phoebe-bookmarks-app',
    //   clientRepoUrl: 'https://github.com/thinkful-ei-gecko/phoebe-bookmarks-app'
    // }, 
    {
      name: 'Anonygram',
      subtitle: 'An Instagram-Style Bulletin Board',
      imageUrl: 'https://i.imgur.com/g9lMcoe.png',
      description: "Anonygram is a social media platform created to encourage community engagement and exploration. By combining the best of platforms like the anonymity of Reddit, image-focused sharing of Instagram, and location-based service of Yelp, users can see and share posts from their local area. As a modern community bulletin-board, it helps the local community engagement with today's digital customers, explorers, artists and activists.",
      skillsApplied: ['HTML', 'CSS3', 'JavaScript', 'React', 'React Router', 'Jest', 'Enzyme', 'Node.js', 'Multer', 'AWS SDK', 'Sharp', 'Google Vision', 'Google Places', 'PostgreSQL', 'Knex', 'Mocha', 'Chai', 'Supertest', 'JSON Web Token', 'bcryptjs'],
      liveSiteUrl: 'https://anonygram.now.sh/',
      clientRepoUrl: 'https://github.com/thinkful-ei-gecko/anonygram-client', 
      serverRepoUrl: 'https://github.com/thinkful-ei-gecko/anonygram-server'
    },
    {
      name: 'Iranta',
      subtitle: 'A Spaced Repetition Learning App for Esperanto',
      imageUrl: 'https://i.imgur.com/ZrkMXuK.png',
      description: "Iranta is a language learning app that focuses on Esperanto words and phrases. Users will expand their Esperanto vocabulary by submitting guesses for words one-by-one in flashcard form. The words are presented in a deterministic order based on how many correct and wrong answers the user has previously submitted for the word. This learning methodology is known as spaced repetition and is scientifically proven to improve memory retention.",
      skillsApplied: ['HTML', 'CSS3', 'JavaScript', 'React', 'React Router', 'Cypress', 'Node.js', 'Express', 'PostgreSQL', 'Knex', 'Postgrator', 'Mocha', 'Chai', 'Supertest', 'JSON Web Token', 'bcryptjs'],
      liveSiteUrl: 'https://iranta.now.sh/',
      clientRepoUrl: 'https://github.com/thinkful-ei-gecko/phoebe-kevin-esperanto-client', 
      serverRepoUrl: 'https://github.com/thinkful-ei-gecko/phoebe-kevin-esperanto-server'
    },
    {
      name: 'Fridg-U-Dare',
      subtitle: 'A Food Inventory App to Reduce Waste',
      imageUrl: 'https://i.imgur.com/4HpBw3Z.png',
      description: "Fridg·u·Dare was born from a desire to 1.) reduce food waste and 2.) save time and money. By keeping an inventory of what's in your fridge, visually aging items by item type, and keeping this as simple as possible, users should be able to accomplish both goals in a feasible way. Follow link for link to live app.",
      skillsApplied: ['HTML', 'CSS3', 'JavaScript', 'React', 'Jest', 'Enzyme', 'Node.js', 'PostgreSQL', 'Knex', 'Postgrator', 'Mocha', 'Chai', 'Supertest'],
      liveSiteUrl: 'https://fridgeudare.now.sh/',
      clientRepoUrl: 'https://github.com/shiningjustice/fridgeudare-client', 
      serverRepoUrl: 'https://github.com/shiningjustice/fridgeudare-server'
    },
  ],
};

export default dataStore;