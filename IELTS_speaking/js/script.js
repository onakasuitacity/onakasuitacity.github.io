"use strict";

// variables
var question_lists;
var cue_cards;

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
  fetch("json/questions.json").then(response => response.json()).then(data => {
    question_lists = data;
    const part1 = document.getElementById("part1");
    for(var i = 0; i < question_lists.length; ++i){
      var option = document.createElement("option");
      option.value = i;
      option.textContent = i ? i : "-- Select part 1 questions --";
      part1.appendChild(option);
    }
  });

  // cue card & question
  fetch("json/cuecards.json").then(response => response.json()).then(data => {
    cue_cards = data;
    const part2_3 = document.getElementById("part2_3");
    for(var i = 0; i < cue_cards.length; ++i){
      var option = document.createElement("option");
      option.value = i;
      option.textContent = i ? i : "-- Select part 2 cue card & part 3 questions --";
      part2_3.appendChild(option);
    }
  });
})();