var panel = $('#questions');


///////////////////////////////////////////////////////////////////////////////

//CLICK EVENTS

///////////////////////////////////////////////////////////////////////////////


$(document).on('click', '#start', function(e) {
  game.start();
});

$(document).on('click', '#done', function(e) {
  game.done();
});
///////////////////////////////////////////////////////////////////////////////


//Question set


///////////////////////////////////////////////////////////////////////////////

var questions = [{
  question: "1 . In what month is the earth closest to the sun?",
  answers: ["January", "February", "March", "April"],
  correctAnswer: "January"
}, {
  question: "2 . What is the most abundant element in earth's atmosphere?",
  answers: ["Hydrogen", "Nitrogen", "Oxygen", "Carbon Dioxide"],
  correctAnswer: "Nitrogen"
}, {
  question: "3 . By area, what is the smallest ocean in the world?",
  answers: ["Arctic Ocean", "Indian Ocean", "Atlantic Ocean", "Pacific Ocean"],
  correctAnswer: "Arctic Ocean"
}, {
  question: "4 . What is the world's smallest continent?",
  answers: ["Asia", "Africa", "Australia", "Europe"],
  correctAnswer: "Australia"
}, {
  question: "5 . What is the name given to outermost layer of earth?",
  answers: ["Rocks", "Crust", "Core", "Land"],
  correctAnswer: "Crust"
}, {
  question:  "6 . Which gas forms approximately 1% of atmosphere?",
  answers: ["Hydrogen", "Carbon monoxide", "Argon", "Methyl"],
  correctAnswer: "Argon"
}, {
  question: "7 . What is the earth's core made of?",
  answers: ["Dirt", "Rocks", "Gases", "Molten Iron and nickel"],
  correctAnswer: "Molten iron and nickel"
}, {
  question: "8 . Where is the Glacier bay national park?",
  answers: ["Alaska", "Norway", "Iceland", "Canada"],
  correctAnswer: "Alaska"
}];

var game = {
  correct:0,
  incorrect:0,
  counter:150,
  countdown: function(){
    game.counter--;
    $('#counter-number').html(game.counter);

    if (game.counter === 0){
      console.log('TIME UP');
      game.done();
    }
  },
  start: function() {
    timer = setInterval(game.countdown, 1000);

    $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter-number">45</span> Seconds</h2>');
    $('#start').remove();


    for (var i = 0; i < questions.length; i++) {
      panel.append('<h2>' + questions[i].question + '</h2>');
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append('<input type="radio" name="question' + '-' + i + '" value="' + questions[i].answers[j] + '">' + questions[i].answers[j]);
      }
    }

    $("#done").append('<button id="done">Done</button>');
  },
  done: function() {


    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() == questions[0].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-1']:checked"), function() {
        if ($(this).val() == questions[1].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() == questions[2].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() == questions[3].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() == questions[4].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() == questions[5].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() == questions[6].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() == questions[7].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    this.result();
  },
    result: function() {

    clearInterval(timer);

    $('#subwrapper h2').remove();
    panel.html('<h2>All Done!</h2>');
    panel.append('<h3>Correct Answers: ' + this.correct + '</h3>');
    panel.append('<h3>Incorrect Answers: ' + this.incorrect + '</h3>');
    panel.append('<h3>Unanswered: ' + (questions.length - (this.incorrect + this.correct)) + '</h3>');
  }

};