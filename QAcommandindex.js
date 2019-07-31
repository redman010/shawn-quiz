
const STORE = [
  {
    question: '1) Which of the following is correct about features of JavaScript?,
    answers: [
      'A) JavaScript is a lightweight, interpreted programming language.', 
      'B) JavaScript is designed for creating network-centric applications.',
      'C) JavaScript is complementary to and integrated with Java.',
      'D) All of the above',
      ],
    correctAnswer: 'D) All of the above',
    icon: 'https://i.imgur.com/G3IuGiC.jpg',
    alt: 'ant lifting a branch saying you can do this'
  },
  {
    question: '2) Which built-in method returns the character at the specified index?',
    answers: [
     ' A) characterAt()',
      'B) getCharAt()',
      'C) charAt()',
      'D) None of the above.'
      ],
      correctAnswer: 'C) charAt()',
      icon: 'https://live.staticflickr.com/3335/3293759838_12a7907fb1_m.jpg',
      alt: 'odler man setting a computer with rooting growing from his feet'
  },
  {
    question: 'Which built-in method returns the string representation of the number's value?',
    answers: [
      'A) None of the above.',
      'B) toString()',
      'C) toNumber()',
      'D) toValue()',
      ],
    correctAnswer: 'C) toNumber()',
    icon: 'https://i.imgur.com/FEZWyKl.jpg',
    alt: 'duck tumbs up'
   },
   {
      question: '4) what name should not be used for an AI program?',
      answers: [
          'A) undefine',
          'B) humen',
          'C) sky net',
          'D) pet'
      ],
      correctAnswer: 'C) sky net',
      icon: 'https://i.imgur.com/G3IuGiC.jpg',
      alt: 'ant lifting a branch saying you can do this'
    },
  {
    question: '5) Which of the following function of Boolean object returns a string of either 'true' or 'false' depending upon the value of the object?',
    answers: [
      'A) toSource()',
      'B) valueOf()',
      'C) toString()',
      'D) None of the above.',
      ],
    correctAnswer: 'C) toString()',
    icon: 'https://i.imgur.com/G3IuGiC.jpg',
    alt: 'ant lifting a branch saying you can do this'
  },
  {
    question: '6)Which of the following function of String object is used to match a regular expression against a string?',
    answers: [      
      'A) concat()',       
      'B) match()',
      'C) search()',
      'D) replace()'
      ],
    correctAnswer: 'B) match()',
    icon: 'https://live.staticflickr.com/1827/41674312120_36cb6dc371_n.jpg',
    alt: 'kids climing steps'
  },
  {
    question: '7) You are a Server Administrator at a small company. Company policy dictates that all remote connections must be encrypted and accessed using some form of authentication. Which of the following will allow a user to upload a large file from home, while adhering to company policy?',
    answers: [
          'A) SSH',
          'B) SMTP',
          'C) SFTP',
          'D) FTP'
    ],
    correctAnswer: 'C) SFTP',
    icon: 'https://i.imgur.com/VM8Y3MM.gif',
    alt: 'matrix animation 1'
  },
  {
    question: '8) A network analyst received a number of reports that impersonation was taking place on the network. Session tokens were deployed to mitigate this issue and defend against which of the following attacks?',
    answers: [
      'A) DDos',
      'B) Phishing',
      'C) Replay',
      'D) Smurf'        
    ],
    correctAnswer: 'C) Replay',
    icon: 'https://live.staticflickr.com/3618/3567877748_f3d35539e8_n.jpg',
    alt: 'a person flexing'
  },
  {
    question: '9) Which of the following is the MOST secure protocol to transfer files?',
    answers: [
      'A) FTP',
      'B) TELNET',
      'C) FTPS',
      'D) SSH'
    ],
    correctAnswer: 'C) FTPS',
    icon: 'https://live.staticflickr.com/65535/46947115935_6ae799066a_n.jpg',
    alt: 'dominos lined up topping over to the last one'
  },
  {
    question: '10) Which of the following should Bill, a security administrator, perform before a hard drive is analyzed with forensics tools?',
    answers: [
      'A) Disconnect system from network',
      'B) Interview witnesses',
      'C) Capture system image',
      'D) Identify user habits'
  ],
  correctAnswer: 'C) Capture system image',

  icon: 'https://live.staticflickr.com/8346/8206431705_ebb7e9f2f5_n.jpg',
  alt: 'street sign saying end 44'
  },
];
const otherSTORE = [
  {
    question: '1 How many 8 -bit character does the ASCII standard define',
    answers: [
      'A. 64',
      'B. 256',
      'C. 512',
      'D. 64,000',
      ],
    correctAnswer: 'B. 256',
    icon: 'https://i.imgur.com/G3IuGiC.jpg',
    alt: 'ant lifting a branch saying you can do this'
  },
  {
    question: '2 Which of the following wireless communication standards requires line of sight in order to operate?',
    answers: [
      'A. Bluetooth',
      'B. IR',
      'C. RF',
      'D. WIFI'
      ],
      correctAnswer: 'B. IR',
      icon: 'https:////live.staticflickr.com/3837/14595013521_b81d3b148f_n.jpg',
      alt: 'nothing worth having come easy'
  },
  {
    question: '3 Tom, an individual, has recently been calling various financial offices pretending to be another person to gain financial information. Which of the following attacks is being described?',
    answers: [
      'A. Pharming',
      'B. Vishing',
      'C. Tailgating',
      'D. Phishing'
      ],
      correctAnswer: 'B. Vishing', 
      icon: 'https://i.imgur.com/FEZWyKl.jpg',
      alt: 'duck tumbs up'
  },
  {
    question: '4 Rebecca, a security analyst, is trying to prove to management what costs they could incur if their customer database was breached. This database contains 250 records with PII. Studies show that the cost per record for a breach is $350. The likelihood that their database would be breached in the next year is only 8%. Which of the following is the ALE that Rebecca should report to management for a security breach?',
    answers: [
     ' A. $7,500',
      'B. $7,000',
      'C. $75,000',
      'D. $27,000'
      ],
    correctAnswer: 'B. $7,000',
    icon: 'https://i.imgur.com/G3IuGiC.jpg',
    alt: 'ant lifting a branch saying you can do this'
  },
  {
    question: '5 Which of the following function of Array object applies a function simultaneously against two values of the array (from left-to-right) as to reduce it to a single value?',
    answers: [
      'A. pop()',
      'B. push()',
      'C. reduce()',
      'D. reduceRight()'
      ],
    correctAnswer: 'B. sndconfig',
    icon: 'https://i.imgur.com/G3IuGiC.jpg',
    alt: 'ant lifting a branch saying you can do this'
  },
  {
    question: '6 How many primary partitions can you have on a hard disk?',
    answers: [
      'A. 8',
      'B. 4',
      'C. 16',
      'D. 32'
      ],
    correctAnswer: 'B. 4',
    icon: 'https:////live.staticflickr.com/4244/34846757232_8eb23269d5_n.jpg',
    alt: 'cartoon of coder saying structure of code'
  },
  {
    question: '7 On the command-line which key allows you to view the last command entered?',
    answers: [
      'A. down arrow',
      'B. up arrow',
      'C. right arrow',
      'D. left arrow'
    ],
    correctAnswer: 'B. up arrow',
    icon: 'https://live.staticflickr.com/7567/15468649553_a105279e38_n.jpg',
    alt: 'matrix in view of sun glasses'
  },
  {
    question: '8 which of the following is the smartest',
    answers: [
      'A. The average college student majoring as a developer',
      'B. The smartest computer',
      'C. The person who made a supercomputers',
      'D. The teacher'
    ],
    correctAnswer: 'B. The smartest computer',
    icon: 'https://live.staticflickr.com/3618/3567877748_f3d35539e8_n.jpg',
    alt: 'a person flexing'
  },
  {
    question: '9 The Operating System is a ?',
    answers: [
    'A. Application Software',
    'B. System Software',
    'C. Utility Software',
    'D. Malware'

    ],
    correctAnswer: 'B. System Software',
    icon: 'https://live.staticflickr.com/65535/46947115935_6ae799066a_n.jpg',
    alt: 'dominos lined up topping over to the last one'  
  },
  {
      question: ' 10 An attacker attempted to compromise a web form by inserting the following input into the username field: admin)(|(password=*)) Which of the following types of attacks was attempted?',
      answers: [
   'A. Command injection',
   'B. LDAP injection',
   'C. SQL injection',
   'D. XSS'
    ],
    correctAnswer: 'B. LDAP injection',
    icon: 'https://live.staticflickr.com/8346/8206431705_ebb7e9f2f5_n.jpg',
    alt: 'street sign saying end 22'
    }
  ];

