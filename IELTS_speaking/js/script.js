"use strict";

// constants
const question_lists = [
  {"title": "", "questions": []},
  {"title": "Work and studies", "questions": [
    "Do you work or are you a student?",
    "What work do you do? What subjects are you studying?",
    "Why did you choose that job?",
    "Why did you choose to study that subject?",
    "Do you like your job?",
    "Is there anything you dislike about your job?",
    "What do you like about your studies?",
    "What do you dislike about your studies?",
    "What was your dream job when you were young?",
    "Have you changed your mind on your dream job?"
  ]},
  {"title": "Hometown", "questions": [
    "Please describe your hometown a little.",
    "What is your town well-known for?",
    "Do you like your home town?",
    "Is that a big city or a small place?",
    "How long have you been living there?",
    "Do you think you will continue living there for a long time?",
    "Would you like to live in the countryside in the future?",
    "Have you ever lived in the countryside?",
    "Do you ever spend time in the countryside?",
    "What is the difference between living in the countryside and the city?",
    "What do people living in the countryside like to do?",
    "What do you like to do in the countryside?",
    "How has your town changed over the last 20 years?"
  ]},
  {"title": "Home decoration", "questions": [
    "What colour would you choose to paint the walls of your room?",
    "What colour would you never use in your home?",
    "Can you describe the place where you live?",
    "What kind of housing accommodation do you live in?",
    "What do you like about your flat?",
    "Which room does your family spend most of the time in?",
    "What can you see from the windows where you live?",
    "Do you prefer living in a house or a flat?",
    "What would you like to change in your flat?",
    "What do you dislike about your flat?"
  ]},
  {"title": "Fishing", "questions": [
    "Have you ever been to a place where there are lots of fish around you?",
    "Is fishing popular in your country?",
    "Do you like eating fish?",
    "Have you seen any movies with lots of fish?",
    "Why do people go fishing?"
  ]},
  {"title": "Robots", "questions": [
    "Are robots important?",
    "How can robots affect people's lives?",
    "Are you interested in robots?",
    "Would you like robots to work at your home?",
    "Do you want to take a car in which a robot is a driver?"
  ]},
  {"title": "Geography", "questions": [
    "Have you ever learned Geography?",
    "Do you think Geography is useful?",
    "Do you like Geography?",
    "Do you ever want to travel to a country because of its geographical location?"
  ]},
  {"title": "Gifts", "questions": [
    "How do we choose gifts?",
    "What kind of gifts are popular in your country?",
    "What's the best gift you have ever received?",
    "What do you give others as gifts?",
    "Do you like to give expensive gifts?",
    "How often do you buy gifts for other people?",
    "Why do people give gifts?",
    "Have you ever received a gift which you didn't like?"
  ]},
  {"title": "Running", "questions": [
    "What do you think of running as a form of exercise?",
    "Do you like running?",
    "Where do you run?",
    "Where do you go running?",
    "How often do you run?",
    "Do you go running a lot?"
  ]},
  {"title": "Films", "questions": [
    "Do you like to watch films?",
    "What kinds of movies do you like best?",
    "How often do you go to a cinema to watch a movie?",
    "Did you usually go to the cinema when you were a kid?",
    "What was the first film that you watched?",
    "Do you like to watch movies alone or with your friends?",
    "Do you like to go to the cinema with your friends?",
    "Do you prefer foreign films or films made in your country?"
  ]},
  {"title": "Coffee and tea", "questions": [
    "Are tea and coffee popular in your country?",
    "Do people like tea or coffee nowadays?",
    "Do you prefer to drink tea or coffee?",
    "Do you like tea and coffee?",
    "Do you often drink coffee and tea?"
  ]},
  {"title": "Noise", "questions": [
    "Do you mind noises?",
    "Do any noises bother you?",
    "Do you think there's too much noise in today's world?",
    "What type of noise do you come across in your daily life?",
    "Are there any sounds that you like?"
  ]},
  {"title": "Musical instruments", "questions": [
    "Have you ever learnt to play a musical instrument?",
    "Is music an important subject at school in your country?"
  ]},
  {"title": "Helping others", "questions": [
    "Do you usually help people around you?",
    "How do you help people around you, such as neighbors, family and friends?",
    "Do your parents teach you how to help others?",
    "Did your parents help you a lot when you were young?"
  ]},
  {"title": "Maps", "questions": [
    "When was the first time you used a map?",
    "How often do you use a map?",
    "Did you learn to use a map when you were a child?",
    "Are you good at reading maps?",
    "Do you prefer electronic or paper map?"
  ]},
  {"title": "Chatting", "questions": [
    "What do you like to talk about with your friends?",
    "Have your discussion topics changed since you were a child?"
  ]},
  {"title": "Clothes", "questions": [
    "What kind of clothes do you like to wear?",
    "What kind of clothes do you never wear?",
    "Do you wear the same style of clothes on weekdays and weekends?",
    "What colour clothes do you like to wear?",
    "Do people in your country like to wear bright colour?",
    "What are the differences between men and women's preference in colour?"
  ]},
  {"title": "Transportation", "questions": [
    "What's the most popular means of transportation in your hometown?",
    "How do you go to work or school?",
    "Will you use public transport more in the future?",
    "Are there any traffic problems in your area?",
    "How would you improve transport in your town or area?",
    "How would you reduce traffic problems in your area?",
    "How do you think public transport could be improved?"
  ]},
  {"title": "Colours", "questions": [
    "What colour car would you choose to buy?",
    "What is your favourite colour?",
    "What is the most popular colour in your country?",
    "Do you think colours influence you?",
    "Do you think colours are important?",
    "Were colour important to you when you were a child?",
    "What colour clothes do you like to wear?",
    "Do people in your country like to wear bright colours?",
    "What are the differences between men and women's preference in colour?",
    "What colour would you never use in your home?",
    "What colour would you choose to paint the walls of your room?",
  ]},
  {"title": "Cakes", "questions": [
    "Have you ever made a cake yourself?",
    "Do you like cakes?",
    "Did you like cakes when you were a child?",
    "Do you eat cakes or other sweet things after a meal?",
  ]},
  {"title": "Sunglasses", "questions": [
    "Do you wear sunglasses?",
    "Why do you wear sunglasses?",
    "How often do you buy sunglasses?",
    "Have you ever lost your sunglasses?",
  ]},
  {"title": "Social media", "questions": [
    "Do you like using social media?",
    "Do your friends use social media?",
    "What's the most popular social media in your country?",
    "What kind of people do you like to be friends with on those websites?",
    "What kind of social networking websites do you like to use?",
    "What kind of chatting apps or software do people in your country like to use?",
  ]},
  {"title": "Music", "questions": [
    "What kinds of music do you like to listen to?",
    "What kinds of music are most popular in your country?",
    "Have you ever learnt to play a musical instrument?",
    "Is music an important subject at school in your country?",
    "When did you start listening to that type of music?",
    "Do you often listen to music?",
    "When do you listen to music?",
    "How much time do you spend listening to music every day?",
    "How do you feel when you listen to it?",
    "Do you like listening to songs?",
    "Have you ever been to a musical performance or concert?",
    "Did you often listen to music when you were a child?",
    "Do you like listening to music at work?",
    "Do people prefer to buy CDs or download music online?",
  ]},
  {"title": "Collecting things", "questions": [
    "What items are considered collectibles in your country?",
    "Is collecting a popular pastime in your country?",
    "Do a lot of people in your country collect things?",
    "Why do people like collecting?",
    "What are the benefits of collecting?",
    "Do you collect things?",
  ]},
  {"title": "Crowded places", "questions": [
    "How do you feel when you are in a crowded place?",
    "When was the last time you were in a crowded place?",
    "What places do you think are often crowded?",
    "How often do you go to crowded places?",
    "Do you like crowded places?",
  ]},
  {"title": "Being bored", "questions": [
    "What things are boring to you?",
    "What do you do when you feel bored?",
    "Do you ever get bored?",
    "Do you think school is boring?",
    "Do you feel more bored now than when you were young?",
  ]},
  {"title": "Singing", "questions": [
    "Do you think singing can bring happiness to people?",
    "Do you often sing?",
    "When do you like to sing?",
    "Is it difficult to sing well?",
    "Do you want to be a singer?",
    "What kinds of music do you like to sing?",
  ]},
  {"title": "Advertising", "questions": [
    "How do you feel about advertisements?",
    "Do you like advertisements?",
    "Do you like advertisements on TV?",
    "Is there much advertising in your country?",
    "What are the different places where we see advertisements?",
    "What advertising do you have in your country?",
  ]},
  {"title": "Celebrities", "questions": [
    "Who is your favourite celebrity in your country?",
    "Do you want to be a celebrity (or a pop star)?",
    "Do you read news about celebrities?",
    "Have you ever met celebrities (or pop stars) face to face?",
  ]},
  {"title": "Money", "questions": [
    "How can you save money?",
    "Why do people save money?",
    "Did you save money when you were young?",
  ]},
]

