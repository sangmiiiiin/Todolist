const START_KEY = "userId"
const login = localStorage.getItem(START_KEY);


let quiz = [
    {
        id: 1,
        problem: "나는 지으링을 사랑한다"
    }
]

const paintQuiz = () => {
    startButton.classList.add("hide");
    const quizDiv = document.createElement("div");
    document.body.append(quizDiv);
    quizDiv.innerText = quiz[Math.floor(Math.random())].problem;

}

if (login !== null) {
    startButton.addEventListener("click", paintQuiz);
}