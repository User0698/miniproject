// Questions that will be asked
const Questions = [{
    q: "What does the URL stands for?",
    a: [{ text: "Uniform Resource Locator", isCorrect: true },
    { text: "Uniform Resource Link", isCorrect: false },
    { text: "Universal reference Locator", isCorrect: false },
    { text: "Universal Resource Link", isCorrect: false }
    ]
},
{
    q: "What is web hosting?",
    a: [{ text: "Lampang", isCorrect: false, isSelected: false },
    { text: "Phuket", isCorrect: false },
    { text: "Ayutthaya", isCorrect: false },
    { text: "Bangkok", isCorrect: true }
    ]
},
{
    q: "What does the URL stands forujarat",
    a: [{ text: "Surat", isCorrect: false },
    { text: "Vadodara", isCorrect: false },
    { text: "Gandhinagar", isCorrect: true },
    { text: "Rajkot", isCorrect: false }
    ]
},
{
    q: "What does the URL stands forujarat",
    a: [{ text: "Surat", isCorrect: false },
    { text: "Vadodara", isCorrect: false },
    { text: "Gandhinagar", isCorrect: true },
    { text: "Rajkot", isCorrect: false }
    ]
},
{
    q: "What does the URL stands for?",
    a: [{ text: "Uniform Resource Locator", isCorrect: true },
    { text: "Uniform Resource Link", isCorrect: false },
    { text: "Universal reference Locator", isCorrect: false },
    { text: "Universal Resource Link", isCorrect: false }
    ]
},
{
    q: "What is web hosting?",
    a: [{ text: "Lampang", isCorrect: false, isSelected: false },
    { text: "Phuket", isCorrect: false },
    { text: "Ayutthaya", isCorrect: false },
    { text: "Bangkok", isCorrect: true }
    ]
},
{
    q: "What does the URL stands forujarat",
    a: [{ text: "Surat", isCorrect: false },
    { text: "Vadodara", isCorrect: false },
    { text: "Gandhinagar", isCorrect: true },
    { text: "Rajkot", isCorrect: false }
    ]
},
{
    q: "What does the URL stands forujarat",
    a: [{ text: "Surat", isCorrect: false },
    { text: "Vadodara", isCorrect: false },
    { text: "Gandhinagar", isCorrect: true },
    { text: "Rajkot", isCorrect: false }
    ]
},
{
    q: "What does the URL stands for?",
    a: [{ text: "Uniform Resource Locator", isCorrect: true },
    { text: "Uniform Resource Link", isCorrect: false },
    { text: "Universal reference Locator", isCorrect: false },
    { text: "Universal Resource Link", isCorrect: false }
    ]
},
{
    q: "What is web hosting?",
    a: [{ text: "Lampang", isCorrect: false, isSelected: false },
    { text: "Phuket", isCorrect: false },
    { text: "Ayutthaya", isCorrect: false },
    { text: "Bangkok", isCorrect: true }
    ]
},
{
    q: "What does the URL stands forujarat",
    a: [{ text: "Surat", isCorrect: false },
    { text: "Vadodara", isCorrect: false },
    { text: "Gandhinagar", isCorrect: true },
    { text: "Rajkot", isCorrect: false }
    ]
},
{
    q: "What does the URL stands forujarat",
    a: [{ text: "Surat", isCorrect: false },
    { text: "Vadodara", isCorrect: false },
    { text: "Gandhinagar", isCorrect: true },
    { text: "Rajkot", isCorrect: false }
    ]
}
 
]
 
let currQuestion = 0
let score = 0
 
function loadQues() {
    const question = document.getElementById("ques")
    const opt = document.getElementById("opt")
 
    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = ""
 
    for (let i = 0; i < Questions[currQuestion].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");
 
        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;
 
        choiceLabel.textContent = Questions[currQuestion].a[i].text;
 
        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }
}
 
loadQues();
 
function loadScore() {
    const totalScore = document.getElementById("score")
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}
 
function nextQuestion() {
    if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        document.getElementById("opt").remove()
        document.getElementById("ques").remove()
        document.getElementById("btn").remove()
        loadScore();
    }
}
 
function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
 
    if (Questions[currQuestion].a[selectedAns].isCorrect) {
        score++;
        console.log("Correct")
        nextQuestion();
    } else {
        nextQuestion();
    }
}