const cue_cards = [
  {"title2": "", "instruction": "", "contents": [], "title3": "", "questions": []},
  {
    "title2": "Painting",
    "instruction": "Describe a painting.",
    "contents": [
      "what it looked like",
      "when you saw it first",
      "how you feel about it",
      "who the painter is"
    ],
    "title3": "Art and design",
    "questions": [
      "What are the differences between painting and drawing?",
      "Why do people keep some paintings for a long time?",
      "Does the design of the building influence people's mood or affect people?",
      "What types of art do people in your country like?",
      "What kinds of art are the most valuable in terms of monetary value?",
      "Why do some paintings have higher value than others?",
      "Would you say art is important?"
    ]
  },
  {
    "title2": "Photo",
    "instruction": "Describe a photo that makes you feel happy.",
    "contents": [
      "where you took it",
      "when you took the photo",
      "why it makes you happy",
    ],
    "title3": "Photography",
    "questions": [
      "Why do people like to share photos on social media?",
      "Is equipment important for taking photos?",
      "Do people take more pictures now compared to the past?",
      "Do you think being a professional photographer is a good job?",
      "Is it easier to take pictures now than in the past?"
    ]
  },
  {
    "title2": "Party",
    "instruction": "Describe a party that you enjoyed.",
    "contents": [
      "what party it was",
      "when it took place",
      "where it was",
      "whose party it was",
      "why you enjoyed the party"
    ],
    "title3": "Parties",
    "questions": [
      "What would you do if you were disturbed by a neighbour's party?",
      "Why do some people dislike parties?",
      "What do adults do at parties?",
      "How do people celebrate their personal events?",
      "What do children do at a birthday party?",
      "Why do people organise family parties in your country?"
    ]
  },
  {
    "title2": "Park or garden",
    "instruction": "Describe a park or garden you like.",
    "contents": [
      "what park it is",
      "where it is",
      "when you go there",
      "why you like it"
    ],
    "title3": "Parks",
    "questions": [
      "Why do some people like planting flowers?",
      "Do young people like to go to parks?",
      "What do old people like to do in parks?",
      "What are the benefits of going to the park for young people and old people?"
    ]
  },
  {
    "title2": "Person who likes cooking for others",
    "instruction": "Describe someone who likes cooking for others",
    "contents": [
      "who this person is",
      "what they like to cook",
      "who they cook for",
      "why she likes cooking"
    ],
    "title3": "Cooking and food",
    "questions": [
      "Should children learn to cook?",
      "What do we need to prepare when we need to cook?",
      "Do you agree that food is an important part of traditional festivals?",
      "More and more people are unwilling to cook. Why is this happening?",
      "Is it important to have a meal together with your family?"
    ]
  },
  {
    "title2": "Science subject",
    "instruction": "Describe a science subject you're interested in.",
    "contents": [
      "what science subject it is",
      "how you got interested in it",
      "how you learn this science",
      "why this science is interesting to you"
    ],
    "title3": "Science",
    "questions": [
      "Should scientists explain the research process to the public?",
      "What science subject is the most important for children to learn?",
      "Why do some children not like learning science at school?",
      "Do you think science is important?",
      "Should children learn science?",
      "Which area of science is the most important in the last one hundred years?",
      "Do you think science can change our society?",
      "Which do you think is more important, science or social studies?"
    ]
  },
  {
    "title2": "Rule",
    "instruction": "Describe an important rule at school or at work.",
    "contents": [
      "what rule it is",
      "why you think it is important",
      "what happens if someone breaks it",
      "how you feel about it"
    ],
    "title3": "Rules",
    "questions": [
      "What are some examples of rules that exist in many families?",
      "What rules should children follow at home?",
      "What are some rules that exist in schools or workplaces in your country?",
      "Why do some people refuse to abide by rules?"
    ]
  },
  {
    "title2": "Person you haven't met before",
    "instruction": "Describe someone you haven't seen before but you want to know more about.",
    "contents": [
      "who this person is",
      "how you know about this person",
      "what you want to know about this person",
      "why you want to know more about this person"
    ],
    "title3": "Relationships, loneliness",
    "questions": [
      "How does society influence a person's personality?",
      "Can you say something about a person's character judging by clothers they wear?",
      "How and where do people in your country make friends these days?",
      "Are there any differences in the relationship between you and your friends and between you and other people?",
      "Do people feel lonely in crowded cities?"
    ]
  },
  {
    "title2": "Positive change in your life",
    "instruction": "Describe something that changed your life in a positive way.",
    "contents": [
      "what the change was and when it happened",
      "how it happened",
      "why it was a positive change",
    ],
    "title3": "Changes",
    "questions": [
      "What factors lead to social change, and what should we do if we want to change society?",
      "How can a person adapt to changes in life?",
      "Why do some people quit and change jobs?",
      "Do you like new things or changes in life?"
    ]
  },
  {
    "title2": "Waiting for a nice thing",
    "instruction": "Describe a time you waited for a nice thing.",
    "contents": [
      "what you were waiting for, how you felt",
      "what you did while waiting",
      "why you waited for it"
    ],
    "title3": "Waiting and patience",
    "questions": [
      "What are the daily experiences that people have to wait for?",
      "On what occasions do people usually need to wait?",
      "Do you think children have more patience than adults?",
      "Why do most children have difficulties waiting for a long time?",
      "Who behaves better when waiting, a child or an adult?",
      "What can you do while waiting in line?",
      "Why do people dislike waiting?",
      "Do people in your country like waiting in line?"
    ]
  },
  {
    "title2": "Bad service",
    "instruction": "Describe a time when you received bad service at a restaurant or shop.",
    "contents": [
      "when and where it was",
      "what was wrong with the service",
      "how you felt about it",
    ],
    "title3": "Service",
    "questions": [
      "How do people respond to bad service?",
      "Why do some people choose to remain silent when they receive bad service?",
      "As a customer, what kind of services do you expect from a company?",
      "What is good service?",
      "What is bad service?",
      "Who should be responsible for bad service?",
      "As a boss, what would you do to prevent bad service?",
      "What should companies do if a product appears to be faulty?",
      "When does good customer service play the most important role?",
      "Do you think robots can sometimes provide better customer service than people?",
      "Do you think that customers' expectations are too high?",
      "Why is it that some companies don't provide good service?",
      "How can a company maintain the quality of the service that it gives to the public?",
      "How can companies improve customer service?",
      "Is service better in large shops or in small shops?"
    ]
  },
  {
    "title2": "Sportsperson you admire",
    "instruction": "Describe a sportsperson you admire.",
    "contents": [
      "who this person is",
      "what this person has achieved",
      "how you know about this person",
      "explain why you like this person"
    ],
    "title3": "Athletes",
    "questions": [
      "Is talent important in sports?",
      "Is it easy to identfy children's talents?",
      "What characteristics do you think an athlete should have?",
      "What kind of sports are popular in your country?",
      "What are the benefits of sports for children?",
      "Do children need to exercise?"
    ]
  },
  {
    "title2": "Problem with the computer",
    "instruction": "Describe a time when your computer broke down.",
    "contents": [
      "what the problem was, what you were doing",
      "when it was",
      "what you did about it",
      "how you felt about it"
    ],
    "title3": "Computers",
    "questions": [
      "Why do people often have problems using new products?",
      "What do people use computer for?",
      "Should students be allowed to use computers at school?",
      "What do you think of people who are addicted to playing computer games?",
      "Should parents limit the amount of time that children spend using computers?"
    ]
  },
  {
    "title2": "Advice you gave",
    "instruction": "Describe a time when you gave advice to others.",
    "contents": [
      "who you gave advice to",
      "what the situation was",
      "what advice you gave",
      "what the result was"
    ],
    "title3": "Advice",
    "questions": [
      "Do you think parents should give advice to their children?",
      "What are the areas in which people are more (or less) willing to accept advice?",
      "What advice do parents usually give to children?",
      "Do you prefer advice from your family or your friends?",
      "Why do so many young people not accept the advice of older people?",
      "Some people find it easier to accept advice than other people do. Why do you think there is this difference?",
      "In general, what kind of person is most suitable for giving advice to others?",
      "Do you think it's ok if professional advice costs a lot?",
      "What problems can people face if they ask many different people for advice?",
      "Which do you think is better, advice from young people or advice from older people?",
      "When somebody gives you some advice, do you usually follow this advice or do you usually insist on your own opinion?"
    ]
  },
  {
    "title2": "Successful business person",
    "instruction": "Describe a successful business person you know.",
    "contents": [
      "who this person is",
      "how you know them",
      "what business this person does",
      "why this person is successful"
    ],
    "title3": "Success in business",
    "questions": [
      "What kinds of family businesses are common in your country?",
      "What do you think of family businesses?",
      "Is it good to work with family members?",
      "Why do people want to do family business?",
      "What does it take to become successful?",
      "Why is it that some people achieve success faster?",
      "What factors lead to success?",
      "Are successful people often lonely?",
      "What do people need to sacrifice for success?"
    ]
  },
  {
    "title2": "Beautiful city",
    "instruction": "Describe a beautiful city.",
    "contents": [
      "what city it is",
      "how you know it",
      "what it is famous for",
      "why you think it is beautiful"
    ],
    "title3": "Cities",
    "questions": [
      "Why are there so many tall buildings in cities?",
      "Why do people like to visit historical places?",
      "What can we do to stop visitors from damaging historical places?",
      "Is it hard to protect historical buildings?",
      "Should old buildings be preserved?",
      "How do people in your country feel about old buildings?",
      "What is interesting about old buildings?",
      "Is having too many tourists a positive thing for historical attractions?"
    ]
  },
  {
    "title2": "Person with interesting ideas",
    "instruction": "Describe a person who has interesting ideas and opinions.",
    "contents": [
      "who this person is",
      "what this person does",
      "how you know this person",
      "why you think his or her ideas are interesting"
    ],
    "title3": "Ideas and opinions",
    "questions": [
      "Who are smart children likely to be influenced by?",
      "When do children begin to have their own ideas and opinions?",
      "Do you think children will always have ideas and opinions similar to those of their parents?",
      "Are children's opinions influenced by their parents?",
      "What encourages people to come up with new ideas or inventions?",
      "How do inventors or philosophers come up with new ideas?",
      "Do you agree that people should spend more time reading about the ideas of famous thinkers of the past?",
      "Whose ideas and opinions are widely respected in your country?"
    ]
  },
  {
    "title2": "Interesting place in your country",
    "instruction": "Describe an interesting place in your country that is not visited by many tourists.",
    "contents": [
      "what place it is",
      "where it is",
      "why it is interesting",
      "how you found out about it"
    ],
    "title3": "Travelling",
    "questions": [
      "How can people access travel information?",
      "How do young and old people react differently to new things?",
      "Is it just youngsters who like to try new things or do people of your parents' age also like to try new things?",
      "Should young people try as many new activities as possible?",
      "Why are some people afraid of trying new things?",
      "Do you think it's better to have new experiences when you are young or when you are older?"
    ]
  },
  {
    "title2": "Useful advertisement",
    "instruction": "Describe an advertisement that you think is useful.",
    "contents": [
      "where you can see it",
      "what it shows",
      "why you think it's useful",
      "how you feel about it"
    ],
    "title3": "Advertising",
    "questions": [
      "Why does buying new thing make people happy?",
      "Which one is more effective, newspaper advertising or online advertising?",
      "What do you think of online advertising?",
      "What are the most advertised products in your country?",
      "How do ads make us buy what we don't need at all?",
      "How do ads make people buy new products?",
      "Do you think advertisements can influence our decisions when shopping?",
      "What role does social media play in advertising?",
      "What are the advantages of advertising?",
      "Do you think the influence of advertising is good?"
    ]
  },
  {
    "title2": "Difficult task",
    "instruction": "Describe a difficult task that you completed at work or study that you felt proud of.",
    "contents": [
      "what the task was",
      "how you completed it",
      "why the task was difficult",
      "why you were proud of the completion of the task"
    ],
    "title3": "Feeling proud, rewards, challenges",
    "questions": [
      "What challenges do young people face today?",
      "What do you think is the key to overcoming difficulties?",
      "How do people overcome challenges?",
      "What rewards can companies offer to outstanding employees?",
      "What rewards do people get at work?",
      "What jobs do you think are difficult to do?",
      "On what occasions would people feel proud of themselves?"
    ]
  },
  {
    "title2": "Foreigner who speaks your native language",
    "instruction": "Describe a foreigner who speaks your native language very well.",
    "contents": [
      "who this person is",
      "where this person is from",
      "how this person learns your native language",
      "why this person can speak your language well",
    ],
    "title3": "Learning languages",
    "questions": [
      "How can we help children learn English?",
      "Do you think the way people learn English today is the same as in the past?",
      "Is it popular to learn English in your country?",
      "Why are so many people learning English?",
      "Do you think English will be the mainstream language of the world in the future?",
      "Can people learn English and not learn other languages?",
      "Why do people learn foreign languages?",
      "Do you think learning a foreign language is important?",
      "Is it more important to learn foreign languages now than before?",
      "Is it easier for young people to learn a language than for older people?",
      "What are the difficulties of leaning a new language?",
      "What difficulties do people face when learning a language?",
      "What can people do to learn a foreign language?",
      "What's the best way to learn a language?"
    ]
  },
  {
    "title2": "Tiring activity",
    "instruction": "Describe an activity that made you feel tired.",
    "contents": [
      "what the activity was",
      "when and where was it",
      "why you took part in it",
      "why it made you feel tired",
    ],
    "title3": "Feeling tired",
    "questions": [
      "Which is more tiring, labor work or studying in the library?",
      "Why do many people nowadays say there aren't enough hours in the day?",
      "Do you think that not having enough time is a feature of our modern life?",
      "Do you think that people today have more leisure time than people in the past?",
      "When do people usually feel tired?",
      "What can make people feel tired?"
    ]
  },
  {
    "title2": "Successful person",
    "instruction": "Describe a successful person you once studied or worked with.",
    "contents": [
      "who this person is",
      "how you know this person",
      "how this person behaves",
      "why you think this person is successful",
    ],
    "title3": "Success",
    "questions": [
      "In general, how do people judge or assess the success of others?",
      "Is money the only measure of success in your country?",
      "Do you believe being successful and making a lot of money are the same thing?",
      "How do people achieve success at school?",
      "What are the factors that influence students' grades at school?"
    ]
  },
  {
    "title2": "Exciting activity you did with someone else",
    "instruction": "Describe an exciting activity that you experienced with someone else.",
    "contents": [
      "what it was",
      "where you did it",
      "who you were with",
      "how you felt about it"
    ],
    "title3": "Adventures, risk, stress",
    "questions": [
      "How do adventurous and exciting activites help people relieve stress?",
      "What skills do people need to take part in adventurous activities?",
      "Why do young people like doing exciting things?"
    ]
  },
  {
    "title2": "History period",
    "instruction": "Describe a period in history that interests you.",
    "contents": [
      "what the period is",
      "how you know about it",
      "why it is interesting"
    ],
    "title3": "History",
    "questions": [
      "Do you agree that learning history may help people understand the present?",
      "Is it true that modern society has much to learn from the past?",
      "What are the differences between learning history from books and from videos?",
      "Why is it that some leaders fail to learn from the past?",
      "How can people learn about history?",
      "How can technology make learning history more interesting?",
      "How do museums teach people history?",
      "Are history museums useful?"
    ]
  },
  {
    "title2": "Talkative person",
    "instruction": "Describe a person you know who likes to talk a lot.",
    "contents": [
      "who this person is",
      "what he or she likes to talk about",
      "how you feel talking to this person",
    ],
    "title3": "Expressing yourself, communication",
    "questions": [
      "What jobs need employees to be talkative?",
      "In what industries do you think communication is a necessary skill?",
      "Should children be encouraged to talk more?",
      "What communication skills does a talkative person have?",
      "What communication skills are important?",
      "Do you agree that communication skills cannot be learnt?",
      "Are you talkative?",
      "Are people in your country talkative?",
    ]
  },
  {
    "title2": "Noise",
    "instruction": "Describe an occasion when someone or something made noise.",
    "contents": [
      "who or what made the noise",
      "what the noise was like",
      "what you did",
      "how you felt about it",
    ],
    "title3": "Noise",
    "questions": [
      "Should children not be allowed to make noise under any circumstances?",
      "What type of noise do you come across in your daily life?",
      "Is it hard to find quiet places in cities?",
      "Where can people hear a lot of noise?",
    ]
  },
  {
    "title2": "Something you do that helps you work or study",
    "instruction": "Describe something you do regularly that helps you work and study better.",
    "contents": [
      "what it is",
      "when you do it",
      "how you feel when you do this",
      "how it helps you",
    ],
    "title3": "Daily routine",
    "questions": [
      "How important is it to have a daily routine?",
      "What are the advantages and disadvantages of routine?",
      "How can people change their daily routine if they want to?",
      "Why do some people not like to make any changes to their routines?",
      "Do you think having a daily routine is boring?",
      "Would you agree that people who have fixed routines are not creative?",
      "Are there people who don't like routine?",
    ]
  },
  {
    "title2": "Useful object",
    "instruction": "Describe a useful object in your home you can't live without.",
    "contents": [
      "what it is",
      "how you use it",
      "how often you use it",
      "how it helps you and why you can't live without it",
    ],
    "title3": "Technology and equipment",
    "questions": [
      "What electrical appliances do people in your country have at home?",
      "What household appliances make us lazy?",
      "What benefits do people get from using electrical appliances?",
      "Has IT made any impact on business?",
      "What are the benefits of using technology in the workplace?",
    ]
  },
  {
    "title2": "Skill",
    "instruction": "Describe a skill that you learned in your childhood.",
    "contents": [
      "what skill you learned",
      "who taught you this skill",
      "how they taught you",
      "why you think it is important",
    ],
    "title3": "Skills",
    "questions": [
      "What's the difference between children learning and adults learning what they have to learn?",
      "What practical skills can young people teach old people?",
      "What skills can younger people learn from older people?",
      "Where can we learn practical skills?",
    ]
  },
  {
    "title2": "Unusual holiday",
    "instruction": "Describe an unusual holiday you had.",
    "contents": [
      "what holiday it was",
      "who you were with",
      "what you did there",
      "why it was unusual",
    ],
    "title3": "Tourism, travelling, holidays",
    "questions": [
      "Why do some people think it is enjoyable to stay at home on holidays?",
      "Why is it difficult for some people to relax?",
      "Why is it that some people don't like holidays?",
      "What leisure activities do old and young people prefer?",
      "How do people spend their leisure time in your country?",
      "Do old people and young people choose different places to go on vacation?",
      "What does tourism have to do with cultural exchange?",
    ]
  },
  {
    "title2": "Helping someone",
    "instruction": "Describe a situation when you helped someone.",
    "contents": [
      "what the situation was",
      "who the person was",
      "how you helped them",
      "how you felt after helping them",
    ],
    "title3": "Helping others",
    "questions": [
      "In your view, should children be taught to help others and to be kind to them?",
      "How can we encourage children to help others?",
      "Who should teach children to help others, parents or teachers?",
      "In what kinds of professions do people help others more?",
    ]
  },
  {
    "title2": "Being busy",
    "instruction": "Describe a period when you were very busy.",
    "contents": [
      "when this time was",
      "what you did at this time",
      "how you arranged your time",
      "how you felt after this busy time was over",
    ],
    "title3": "Time management, feeling tired",
    "questions": [
      "What are the advantages and disadvantages of always being busy?",
      "What are the advantages and disadvantages of having a stressful job?",
    ]
  },
  {
    "title2": "Job",
    "instruction": "Describe a job you would not like to do in the future.",
    "contents": [
      "what it is",
      "whether you think it's easy or difficult",
      "explain why you don't want to do it",
    ],
    "title3": "Jobs and AI",
    "questions": [
      "Which is more important for young people, an interesting or well-paid job?",
      "What kinds of jobs are well-paid in your country?",
      "What jobs do young people like to do?",
      "Do you think that nowadays the only way for people to get personal fulfillment is at work?",
    ]
  },
  {
    "title2": "Place to relax",
    "instruction": "Describe a place where you want to go to relax.",
    "contents": [
      "what the place is",
      "how often you go there",
      "what you do there",
      "why you feel relaxed in this place",
    ],
    "title3": "Rest",
    "questions": [
      "Which is more important, mental relaxation or physical relaxation?",
      "What are some examples of ways that people use to relax?",
      "Do people nowadays have more ways to relax than in the past?",
      "Do you think that people today have more leisure time than people in the past?",
      "What is the difference in the way people spend their free time nowadays and 20 or 30 years ago?",
      "What do people in your country do in their spare time?",
    ]
  },
  {
    "title2": "Uniform",
    "instruction": "Describe a uniform you wear.",
    "contents": [
      "what it is like",
      "when you wear it",
      "who bought it for you",
      "how you feel about it",
    ],
    "title3": "Uniforms and clothes",
    "questions": [
      "Do you think students need to wear school uniforms?",
      "What are the advantages and disadvantages of wearing uniforms?",
      "What kinds of clothes should people wear at work?",
      "Do you think people should wear formal clothes in the workplace?",
    ]
  },
  {
    "title2": "Outdoor activity",
    "instruction": "Describe an outdoor activity you did in a new place.",
    "contents": [
      "what you did, when and where you did it",
      "who you did it with",
      "whether it was difficult or easy",
      "why this activity was new or exciting for you",
    ],
    "title3": "Outdoor activities",
    "questions": [
      "Do people relax when they see nature?",
      "Is the environment important for people to get relaxed?",
    ]
  },
  {
    "title2": "Item that was lost and found",
    "instruction": "Describe a time when you lost something and then got it back.",
    "contents": [
      "what it was",
      "where you lost it",
      "how you found it",
      "how you felt",
    ],
    "title3": "Losing things",
    "questions": [
      "Is it easy to lose something?",
      "Why do some people lose things easily?",
      "Why do some people worry more than others when they lose things?",
      "How can we avoid losing things?",
      "What things do people often lose?",
      "How can parents teach children to be organized?",
      "Is it important for children to be organized?",
      "If you lost a phone, how would you find it?",
    ]
  },
  {
    "title2": "Something you bought from a street market",
    "instruction": "Describe a time you bought something from a street market.",
    "contents": [
      "what street market it was and where it was",
      "when it was",
      "what you bought",
      "how you felt about this shopping experience",
    ],
    "title3": "Shopping",
    "questions": [
      "What are the advantages and disadvantages of shopping at a big shopping centre?",
      "What makes large shopping malls so popular?",
      "Are small shops important?",
      "Is the service the same in big and small shops?",
      "What do small shops usually sell?",
    ]
  },
  {
    "title2": "Doing something in a hurry",
    "instruction": "Describe an occasion when you had to do something in a hurry.",
    "contents": [
      "what it was",
      "when it was",
      "why you had to do it quickly",
      "how you felt about it",
    ],
    "title3": "Being in a hurry",
    "questions": [
      "On what occasions do people have to do things in a hurry?",
      "What kinds of jobs need to be done quickly?",
    ]
  },
  {
    "title2": "Film",
    "instruction": "Describe an impressive movie you watched.",
    "contents": [
      "what the movie is about",
      "where and when you watched it",
      "why it is impressive",
    ],
    "title3": "Films",
    "questions": [
      "Do people in your country still like to go to a cinema?",
      "Where do people watch movies?",
    ]
  },
  {
    "title2": "Goal",
    "instruction": "Describe a long-term goal you would like to achieve.",
    "contents": [
      "what it is",
      "how long you have had it",
      "how you will achieve it",
      "why you set this goal",
    ],
    "title3": "Goals",
    "questions": [
      "Why do people set goals?",
      "Why is it important for teenagers to set goals?",
      "Why should parents encourage children to have ambitions?",
      "Do people usually set different goals at different stages of life?",
      "Is there any difference between children's ambitions and those of grown-ups?",
      "Does everyone set goals for themselves?",
      "Should parents set goals for children?",
      "Should parents interfere with their children's ambitions?",
      "Should parents stop their children when they have unrealistic ambitions?",
      "What kinds of ambitions do people usually have?",
    ]
  },
  {
    "title2": "Travel that was delayed",
    "instruction": "Describe a travel you were looking forward to but was delayed.",
    "contents": [
      "where you planned to travel to",
      "why you were looking forward to it",
      "why it was delayed",
      "how you felt about the experience",
    ],
    "title3": "Transportation, travelling",
    "questions": [
      "What's the most popular means of transportation in your hometown?",
      "How do people travel to work?",
      "What needs to be improved in public transport?",
      "What can the government do to improve transport in your country?",
      "In what ways can we fix traffic problems?",
      "Do you agree that it was more comfortable to travel in the past than it is today?",
      "What kind of problems do people have when travelling?",
      "When travelling on a long journey, what do you think people need to pay attention to?",
    ]
  },
  {
    "title2": "Complaint you heard",
    "instruction": "Describe an occasion when you heard someone complaining about something in a restaurant, store or another business place.",
    "contents": [
      "what the person complained about",
      "when and where it was",
      "what the results were",
      "how you felt about it",
    ],
    "title3": "Complaints",
    "questions": [
      "What do people often complain about?",
      "What products or services do people in your country like to complain about?",
      "Who is more likely to make complaints, older people or younger people?",
      "When are people more likely to make complaints?",
      "Which is the better way of making complaints, by talking or by writing?",
      "Is it necessary for companies to set up customer service?",
      "Are there any disadvantages in setting up customer service?",
      "Do you think customers' complaints will improve products or services?",
    ]
  },
  {
    "title2": "Conversation",
    "instruction": "Describe an interesting conversation with a very old person.",
    "contents": [
      "who that person is",
      "when and where it was",
      "what you talked about",
      "why it was interesting",
    ],
    "title3": "Old people",
    "questions": [
      "What kinds of things can young people learn from old people?",
      "Do you think old people enjoy their life more these days compared with the past?",
      "Do you think old people and young people can share interests?",
      "In your country, do young people like to live with old people?",
      "What kinds of activities do old people like to do these days?",
      "Why do some old people only remember happy things?",
      "Why do young people like to ask about the past of old people?",
    ]
  },
  {
    "title2": "Map",
    "instruction": "Describe an occasion when you used a map that was useful.",
    "contents": [
      "what type of map it was",
      "hoe useful it was",
      "why you used it",
      "how you felt about the experience",
    ],
    "title3": "Getting lost, maps",
    "questions": [
      "How can people find their way when they are lost?",
      "How do people react when they get lost?",
      "Do you think that children should be taught to read paper maps at school?",
      "Why are there some people who never get lost?",
      "Why do some people have a good sense of direction?",
      "What can people do not to get lost?",
      "Do you often get lost?",
    ]
  },
  {
    "title2": "Great team player",
    "instruction": "Describe a time when someone did quite well in a team.",
    "contents": [
      "who this person was",
      "when you worked together",
      "what this person did in a team",
      "why you think this person was a great team member",
    ],
    "title3": "Leadership, teamwork",
    "questions": [
      "What are the qualities of a good leader?",
      "Why do many people want to be leaders?",
      "Why are some people afraid of being a leader?",
      "How do people become leaders?",
      "Can everyone become a leader?",
      "What qualities do you think a good team member should have?",
    ]
  },
  {
    "title2": "Activity you liked in primary school",
    "instruction": "Describe an interesting activity that you enjoyed in your primary school.",
    "contents": [
      "what it was",
      "who you did it with",
      "how often you did it",
      "why you like it",
    ],
    "title3": "Free time activities",
    "questions": [
      "What do you usually do when you hang out with your friends?",
      "Do people in your country like to spend their leisure time out in your country?",
      "Is it important for children to play with their peers?",
      "How do you spend your spare time?",
      "Will the development of science and technology give people more free time?",
    ]
  },
]

