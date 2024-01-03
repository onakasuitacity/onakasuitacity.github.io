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
]

const cue_cards = [
  {"title2": "", "instruction": "", "contents": [], "title3": "", "questions": []},
  {
    "title2": "Time you spent with a child",
    "instruction": "Describe an occasion when you spent time with a child.",
    "contents": [
      "who the child was, what you did together",
      "why you did it",
      "when you did it",
      "how you felt"
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
    ]},
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