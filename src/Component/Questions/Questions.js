import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './Questions.css';

const Questions = ({
    currQues,
    setCurrQues,
    questions,
    options,
    correct,
    setScore,
    score,
    setQuestions
}) => {

    const [selected, setSelected] = useState();
    const [error, setError] = useState(false);
    const history = useNavigate();

    const handleSelect = (val) => {
        if(selected === val && selected === correct) {
            return 'select';
        }else if(selected === val && selected !== correct) {
            return 'wrong';
        }else if(val === correct) {
            return 'select'
        }
    }

    const handleCheck = (val) => {
        setSelected(val);
        if(val === correct) setScore(score + 1);
        setError(false);
    }

    const handleNext = () => {
        if(currQues > 8) {
            history('/result');
        }else if(selected) {
            setCurrQues(currQues + 1);
            setSelected();
        }else{
            setError('please Select an option first');
        }
    }

    const handleQuit = () => {

    }

    return (
        <div className='question'>
            <h1>Question {currQues + 1}</h1>
            <div className='singleQuestion'>
                <h2>{ questions[currQues].question }</h2>
                <div className='options'>
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                    {
                        options && 
                        options.map(value => (
                            <button 
                                onClick={() => handleCheck(value)} className={`singleOption ${selected && handleSelect(value)}`}
                                key={value}
                                disabled={selected}

                            >
                                {value}
                            </button>
                        ))
                    }
                </div>
                <div className='controls'>
                    <Button
                        variant='contained'
                        color='secondary'
                        size='large'
                        style={{width: 185}}
                        href='/'
                        onClick={handleQuit}
                    >
                        Quit
                    </Button>
                    <Button
                        variant='contained'
                        color='primary'
                        size='large'
                        style={{width: 185}}
                        onClick={handleNext}
                    >Next Question</Button>
                </div>
            </div>
        </div>
    )
}
export default Questions;