let myquestNumber = 0;
var myScore = 0;
var totally = 0;
function newMakeQuestion () {
    console.log("other 00");  
return newMakeQuestion (otherSTORE)
}
function newMakeQuestion () {
    console.log("other 1 newMakeQuestion");
  if (myquestNumber < otherSTORE.length) {
    console.log(myquestNumber);
    return `<div class="question-${myquestNumber}">
    <h2>${otherSTORE[myquestNumber].question}</h2>
    <form>
    <fieldset>
    <label class="answerOption">
    <input type="radio" value="${otherSTORE[myquestNumber].answers[0]}" name="answer" required>
    <span>${otherSTORE[myquestNumber].answers[0]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${otherSTORE[myquestNumber].answers[1]}" name="answer" required>
    <span>${otherSTORE[myquestNumber].answers[1]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${otherSTORE[myquestNumber].answers[2]}" name="answer" required>
    <span>${otherSTORE[myquestNumber].answers[2]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${otherSTORE[myquestNumber].answers[3]}" name="answer" required>
    <span>${otherSTORE[myquestNumber].answers[3]}</span>
    </label>
    <button type="submit" class="submitButton">Next</button>
    </fieldset>
    </form>
    </div>`;

} else {
    console.log("other 212 newMakeQuestion");
    console.log(myquestNumber);
    renderOtherResults();
    myrestartQuz();
    $('.myquestNumber').text(10)
    console.log(myquestNumber);
  }
}


