import React from 'react';
import './AnswersList.css';
import AnswerItem from './AnswerItem/AnswerItem';

const AnswersList = props => (
    <ul className = "AnswersList">
        {props.answers.map((answer, index) => {
            return (
                <AnswerItem 
                    key = {index}
                    answer = {answer}
                    onClickAnswer = {props.onClickAnswer}
                    state = {props.state ? props.state[answer.id] : null}
                />
            )
        })}
    </ul>
)

export default AnswersList