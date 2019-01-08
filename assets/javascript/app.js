$( document ).ready(function() {
var game = {
               
     questions: [
            { 
             question: 'Which is not a country?',
            possibles: ['Canada', 'Israel', 'Africa', 'Morocco'],
                id: 'question-one',
                   answer: 2
            }, 
            
            {
                question: 'Who was the second president of the United States?',
                possibles: ['John Adams', 'James Madison', 'Samual Adams', 'Benjamin Franklin'],
                id: 'question-two',
                answer: 0
            }, 
            
            {
                question: 'How many boroughs is New York split up into?',
                possibles: ['3', '6', '4', '5'],
                id: 'question-three',
                answer: 3
            }, 
            
            {
                question: 'Who painted the Sistine Chapel ceiling?',
                possibles: [' Leonardo Da Vinci', 'Michelangelo', 'Raphael', 'Picasso'],
                id: 'question-four',
                answer: 1
            }, 
            
            {
                question: 'How many planets are in our Solar System?',
                possibles: ['9', '8', '5', '6'],
                id: 'question-five',
                answer: 1
            }, 
            
            {
                question: 'What horoscope sign has a crab??',
                possibles: ['Gemini', 'Scorpio', 'Virgo', 'Cancer'],
                id: 'question-six',
                answer: 3
            }, 
            
            {
                question: 'What is the largest ocean?',
                possibles: ['Pacific', 'Atlantic', 'Indian', 'Artic'],
                id: 'question-seven',
                answer: 0
            }, 
            
            {
                question: 'What is boiling point in Fahrenheit?',
                possibles: ['360', '150', '212', '100'],
                id: 'question-eight',
                answer: 2
            }, 
            
            {
                question: 'Babe Ruth is associated with which sport?',
                possibles: ['Baseball', 'Basketball', 'Football', 'Hockey'],
                id: 'question-nine',
                answer: 0
            }, 
            
            {
                question: 'Which is the tallest mammal?',
                possibles: ['Elephant', 'Whale', 'Ostrich', 'Giraffe'],
                id: 'question-ten',
                answer: 3
            }, 

            {
                question: 'How many strings does a violin have?',
                possibles: ['3', '4', '5', '6'],
                id: 'question-eleven',
                answer: 1
            }, 
            
            {
                question: 'What is the chemical symbol for Hydrogen?',
                possibles: ['H2O', 'HO', 'H', '02'],
                id: 'question-twelve',
                answer: 2
            }
        ]}
    
      var message = 'FIN!';

        $(".startGame").on("click", function (){
            $('.wrapper').show();
            console.log('hello');
    
            $(this).hide();
        });
    
    var number = 30;
        $('#timeLeft').on('click', run);
    
     function decrement(){
            number--;
    
            $('#timeLeft').html('<h2>' + number + " seconds"+'</h2>');
  
            if (number === 0){
        
     stop();
            
            $('#message').html('time up!');
            checkAnswers();
            }
        }
       
        function run(){
            counter = setInterval(decrement, 1000);
        }
        
        function stop(){
  
            clearInterval(counter);
        }
    run();
    
    function formTemplate(data) {
   
        var qString = "<form id='questionOne'>"+ data.question +"<br>";
    
        var possibles = data.possibles;
    
        for (var i = 0; i < possibles.length; i++) {
            var possible = possibles[i];
            console.log(possible);
            qString = qString + "<input type='radio' name='"+data.id+"' value="+ i +">"+possible;
        }

        return qString + "</form>";
    }

    window.formTemplate = formTemplate;
    
    function buildQuestions()
    
    {
        var questionHTML = ''
        for (var i = 0; i<game.questions.length; i++) {
            questionHTML = questionHTML + formTemplate(game.questions[i]);
        }
        $('#questions-container').append(questionHTML);
    
    }
    
    function isCorrect(question){
        var answers = $('[name='+question.id+']');
        var correct = answers.eq(question.answer);
        var isChecked = correct.is(':checked');
        return isChecked;
    }
    
    buildQuestions();
    
    function resultsTemplate(question){
        var htmlBlock = '<div>'
        htmlBlock = htmlBlock + question.question + ': ' + isChecked;
        return htmlBlock + "</div>";
    }
    
    function checkAnswers (){
        var resultsHTML = '';
        var guessedAnswers = [];
        var correct = 0;
        var incorrect = 0;
        var unAnswered =0
  
        for (var i = 0; i<game.questions.length; i++) {
            if (isCorrect(game.questions[i])) {
                correct++;
            } else {

                if (checkAnswered(game.questions[i])) {
                    incorrect++;
                } else {
                    unAnswered++;
                }
            }
        }
        $('.results').html('Correct: '+correct+ "<br>" +'Incorrect: '+incorrect+ "<br>" +'Unanswered: '+unAnswered);
    }
    
function checkAnswered(question){
        var anyAnswered = false;
        var answers = $('[name='+question.id+']');
    
        for (var i = 0; i < answers.length; i++) {
            if (answers[i].checked) {
                anyAnswered = true;
            }
        }

        return anyAnswered;
    }
    
        $('#doneButton').on('click', function() {
        checkAnswers();
        stop();
        $("#messageDiv").html("Submitted!");
        })
});