//increment question number
function changemyquestNumber () {
    console.log("other question 122", myquestNumber);
  //if (myquestNumber < otherSTORE.length) {
    myquestNumber++;
  //}
  console.log("other question 2232", myquestNumber);
  $('.myquestNumber').text(myquestNumber+1);
  console.log("other question 2313", myquestNumber);
}

//tmk increment myscore issue
function changemyScore() {
    console.log("other 425");
    myScore++;
    //tmk added
    console.log(myquestNumber);
    $('.myScore').text(myScore+1);
}
//start quiz
//on startQuizButton click hide start div
//unhide quiz form div
function newstartQuiz () {
    console.log("other 545");
    console.log(myquestNumber);
    $('.newstartQuiz').on('click', '.otherstartButton', function (event) {
    $('.newstartQuiz').remove();
    $('.quizStart').remove();
    $('.questionAnswerForm').css('display', 'block');
    $('.myquestNumber').text(1);
    console.log("other question 54522", myquestNumber);
});
}

// render question in DOM
function myrenderQuestion () {
    console.log("other 61221");
    console.log(myquestNumber);
  $('.questionAnswerForm').html(newMakeQuestion());
}

//user selects answer on submit run user feedback
function newuserSelectAnswer () {
    console.log("other 7112");
    console.log(myquestNumber);
  $('form').on('submit', function (event) {
    event.preventDefault();
    let selected = $('input:checked');
    let answer = selected.val();
    let correctAnswer = `${otherSTORE[myquestNumber].correctAnswer}`;
    console.log("other question 51112", myquestNumber);
    if (answer === correctAnswer) {
        console.log("other 7A");
      selected.parent().addClass('correct');
      correctAnswerPicked();
    } else if(answer != correctAnswer){
         console.log("other 7B");
      selected.parent().addClass('wrong');
      WrongAnswer();
    }else{
      console.log("more issues with other 7");
      console.log(myquestNumber);
    }
  });
}

function correctAnswerPicked(){
     console.log("other 8111");
     console.log(myquestNumber);
    userAnswerFeedbackCorrect();
    updatemyScore();
}

function WrongAnswer () {
     console.log("other 9");
     console.log(myquestNumber);
  userWrongReply();
}

//user feedback for correct answer
function userAnswerFeedbackCorrect () {
 console.log("other 1000");
 console.log(myquestNumber);
 console.log(myquestNumber);
let correctAnswer = `${otherSTORE[myquestNumber].correctAnswer}`;
console.log("other question 6", myquestNumber);
  $('.questionAnswerForm').html(`<div class="correctFeedback"><div class="icon"><img src="${otherSTORE[myquestNumber].icon}" alt="${otherSTORE[myquestNumber].alt}"/></div><p><b>You got it right! it is</b><span>"${correctAnswer}"</span></p><button type=button class="nextButton">Next</button></div>`);
}

//user feedback for wrong answer
function userWrongReply () {
   console.log("other 11");
   console.log(myquestNumber);
  let correctAnswer = `${otherSTORE[myquestNumber].correctAnswer}`;
  console.log("other question 711121", myquestNumber);
  // let iconImage = `${otherSTORE[myquestNumber].icon}`;
  $('.questionAnswerForm').html(`<div class="wrongFeedback"><div class="icon"><img src="${otherSTORE[myquestNumber].icon}" alt="${otherSTORE[myquestNumber].alt}"/></div><p><b>You got it wrong</b><br>the correct answer is <span>"${correctAnswer}"</span></p><button type=button class="nextButton">Next</button></div>`);
}

//update score text
function updatemyScore() {
    console.log("other 12000");
    console.log(myquestNumber);
  changemyScore();
  $('.myScore').text(myScore);
}

