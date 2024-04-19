/* eslint-disable */

window.onload = function() {};

function excusa(who, action, what, when) {
  who = ["The dog", "My grandma", "The mailman", "My bird"];
  action = ["ate", "peed", "crushed", "broke"];
  what = ["my homework", "my phone", "the car"];
  when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  var randWho = Math.floor(Math.random() * who.length);
  var randAction = Math.floor(Math.random() * action.length);
  var randWhat = Math.floor(Math.random() * what.length);
  var randWhen = Math.floor(Math.random() * when.length);

  var excusa =
    `${who[randWho]}` +
    " " +
    `${action[randAction]}` +
    " " +
    `${what[randWhat]}` +
    " " +
    `${when[randWhen]}`;
  document.getElementById("excusa").innerHTML = excusa;
  return excusa;
}
window.onload = excusa();
excusa();
