import React from 'react'

function QuizResult() {
    var socre = localStorage.getItem("score")
    return (
        <div>
            <h1>Your score is {socre}</h1>
            
        </div>
    )
}

export default QuizResult