//when quiz is over this is the html for the page
function renderOtherResults () {
    console.log(myScore);
    console.log(scoreA);
    console.log(myquestNumber);
    console.log("other 13rrt4");
    if (myScore === 10 && scoreA >= 7) {
      console.log("other 13A", scoreA);
      showCaseofTotal();
      $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>Perfect</h3><img src="https://live.staticflickr.com/6039/6363770939_3e77684745_n.jpg" alt="big green smile"/><p> WOW!! You are great ${myScore}/10 for the first and  ${scoreA}/10 for the second</p><p>maybe you should become a programer</p><button class="restartButton">exit to main</button></div>`);
    } else if (myScore === 10) {
        console.log("other 13A", scoreA);
        $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>Perfect</h3><img src="https://i.imgur.com/jDYqhnb.gif" alt="big green smile"/><p>perfect on this one ${myScore} / 10</p><p>You're ready for something advanced!</p><button class="restartButton">Restart Quiz</button></div>`);
      } else if (myScore >= 7 && myScore < 10) {
        console.log("other 13B", scoreA);
        $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>Doing good</h3><img src="https://live.staticflickr.com/8245/8510728959_66154d2f76_n.jpg" alt="happy face"/><p>You got ${myScore} / 10</p><p>your getting there but I would still reseach!</p><button class="restartButton">Restart Quiz</button></div>`);
      }else if (myScore < 7 && myScore >= 5) {
        console.log("other 13C", scoreA);
        $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>about half way there lets lets try this again!</h3><img src=" https://live.staticflickr.com/3272/2397892819_186678223c_n.jpg " alt="ant holding a stick "/><p>You got ${myScore} / 10</p><p>getting a low score at first is part of learing just try again!</p><button class="restartButton">Restart Quiz</button></div>`);
      } else {
        console.log("other 13D");
        $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>You might want to get a school to teach you</h3><img src="https://i.imgur.com/yBdx3hg.jpg" alt="sad face"/><p>You got ${myScore} / 10</p><p>With more more time and effort you will get better keep at it</p><button class="restartButton">Restart Quiz</button></div>`);
      }
    }
//what happens when the user clicks next
function newrenderNextQuestion () {
  $('main').on('click', '.nextButton', function (event) {
    console.log("other 142223");
    console.log(myquestNumber);
    changemyquestNumber();
    myrenderQuestion();
    newuserSelectAnswer();
  });
}
//restart quiz function - reloads page to start quiz over
function myrestartQuz () {
    console.log("other 0012");  
    console.log(myquestNumber);
  $('main').on('click', '.restartButton', function (event) {
    console.log("other 15");
    location.reload();
  });
}
function callingyouNow(){
    console.log("other 16sds");
    console.log(myquestNumber);
    totalScores();
    var buttoicked;
    $(".otherstartButton").click(function(){
    if( buttoicked != true && scoreA != 0) {
      console.log(myquestNumber);
    //  NextmadeQuiz ()
        console.log("other 16A");
        console.log(myquestNumber);
        buttoicked= true;
        NextmadeQuiz();
    }else if( buttoicked != true ) {
      console.log(myquestNumber);
    //  NextmadeQuiz ()
        console.log("other 16A");
        console.log(myquestNumber);
        buttoicked= true;
        otherNextmadeQuiz();
    }else{   
        console.log("other 16B");
        console.log(" man something else again");
    }
    })
    }
    // this shows only grand total scores
    function totalScores(){
      console.log("i ran");
      $(".hide").hide();
      $(".show").hide();
      $(".AllquestionNumber").hide();
      $(".questionNumber").hide();
      $(".totally").show();
    }

function showCaseofTotal(){
  console.log("getting into car");
  totallyAll();
  totalScores();
  
}
function totallyAll(){
  console.log("i ran too");
  $('.totally').text(totally+myScore+scoreA);
  console.log(totally+myScore+scoreA);
}

//this shows question and score for part2
function showScores(){
  console.log("fire");
      $(".show").show();
      $(".myScore").show();
      $(".AllquestionNumber").show();      
      $(".questionNumber").show();
      $(".hide").hide();
      $(".totally").hide();
  }      
//run quiz functions
function otherNextmadeQuiz(){
  console.log("please work 0");
  newstartQuiz();
  myrenderQuestion();
  newuserSelectAnswer();
  newrenderNextQuestion();
  showCaseofTotal()
}
function NextmadeQuiz() {
    console.log("other 0");
  newstartQuiz();
  myrenderQuestion();
  newuserSelectAnswer();
  newrenderNextQuestion();
  showScores();
}
$(callingyouNow)
//$(NextmadeQuiz);
