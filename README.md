# Quiz Site
## Table of contents
* [Prerequisites](https://github.com/brianjunhyuplee/quiz-site#prerequisites)
* [Objective](https://github.com/brianjunhyuplee/quiz-site#objective)
* [Operation](https://github.com/brianjunhyuplee/quiz-site#operation)
* [Process](https://github.com/brianjunhyuplee/quiz-site#process)
* [Built-With](https://github.com/brianjunhyuplee/quiz-site#built-with)
* [Deployed-Link](https://github.com/brianjunhyuplee/quiz-site#deployed-link)
* [Authors](https://github.com/brianjunhyuplee/quiz-site#authors)
* [License](https://github.com/brianjunhyuplee/quiz-site#license)
* [Acknowledgements](https://github.com/brianjunhyuplee/quiz-site#acknowledgments)
## Prerequisites:
* Computer with internet access
## Objective: 

Create a website that quizzes user with a timer function using Javascript and JQuery.


## Operation:

**To access the website, simply click on this [deploymentlink](https://brianjunhyuplee.github.io/quiz-site/).**

1. Read the instructions.
2. Click Begin to begin.
3. Click on the correct answers to earn points.
4. When the quiz is over, enter your name.
5. Your score will be posted alongside other attempts.

![Image of the Quiz Site](assets/images/web.png)

## Process:
**1.  Create HTML** 

The HTML should contain all the tags necessary for building a functional quiz website.
1. Header
2. Description *(instructions and quiz questions)*
3. Timer
4. Buttons

Import jQuery.

**2.  Global Variables**

This website needed a large number of global variables as shown below.

![Image of global var](assets/images/var.png)
*These variables were declared and written in as neeeded*

**3.  Functions**
1. Create a Timer

A timer must be created and displayed. 
The timer will be set to have 60 seconds.
Every time the user click an incorrect answer, subtract 5 from the timer.
When the timer reaches zero or below, the quiz will end.
The timer will begin once the user clicks Begin.

![Image of the timer](assets/images/timer.png)

2. Adding Questions and Answers to the HTML

- Arrays for questions, correct answers, and incorrect answers are initialized.

Every time a button is clicked, the next question will be displayed on the HTML using the below code.
```bash
$(#tag).text(questionarray[index]);
```

- After the question is displayed, four answers will be displayed as buttons.

The correct answer will be placed randomly.
The code below shoes the syntax for changing the text of the button.
```bash
$(#button).text(answer[index]);
```
*Every time a question is answered correctly, points will be added.*

![Image of questions and answers](assets/images/qa.png)

3. End of Quiz

Once the user has answered all the questions or run out of time, the system will prompt the user for a name.
The name will be recorded as well as the points into two arrays.
All the buttons used for the quiz will be hidden using the function hide.
The user score will be displayed on the screen as well as a list of previous user names and scores.
Once all values are stored, the point count and index of the question and answer arrays will be set to 0.

![Image of Scoreboard](assets/images/gameOver.png)

4. Try Again

A button labeled Try Again will run the same operations as the Begin button.



## Built With:
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [JS]([https://developer.mozilla.org/en-US/docs/Web/JavaScript])
* [jQuery](https://developer.mozilla.org/en-US/docs/Glossary/jQuery)

## Deployed Link:
* [quiz-site](https://brianjunhyuplee.github.io/quiz-site/)

## Author(s):
**Brian Lee**
* [GitHub](https://github.com/brianjunhyuplee)
* [LinkedIn](https://www.linkedin.com/in/brian-lee-559208187/)
* [MyPortfolio :)](https://brianjunhyuplee.github.io/portfolio/)

## License:

This project is licensed under the [MIT-License](https://www.mit.edu/~amini/LICENSE.md)

## Acknowledgments:
* Jerome Chenette (Lead Instructor of UCB Bootcamp)
* Kerwin Hy (TA at UCB Bootcamp)
* Manuel S Nunes (TA at UCB Bootcamp)
* Roger Le (Instructor at UCB Bootcamp)