<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>CodeLearner App</title>
    <meta name="description" content="Test your backcountry, backpacking, and outdoor knowledge">
    <link href="QAindex.css" rel="stylesheet" type="text/css" />
    <link href="https://fonts.googleapis.com/css?family=Anton&display=swap" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="QAdata.js"></script>
    <script src="QAcommandindex.js"></script>
    <script src="QAindex.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  </head>

  <body>
<nav>
    <div class="navbar">
          <a href="#home">Home</a>

    <div class="dropdown">
            <button class="dropbtn">resume 
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="#">profolio</a>
              <a href="#">Coding Video</a>
              <a href="#">practice code</a>
            </div>
    </div>
    <div class="dropdown">
              <button class="dropbtn">contacts 
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a href="file:///Users/s/test/gitProjects/projects/thinkful/jquery_QA_HW/Feed_back_profolio.html#home">Feed back</a>
                <a href="#">Direct contact</a>
                <a href="#">Company Contacts</a>
              </div>
      </div>

      <div class="dropdown">
              <button class="dropbtn">Games 
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a href="QAindex.html">Question game</a>
                <a href="#">card matching game</a>
                <a href="#">art gallery</a>
              </div>
      </div> 
</div>
    </div>
</nav>

    <header role="banner">
      <div class="col-4">
        <a href="QAindex.html">
<!-- changed icon-->
<spam class="logo"><i class="fa fa-file-code-o"></i></spam>

        </a>
      </div>
      <div class="col-8">
        <ul>
          <li class="AllquestionNumber" >Question: <span class="questionNumber myquestNumber">0</span>/10</li>
          <li class="totally" >Grand total: <span class="totally">0</span></li>
          <li class="hide" >Score of quiz 1: <span class="scoreA">0</span></li>
          <li class="show" >Score of quiz 2: <span class="myScore">0</span></li>
        </ul>
      </div>
    </header>
    <main role="main">
      <div class="quizStart">
        <h1>Lets see what you know about computers?</h1>
        <section>
            <button type="button" class="startButton">level one questions</button>
        </section>
        <div class="newstartQuiz">   
                 <section>
                <button type="button" class="otherstartButton">level two questions</button>
        </section></div>




        </div>

      <div class="questionAnswerForm"></div>
    </main>
  </body>
</html>
