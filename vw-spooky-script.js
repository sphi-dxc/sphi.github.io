      // An array of correct answers
      //var correctAnswers = ["We all go a little mad sometimes.", "Whatever you do, don't fall asleep!","Hi, I'm Chucky. Wanna play?"].map(v => v.toLowerCase());

      var correctAnswers = ["We all go a little mad sometimes", "Whatever you do dont fall asleep","Hi Im Chucky Wanna play"].map(v => v.toLowerCase());
      var sampleAnswers = ["I see dead people"].map(w => w.toLowerCase());

      // An array of responses for correct answer
      var correctResponse = ["Congratulations! You figured it out! 🥳", "You were not tricked, give yourself a treat! Great hunting! 👍", "Such a wise person! You solved the puzzles! 👏"];     
       
      // An array of responses for wrong answer
      var wrongResponse = ["You're dead... wrong! Better luck next time! 😜", "Boo hoo, sorry that ain't the answer! 🤡", "That was a bust! Better try again. 🤭","Congratulations! You have to try again! Hahahahaha 🤣", "Game not over, wanna play again? 🤔"];

      var randomResponse = "";

      // A function to check if the input phrase is one of the correct answers
      function checkAnswer() {

        // Get the input element and its value
        var input = document.getElementById("phrase");
        var phrase = removePunctuation(input.value);
  
        // Get the result element
        var result = document.getElementById("result");
  
        // Check if the phrase is in the correct answers array
        // If yes, display a positive message and store the user name in a file

        if (correctAnswers.includes(phrase.toLowerCase())) {         
          // Get a random index from the list
          var randomIndex = Math.floor(Math.random() * correctResponse.length);

          // Get a random word from the array at that index
          var randomResponse = correctResponse[randomIndex];

          // Show results
          result.innerHTML = randomResponse;
          wrong.innerHTML = "";

          // Prompt user to record name in leaderboard
          document.getElementById("inputName").innerHTML = "";
          document.getElementById("inputEmail").innerHTML = "";          
          document.getElementById("form2").style.display = "block";
        }  
        else {
          // If no, display a negative message and clear the input
          if (sampleAnswers.includes(phrase.toLowerCase())) {
            result.innerHTML = "";
            wrong.innerHTML = "Uh-uh 🙅‍♀️. This is the sample quote, so not counted...";
          }
          else{
            // Get a random index from the list
            var randomIndex = Math.floor(Math.random() * wrongResponse.length);
            // Get a random word from the array at that index
            var randomResponse = wrongResponse[randomIndex];

            // Show results
            result.innerHTML = "";
            wrong.innerHTML = randomResponse;

          }
          input.value = "";
        }
      }
  

      function postToGoogle() {
        // Prompt the user for name and email

        var input1 = document.getElementById("phrase");
        var input2 = document.getElementById("inputName");
        var input3 = document.getElementById("inputEmail");

        var varAnswer = input1.value;
        var varName = input2.value;
        var varEmail = input3.value;

        // Post to Google Forms
        $.ajax({
          url: "https://docs.google.com/forms/d/e/1FAIpQLSdb3MX-ITer47EMlcotLT_gPTm0W3HzKgDvKEuUYCXcxxMeAg/formResponse",
          data: {
            "entry.1493496092": varName,
            "entry.2061552368": varEmail,
            "entry.467362799": varAnswer
          },
          type: "POST",
          dataType: "xml",
          statusCode: {
            0: function() {
              //Success message
              alert("Legendary move!");
            },
            200: function() {
              //Success Message
              alert("Legendary move!");
            }
          }
        });

        //Reset page
        document.getElementById("form2").style.display = "none";
        document.getElementById("answerBox").reset();
        document.getElementById("result").innerHTML = "";
        
      }

    
      function removePunctuation(inputText) {
        var punctuation = /['!?.,\/#!$%\^&\*;:{}=\-_`~()]/g;
        var newText = inputText.replace(punctuation, "");
        return newText;
      }