// functions
function remove_all_child(element){
  while(element.firstChild) element.removeChild(element.firstChild);
}

function examiner(){
  Array.from(document.getElementsByClassName("both")).forEach(x => x.hidden = false);
  Array.from(document.getElementsByClassName("examiner")).forEach(x => x.hidden = false);
}

function candidate(){
  Array.from(document.getElementsByClassName("both")).forEach(x => x.hidden = false);
  Array.from(document.getElementsByClassName("examiner")).forEach(x => x.hidden = true);
}

function display_questions(){
  const questions = document.getElementById("questions");
  remove_all_child(questions);

  const i = Number(document.getElementById("part1").value);
  if(i == 0) return;

  const p = document.createElement("p");
  p.style.color = "red";
  p.style.fontWeight = "bold";
  p.textContent = "Not necessary to ask all the questions";
  questions.appendChild(p);

  const target = question_lists[i];

  var legend = document.createElement("legend");
  legend.textContent = target["title"];
  questions.appendChild(legend);

  var ol = document.createElement("ol");
  target["questions"].forEach(str => {
    var li = document.createElement("li");
    li.textContent = str;
    ol.appendChild(li);
  })
  questions.appendChild(ol);
}

function display_cue_card(){
  const cue_card = document.getElementById("cue_card");
  remove_all_child(cue_card);
  const question = document.getElementById("question");
  remove_all_child(question);

  const i = Number(document.getElementById("part2_3").value);
  if(i == 0) return;

  const target = cue_cards[i];

  // cue card
  var p = document.createElement("p");
  p.id = "cue_card_instruction";
  p.style.color = "red";
  p.style.fontWeight = "bold";
  p.hidden = document.getElementById("candidate").checked;
  p.className = "examiner";
  p.textContent = "Not necessary to explain the cue card below since it appears on the candidate's screen as well";
  cue_card.appendChild(p);

  var legend = document.createElement("legend");
  legend.textContent = target["title2"] + " (Cue Card)";
  cue_card.appendChild(legend);

  var p = document.createElement("p");
  p.textContent = target["instruction"];
  p.appendChild(document.createElement("br"));

  var zip = document.createElement("zip")
  zip.textContent = "You should say:"
  p.appendChild(zip);

  var ol = document.createElement("ol");
  target["contents"].forEach(str => {
    var li = document.createElement("li");
    li.textContent = str;
    ol.appendChild(li);
  })
  p.appendChild(ol);
  cue_card.appendChild(p);

  // question
  var p = document.createElement("p");
  p.style.color = "red";
  p.style.fontWeight = "bold";
  p.textContent = "Not necessary to ask all the questions";
  question.appendChild(p);

  var legend = document.createElement("legend");
  legend.textContent = target["title3"];
  question.appendChild(legend);

  var ol = document.createElement("ol");
  target["questions"].forEach(str => {
    var li = document.createElement("li");
    li.textContent = str;
    ol.appendChild(li);
  })
  question.appendChild(ol);
}

// main
(() => {
  // question
  const part1 = document.getElementById("part1");
  for(var i = 0; i < question_lists.length; ++i){
    var option = document.createElement("option");
    option.value = i;
    option.textContent = i ? i : "-- Select part 1 questions --";
    part1.appendChild(option);
  }

  // cue card & question
  const part2_3 = document.getElementById("part2_3");
  for(var i = 0; i < cue_cards.length; ++i){
    var option = document.createElement("option");
    option.value = i;
    option.textContent = i ? i : "-- Select part 2 cue card & part 3 questions --";
    part2_3.appendChild(option);
  }
})();