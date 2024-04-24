window.onload = function () {
  // Arrays con las partes de la excusa
  var who = ["The dog", "My grandma", "The mailman", "My bird"];
  var action = ["ate", "peed", "crushed", "broke"];
  var what = ["my homework", "my phone", "the car"];
  var when = [
    "before the class!",
    "when I was sleeping!",
    "while I was exercising!",
    "during my lunch!",
    "while I was praying!"
  ];

  // Función para generar una excusa aleatoria
  function excusa(who, action, what, when) {
    var randWho = Math.floor(Math.random() * who.length);
    var randAction = Math.floor(Math.random() * action.length);
    var randWhat = Math.floor(Math.random() * what.length);
    var randWhen = Math.floor(Math.random() * when.length);

    var excusa =
      who[randWho] +
      " " +
      action[randAction] +
      " " +
      what[randWhat] +
      " " +
      when[randWhen];
      
    document.getElementById("Excusa").innerHTML = excusa;
    document.getElementsByClassName("btn").innerHTML = excusa;
    
    return excusa;
  }

  excusa(who, action, what, when);
};
