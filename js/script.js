"use strict";

// constants
const id_to_topic = {
  1: "Hobbies",
  2: "Movies",
  3: "Animals",
  4: "Travel (Local)",
  5: "Travel (International)",
  6: "Likes and Dislikes",
  7: "Love",
  8: "Friendship",
  9: "Technology",
  10: "Change",
  11: "Dating",
  12: "Dreams",
  13: "Superstitious Beliefs",
  14: "Food",
  15: "Future",
  16: "Habits",
  17: "Jobs",
  18: "Learning English",
  19: "Holidays",
  20: "Luxury",
  21: "Famous People",
  22: "Seasons",
  23: "Fear",
  24: "Experience",
  25: "Retirement",
  26: "Advice",
  27: "Adoption",
  28: "Lifestyle",
  29: "Goals",
  30: "Emotions",
  31: "Discrimination",
  32: "Social Problems",
  33: "Sports",
  34: "Supernatural",
  35: "Celebrity",
  36: "Marriage",
  37: "Transportation",
  38: "Crime and Punishment",
  39: "Clothes and Fashion",
  40: "Culture",
  41: "Prejudices",
  42: "Divorce",
  43: "Education",
  44: "Gender Roles",
  45: "Vacation",
  46: "Family",
  47: "Pets",
  48: "Health",
  49: "Music",
  50: "Reading",
  51: "Television",
  52: "Celebrations",
  53: "Money",
  54: "Stress",
  55: "Computer (Online) Games",
  56: "SNS",
  57: "Economy",
  58: "Cell (Smart) Phones",
  59: "Cartoons",
  60: "Pet Peeves",
  61: "Generation Gap",
  62: "Environment and Pollution",
  63: "Conflict",
  64: "Culture Shock",
  65: "Diets",
  66: "Disaster and Disaster Preparation",
  67: "Manners",
  68: "Meeting People",
  69: "Motivation",
  70: "Parenting",
  71: "Personality",
  72: "Countries",
  73: "Poverty",
  74: "Moving to Another Country",
  75: "Stereotypes",
  76: "Charity & Volunteer Work",
  77: "Happiness",
  78: "Bullfighting",
  79: "Politics",
  80: "Smoking",
  81: "Meaning in Life",
  82: "English Study",
  83: "New Year’s Day",
  84: "Beauty",
  85: "War & World Peace",
  86: "The Art of Conversation",
  87: "Children",
  88: "Cloning",
  89: "Religion",
  90: "Death",
  91: "Business",
  92: "The Unexplained",
  93: "Photography",
  94: "Honesty",
  95: "Sleep",
  96: "World Peace",
  97: "Art",
  98: "Privacy",
  99: "Humor",
  100: "Gifts",
};

const N = Object.keys(id_to_topic).length;

// variables
const checked = new Array(N + 1);
checked.fill(false);

// functions
function randrange(start, stop){
  return Math.floor(Math.random() * (stop - start)) + start;
}

function random_topic(){
  var sum = checked.reduce((a, b) => a + b);
  // exception
  if(sum == N) return 0;
  // generate a random number
  var number = randrange(1, N - sum + 1);
  for(var i = 1; i <= number; ++i) number += checked[i];
  return number;
}

function display(){
  var number = random_topic();
  var topic = document.getElementById("topic");
  var topic_image = document.getElementById("topic_image");
  if(number){
    topic.textContent = `${number}: ${id_to_topic[number]}`;
    topic_image.src = `img/${number}.jpg`;
  }else{
    topic.textContent = "At least one topic must be unchecked.";
    topic_image.removeAttribute("src");
  }
}

// main
(() => {
  // get cookie
  document.cookie.split(';').forEach(cookie => {
    var key = cookie.trim().split('=')[0];
    if(!isNaN(key) && 1 <= +key && +key <= N) checked[key] = true;
  });
  
  // create checkboxes
  var avoidance = document.getElementById("avoidance");

  for(var key in id_to_topic){
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "topics";
    checkbox.value = key;
    checkbox.checked = checked[key];
    checkbox.onchange = e => {
      const checkbox = e.target;
      const key = checkbox.value;
      checked[key] = checkbox.checked;
      document.cookie = checkbox.checked ? `${key}=;` : `${key}=; max-age=0`;
    };
 
    var label = document.createElement("label");
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(`${key}: ${id_to_topic[key]}`));
 
    var br = document.createElement("br");
    
    avoidance.appendChild(label);
    avoidance.appendChild(br);
  }

  // load all images asynchronously
  const load = async src => document.createElement("img").src = src;
  for(var key in id_to_topic) load(`img/${key}.jpg`);
})();