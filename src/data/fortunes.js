export const fortunes = [
  "The cosmic litter box reveals... you will find great success, but first you must open three cans of tuna.",
  "My whiskers sense... a nap is in your immediate future. Do not resist this destiny.",
  "The ancient cat spirits whisper... someone will give you belly rubs today, but beware - they may stop too soon.",
  "Your love life looks promising... much like a sunny window spot at 2pm.",
  "Career outlook: Favorable, assuming you remember to feed me first.",
  "The stars align... but have you considered the alignment of my food bowl?",
  "After consulting the ancient feline prophecies... the answer is yes, but only if it involves treats.",
  "The universe speaks through my purr... great things await, after my 4pm nap.",
  "My mystical cat senses detect... you should probably clean my litter box before expecting good fortune.",
  "The cosmic yarn ball has spoken... your future is bright, like the red dot I must catch.",
  "The sacred catnip leaves foretell... prosperity will come to those who provide chin scratches.",
  "I have gazed into the crystal water bowl... your path forward requires more wet food offerings.",
  "The ancient scrolls of cardboard decree... success follows those who understand the importance of 3am zoomies.",
  "My third eye (the one that watches the treat jar) sees... fortune favors the belly rub givers.",
  "The mystical forces of the sunny windowsill reveal... your destiny is intertwined with mine at dinner time.",
  "The oracle of the empty food bowl speaks... abundance comes to those who refill what is empty.",
  "Through the mists of my afternoon stretch, I see... great fortune awaits, but first, observe my magnificent form.",
  "The ancient cat wisdom declares... your problems are temporary, but my need for attention is eternal.",
  "I have consulted the spirits of the cardboard box... they say 'yes,' but also 'fits, so sits.'",
  "The cosmic forces whisper through my purr motor... success is yours, assuming you understand who the real boss is.",
  "My mystical paw has touched the fabric of reality... it needs more soft blankets.",
  "The divine wisdom of the 3am sprint reveals... sometimes you must run toward your destiny at full speed.",
  "I have meditated upon your question while knocking things off tables... clarity comes through strategic chaos.",
  "The ancient feline scrolls speak... your future is bright, but not as bright as my eyes at 4am demanding breakfast.",
  "Through my superior cat senses, I detect... you will find what you seek, preferably in a small, enclosed space."
];

// Keyword detection for contextual responses
export const keywords = {
  love: ['love', 'relationship', 'dating', 'romance', 'partner', 'boyfriend', 'girlfriend', 'husband', 'wife', 'crush', 'heart', 'valentine', 'marriage', 'wedding'],
  career: ['job', 'work', 'career', 'money', 'salary', 'boss', 'interview', 'promotion', 'business', 'success', 'finance', 'income', 'employment', 'professional'],
  health: ['health', 'sick', 'doctor', 'medicine', 'hospital', 'diet', 'exercise', 'wellness', 'tired', 'energy', 'sleep'],
  travel: ['travel', 'trip', 'vacation', 'journey', 'flight', 'abroad', 'visit', 'adventure', 'holiday'],
  family: ['family', 'mom', 'dad', 'mother', 'father', 'parent', 'child', 'kids', 'sister', 'brother', 'relative'],
  education: ['school', 'college', 'study', 'exam', 'test', 'grade', 'university', 'learning', 'student', 'homework'],
  food: ['food', 'eat', 'cooking', 'recipe', 'restaurant', 'dinner', 'lunch', 'breakfast', 'hungry', 'meal', 'kitchen', 'chef', 'cuisine', 'snack', 'dessert'],
  luck: ['luck', 'lucky', 'lottery', 'win', 'winning', 'contest', 'prize', 'jackpot', 'fortune', 'chance', 'gambling', 'bet', 'raffle', 'sweepstakes'],
  pets: ['pet', 'dog', 'cat', 'bird', 'fish', 'hamster', 'rabbit', 'animal', 'vet', 'puppy', 'kitten', 'furry', 'paw', 'tail'],
  home: ['home', 'house', 'apartment', 'room', 'furniture', 'decorating', 'cleaning', 'neighbor', 'roommate', 'moving', 'rent'],
  friendship: ['friend', 'friends', 'buddy', 'pal', 'social', 'party', 'hangout', 'bestie', 'friendship', 'group'],
  creativity: ['art', 'creative', 'paint', 'draw', 'music', 'write', 'craft', 'hobby', 'project', 'inspiration', 'talent'],
  decisions: ['should', 'choose', 'decision', 'decide', 'pick', 'option', 'choice', 'help', 'advice', 'what', 'which']
};

