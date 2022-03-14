import React, { useState } from 'react'
// import { useHistory } from "react-router-dom";

import "./Quiz.css"

function Quiz() {
    var arry = [
        {
            Question: "Q1. Conversion of decimal number 61 to it's binary number equivalent is",
            option: ["110011", "11001110", "111101", "11111"],
            answerKey: "111101"
            // selectValue:"none",
            // score:0
        },
        {
            Question: "Q2. Who was the first President of the Constituent Assembly of Pakistan?",
            option: ["Liaquat Ali Khan", "Quaid-e-Azam", "Tameez-ud-Din", "Abdur Rab Nishtar"],
            answerKey: "Quaid-e-Azam"
            // selectValue:"none",
            // score:0
        },
        {
            Question: "Q3. After how many years Pakistan got its first constitution?",
            option: ["5 years", "7 years", "9 years", "11 years"],
            answerKey: "9 years"
            // selectValue:"none",
            // score:0
        },
        {
            Question: "Q4. Who was Mohammad Ali Bogra?",
            option: ["Prime Minister", "Foreign Minister", "Law Minister", "Parliament Minister"],
            answerKey: "Prime Minister",
            // selectValue:"none",
            // score:0
        }
        ,
        {
            Question: "Q5. When first constitution of Pakistan was enforced?",
            option: ["8 June 1956", "23 March 1956", "14 August 1956", "25 December 1956"],
            answerKey: "23 March 1956",
            // selectValue:"none",
            // score:0
        }

    ]

    // var history = useHistory();

    const [counter, setcounter] = useState(0)
    const [userAnswer, setuserAnswer] = useState("")
    const [score, setscore] = useState(0)

    const [checked, setChecked] = useState({
        option1: false,
        option2: false,
        option3: false,
        option4: false,
    });



    const next = () => {


        
        setChecked({
            option1: false,
            option2: false,
            option3: false,
            option4: false,
        })
        
        
        setcounter(counter + 1)



        if (userAnswer === arry[counter].answerKey) {
            setscore(score + 10);
            console.log(score);
        } else {
            console.log("Wrong Answer");
        }


    }

    const submit = () => {
        if (userAnswer === arry[counter].answerKey) {
            setscore(score + 10);

        } else {
            console.log("Wrong Answer");
        }


    }




    const optionValue = (e) => {

        setuserAnswer(e.target.value)
        console.log(e.target.value);
        setChecked(
            {
                option1: false,
                option2: false,
                option3: false,
                option4: false,
                [e.target.value]: true
            }
        );


    }

    return (
        <div>
            <div className="wrapper">
                <div className="quiz">
                    <div className="quiz_header">
                        <div className="quiz_user">
                            <h4>Welcome! <span className="name"></span></h4>
                        </div>
                        <div className="quiz_timer">
                            <span className="time">00:00</span>
                        </div>
                    </div>
                    <div className="quiz_body">
                        <div>
                            <h5>{arry[counter].Question}</h5>

                            <ul className="option_group">
                                {/* {
                                    arry[counter].option.map((item, index) => {
                                        return (
                                            <li className="option" key={index}>
                                                <input onChange={optionValue} checked={checked.item} value={item} type="radio" name="quiz" /><label>{item}</label>
                                            </li>
                                        )
                                    })
                                } */}

                                <li className="option">
                                    <input onChange={optionValue} checked={checked.option1} value={arry[counter].option[1]} type="radio" name="quiz" /><label>{arry[counter].option[0]}</label>
                                </li>

                                <li className="option">
                                    <input onChange={optionValue} checked={checked.option2} value={arry[counter].option[1]} type="radio" name="quiz" /><label>{arry[counter].option[1]}</label>
                                </li>

                                <li className="option">
                                    <input onChange={optionValue} checked={checked.option3} value={arry[counter].option[2]} type="radio" name="quiz" /><label>{arry[counter].option[2]}</label>
                                </li>

                                <li className="option">
                                    <input onChange={optionValue} checked={checked.option4} value={arry[counter].option[3]} type="radio" name="quiz" /><label>{arry[counter].option[3]}</label>
                                </li>

                            </ul>
                        </div>
                        {
                            counter === 4 ? <button onClick={submit} className="btn-next">Submit</button>
                                :
                                <button onClick={next} className="btn-next">Next Question</button>
                        }

                    </div>
                    <h1>Score is{score}</h1>
                </div>
            </div>
        </div>
    )
}

export default Quiz
