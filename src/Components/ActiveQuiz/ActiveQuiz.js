import React from 'react';
import './ActiveQuiz.css'
import AnswersList from './AnswersList/AnswersList';

const ActiveQuiz = (props) => (
    <div className = "ActiveQuiz">
        <p className = "ActiveQuiz__question">
            <span>
                <strong>{props.answerNumber}.</strong>&nbsp;
                {props.question}
            </span>
            <small>{props.answerNumber} из {props.quizLength}</small>
        </p>
        <AnswersList
            answers = {props.answers}
            onClickAnswer = {props.onClickAnswer}
            state = {props.state}
        />
    </div>
)

export default ActiveQuiz