// Fortunes by category
export const fortuneCategories = {
  love: [
    "Your love life looks promising... much like a sunny window spot at 2pm.",
    "The ancient cat spirits whisper... someone will give you belly rubs today, but beware - they may stop too soon.",
    "The sacred catnip leaves foretell... prosperity will come to those who provide chin scratches.",
    "I have consulted the romantic energies of my favorite cardboard box... love finds those who understand the art of the perfect headbutt.",
    "The cosmic forces of attraction speak through my purr... your heart will find its match, preferably someone who gives good ear scratches.",
    "My mystical whiskers detect romance in the air... like the scent of tuna, love cannot be ignored when it calls."
  ],
  career: [
    "Career outlook: Favorable, assuming you remember to feed me first.",
    "The cosmic litter box reveals... you will find great success, but first you must open three cans of tuna.",
    "The oracle of the empty food bowl speaks... abundance comes to those who refill what is empty.",
    "Through my superior hunting instincts, I see... your professional prowess will shine like a laser pointer dot.",
    "The ancient scrolls of important documents decree... success follows those who understand the value of strategic napping between meetings.",
    "My business acumen (gained from observing treat distribution) suggests... prosperity awaits the persistent, much like my 5am breakfast demands."
  ],
  health: [
    "The mystical forces of the sunny windowsill reveal... your vitality will flourish like my energy during 3am zoomies.",
    "I have consulted the healing powers of my purr motor... wellness comes to those who master the art of restorative napping.",
    "The cosmic energies flowing through my whiskers detect... your health journey requires the wisdom of balanced rest and play.",
    "After observing the ancient art of cat stretching... your body will find harmony through mindful movement and adequate relaxation.",
    "My nine lives of experience suggest... true wellness comes from listening to your body's needs, like my urgent 4am snack requirements."
  ],
  travel: [
    "The wandering spirit of my midnight hallway adventures reveals... your journey will be filled with unexpected discoveries.",
    "Through my extensive exploration of cardboard territories... new horizons await those brave enough to venture beyond their comfort zone.",
    "The cosmic winds that rustle my favorite hiding spots whisper... adventure calls to those with curious hearts and prepared snack supplies.",
    "My geographical expertise (gained from mapping every sunny spot in the house) suggests... your travels will bring wisdom and stories worth sharing.",
    "The ancient migration patterns of the red dot have shown me... your path will lead to places that feel like home, but with better views."
  ],
  family: [
    "The sacred bonds of my carefully chosen human family reveal... your loved ones are your greatest treasure, even when they're late with dinner.",
    "Through my understanding of pack dynamics (and treat sharing)... family harmony grows stronger with patience, understanding, and regular snacks.",
    "The wisdom of my territorial knowledge suggests... home is where the heart is, and where someone reliable fills the food bowl.",
    "My observational studies of human family behavior indicate... love multiplies when shared, like the joy of a perfectly warm lap.",
    "The cosmic connections between beings who share space and resources show... family bonds deepen through consistent care and mutual respect."
  ],
  education: [
    "My scholarly expertise in advanced napping techniques reveals... knowledge comes to those who balance study with adequate rest periods.",
    "The ancient wisdom gained from my extensive research into optimal hiding spots suggests... learning happens best in comfortable, quiet environments.",
    "Through my mastery of complex hunting strategies... your educational pursuits will reward persistence and strategic thinking.",
    "My intellectual prowess (demonstrated daily through puzzle-solving for treats) indicates... success in learning comes to those who remain curious and well-fed.",
    "The cosmic forces of mental stimulation whisper... education is a lifelong journey, much like my ongoing investigation into that mysterious red dot."
  ],
  general: [
    "My whiskers sense... a nap is in your immediate future. Do not resist this destiny.",
    "The universe speaks through my purr... great things await, after my 4pm nap.",
    "The stars align... but have you considered the alignment of my food bowl?",
    "After consulting the ancient feline prophecies... the answer is yes, but only if it involves treats.",
    "My mystical cat senses detect... you should probably clean my litter box before expecting good fortune.",
    "The cosmic yarn ball has spoken... your future is bright, like the red dot I must catch."
  ],
  food: [
    "The sacred food bowl wisdom reveals... your culinary adventures will be blessed, especially if they involve opening more cans.",
    "My sophisticated palate suggests... the perfect meal awaits you, though it probably won't be as good as my premium kibble.",
    "The ancient art of meal timing declares... your dining experience will be purr-fect, assuming you eat at proper intervals like my 6am breakfast.",
    "Through my extensive food quality control experience... success in the kitchen comes to those who taste-test frequently and nap between courses.",
    "The cosmic energies of the treat jar whisper... abundance flows to those who understand that the best meals are shared (hint: with cats).",
    "My culinary expertise, gained from years of knocking food off tables, reveals... your next meal will bring unexpected joy and possibly some cleanup."
  ],
  
  luck: [
    "The cosmic lottery of life spins in your favor... like when I successfully catch the red dot (it hasn't happened yet, but I remain optimistic).",
    "My whiskers detect favorable odds... fortune smiles upon you, much like how I smile when the treat bag rustles.",
    "The ancient cat gambling wisdom suggests... luck comes to those who pounce at the right moment, preferably with treats involved.",
    "Through my mastery of probability (demonstrated by my 50/50 success rate at landing on my feet)... the odds are ever in your favor.",
    "The mystical forces of chance align... your lucky break approaches like my 3am zoomies - sudden, powerful, and impossible to ignore.",
    "I have consulted the sacred randomness of where my toys end up... fortune favors the bold, especially those who leave offerings of catnip."
  ],
  
  pets: [
    "My superior animal wisdom reveals... your furry friends bring more joy than a perfectly warm cardboard box.",
    "The ancient pack dynamics speak through my territorial expertise... your pets are plotting something adorable, probably involving treats.",
    "Through my understanding of interspecies communication... your animal companions are trying to tell you something important about dinner time.",
    "The cosmic bond between species whispers... your pets love you almost as much as I love ignoring you when you call my name.",
    "My extensive research into human-animal relationships indicates... your furry family members deserve extra treats and belly rubs today.",
    "The sacred connection between all creatures reveals... your pets are your greatest teachers in the art of unconditional love and strategic napping."
  ],
  
  home: [
    "The feng shui of my favorite hiding spots reveals... your living space will soon reflect your inner harmony, preferably with more cat furniture.",
    "Through my architectural expertise in box fort construction... your home improvements will create the perfect sanctuary for relaxation.",
    "The domestic energies flowing through my territory suggest... your living situation will evolve beautifully, like my collection of claimed cardboard boxes.",
    "My real estate experience (gained from claiming every sunny spot) indicates... home is where you can nap undisturbed and the food bowl never empties.",
    "The ancient wisdom of territorial management declares... your home will become an even more perfect reflection of comfort and style.",
    "Through my understanding of optimal living conditions... your domestic bliss will flourish like catnip in spring sunshine."
  ],
  
  friendship: [
    "The social dynamics of my carefully curated human relationships reveal... your friendships will deepen like my afternoon naps.",
    "Through my expertise in selective socialization... the right companions will find you, much like I choose my favorite humans for maximum cuddle potential.",
    "The cosmic bonds of chosen family whisper... your social circle will bring joy, laughter, and possibly group activities involving laser pointers.",
    "My understanding of pack behavior suggests... true friends are like reliable food servers - consistent, caring, and they always show up on time.",
    "The ancient art of friendship maintenance declares... your social connections will strengthen through shared experiences and mutual treat exchanges.",
    "Through my observations of human bonding rituals... your friendships will flourish like my energy during playtime - abundant and full of joy."
  ],
  
  creativity: [
    "The artistic inspiration flowing through my graceful movements reveals... your creative projects will flourish like my interpretive dance at 3am.",
    "Through my masterful interior design skills (strategic fur placement)... your artistic endeavors will leave a lasting impression on everyone.",
    "The cosmic muse speaks through my aesthetic appreciation of empty boxes... creativity flows to those who see potential in the simplest things.",
    "My artistic vision, refined through years of creating abstract patterns in litter... your creative spark will ignite something truly magnificent.",
    "The ancient wisdom of creative expression whispers... inspiration strikes like my pouncing technique - swift, precise, and utterly captivating.",
    "Through my understanding of performance art (daily licking presentations)... your talents will shine brighter than my eyes reflecting a camera flash."
  ],
  
  decisions: [
    "The decision-making wisdom of my daily choice between seventeen napping spots reveals... trust your instincts, they're probably right.",
    "Through my expertise in life choices (nap now or nap later?)... the path forward will become clear like a clean window on a sunny day.",
    "The cosmic guidance system of my superior judgment suggests... the right choice is often the one that leads to the most comfortable outcome.",
    "My decision-making process, perfected through years of treat selection... follow your heart, but also consider which option provides the best snacks.",
    "The ancient art of choice navigation declares... sometimes the best decision is to take a nap and let the universe sort itself out.",
    "Through my strategic thinking abilities (demonstrated by my complex plans to reach high shelves)... the answer you seek is already within you, probably near the treats."
  ]
};

// Helper functions
export const detectQuestionCategory = (question) => {
  const lowerQuestion = question.toLowerCase();
  
  // Check category for keyword matches
  for (const [category, categoryKeywords] of Object.entries(keywords)) {
    if (categoryKeywords.some(keyword => lowerQuestion.includes(keyword))) {
      return category;
    }
  }
  
  return 'general';
};

// Contextually appropriate fortune
export const getContextualFortune = (question) => {
  const category = detectQuestionCategory(question);
  const categoryFortunes = fortuneCategories[category];
  
  if (!categoryFortunes || categoryFortunes.length === 0) {
    return getRandomFortune();
  }
  
  return categoryFortunes[Math.floor(Math.random() * categoryFortunes.length)];
};

// Original helper functions
export const getRandomFortune = () => {
  return fortunes[Math.floor(Math.random() * fortunes.length)];
};

export const getFortuneByCategory = (category) => {
  const categoryFortunes = fortuneCategories[category];
  if (!categoryFortunes || categoryFortunes.length === 0) {
    return getRandomFortune();
  }
  return categoryFortunes[Math.floor(Math.random() * categoryFortunes.length)];
};