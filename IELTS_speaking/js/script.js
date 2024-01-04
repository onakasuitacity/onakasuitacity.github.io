"use strict";

// constants
const introductory_questions = [
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
];

const general_questions = [
  {"title": "", "questions": []},
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
    "Do you wear the same style of clothes on weekdays and weekdays?",
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
]

const cue_cards = [
  {"title2": "", "instruction": "", "contents": [], "title3": "", "questions": []},
  {
    "title2": "Painting",
    "instruction": "Describe a painting",
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
    "instruction": "Describe a photo that makes you feel happy",
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
    "instruction": "Describe a party that you enjoyed",
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
    "instruction": "Describe a park or garden you like",
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
    "instruction": "Describe a science subject you're interested in",
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
    "instruction": "Describe an important rule at school or at work",
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
    "instruction": "Describe someone you haven't seen before but you want to know more about",
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
    "instruction": "Describe something that changed your life in a positive way",
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
    "instruction": "Describe a time you waited for a nice thing",
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
    "instruction": "Describe a time when you received bad service at a restaurant or shop",
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
    "instruction": "Describe a sportsperson you admire",
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
    "instruction": "Describe a time when your computer broke down",
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
    "instruction": "Describe a time when you gave advice to others",
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
    "instruction": "Describe a successful business person you know",
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
    "instruction": "Describe a beautiful city",
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
    "instruction": "Describe a person who has interesting ideas and opinions",
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
    "instruction": "Describe an interesting place in your country that is not visited by many tourists",
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
    "instruction": "Describe an advertisement that you think is useful",
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
    "instruction": "Describe a difficult task that you completed at work or study that you felt proud of",
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
    "instruction": "Describe a foreigner who speaks your native language very well",
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
    "instruction": "Describe an activity that made you feel tired",
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
    "instruction": "Describe a successful person you once studied or worked with",
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
    "instruction": "Describe an exciting activity that you experienced with someone else",
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
    "instruction": "Describe a period in history that interests you",
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

function display_introductory(i){
  const introductory = document.getElementById("introductory");
  remove_all_child(introductory);
  if(!+i) return;

  const target = introductory_questions[i];
  var legend = document.createElement("legend");
  legend.textContent = target["title"];
  introductory.appendChild(legend);

  var ol = document.createElement("ol");
  target["questions"].forEach(str => {
    var li = document.createElement("li");
    li.textContent = str;
    ol.appendChild(li);
  })
  introductory.appendChild(ol);
}

function display_general(i){
  const general = document.getElementById("general");
  remove_all_child(general);
  if(!+i) return;

  const target = general_questions[i];
  var legend = document.createElement("legend");
  legend.textContent = target["title"];
  general.appendChild(legend);

  var ol = document.createElement("ol");
  target["questions"].forEach(str => {
    var li = document.createElement("li");
    li.textContent = str;
    ol.appendChild(li);
  })
  general.appendChild(ol);
}

function display_cue_card(i){
  const cue_card = document.getElementById("cue_card");
  remove_all_child(cue_card);
  const question = document.getElementById("question");
  remove_all_child(question);
  if(!+i) return;

  const target = cue_cards[i];
  // cue card
  var legend = document.createElement("legend");
  legend.textContent = target["title2"];
  cue_card.appendChild(legend);

  var p = document.createElement("p");
  p.textContent = target["instruction"];
  var ol = document.createElement("ol");
  target["contents"].forEach(str => {
    var li = document.createElement("li");
    li.textContent = str;
    ol.appendChild(li);
  })
  p.appendChild(ol);
  cue_card.appendChild(p);

  // question
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
  // introductory
  const part1_1 = document.getElementById("part1_1");
  for(var i = 0; i < introductory_questions.length; ++i){
    var option = document.createElement("option");
    option.value = i;
    option.textContent = i ? i : "-- Select part 1 introductory questions --";
    part1_1.appendChild(option);
  }

  // general
  const part1_2 = document.getElementById("part1_2");
  for(var i = 0; i < general_questions.length; ++i){
    var option = document.createElement("option");
    option.value = i;
    option.textContent = i ? i : "-- Select part 1 general questions --";
    part1_2.appendChild(option);
  }

  // cue card & question
  const part2_3 = document.getElementById("part2_3");
  for(var i = 0; i < cue_cards.length; ++i){
    var option = document.createElement("option");
    option.value = i;
    option.textContent = i ? i : "-- Select part 2 cue card & part 3 topic --";
    part2_3.appendChild(option);
  }
})();