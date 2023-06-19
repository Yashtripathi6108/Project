import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './HomeMainbar.css'
import QuestionList from './QuestionList'

const HomeMainbar = () => {

  const location = useLocation()
  const user = 1;
  const navigate = useNavigate()

  var questionsList = [{
    _id:1,
    upVotes:3,
    downVotes:2,
    noOfAnswers:2,
    questionTitle:"What is a function?",
    questionBody:"It meant to be",
    questionTag: ["javascript", "R", "python"],
    userPosted:"nano",
    askedOn:"jan 1",
    answer: [{
      answerBody:"Answer",
      userAnswerd:"Kumar",
      answeredOn:"jan1",
      userId:1,
    }]
  }, {
    _id:2,
    upVotes:0,
    downVotes:2,
    noOfAnswers:2,
    questionTitle:"What is a function?",
    questionBody:"It meant to be",
    questionTag: ["javascript", "R", "python"],
    userPosted:"nano",
    askedOn:"jan 1",
    answer: [{
      answerBody:"Answer",
      userAnswerd:"Kumar",
      answeredOn:"jan1",
      userId:2,
    }]
  }, {
    _id:3,
    upVotes:4,
    downVotes:1,
    noOfAnswers:2,
    questionTitle:"What is a function?",
    questionBody:"It meant to be",
    questionTag: ["javascript", "R", "python"],
    userPosted:"nano",
    askedOn:"jan 1",
    answer: [{
      answerBody:"Answer",
      userAnswerd:"Kumar",
      answeredOn:"jan1",
      userId:3,
    }]
  }]



  const checkAuth = () => {
    if(user === null){
      alert("login or signup to ask a question")
      navigate('/Auth')
    }else{
      navigate('/AskQuestion')
    }
 
  }

  return (
    <div className='main-bar'>
      <div className='main-bar-header' >
        {
          location.pathname === '/' ? <h1 style={{paddingRight:"385px"}}>Top Questions</h1> : <h1 style={{paddingRight:"400px"}}>All Questions</h1>
        }
        <button onClick={checkAuth} className='ask-btn' style={{marginTop:"10px"}} >Ask Question</button>
      </div>
      <div>
        {
          questionsList === null ?
          <h1>Loading...</h1> :
          <>
            <p>{ questionsList.length } questions</p>
            <QuestionList questionsList={questionsList} />
          </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar