import React from 'react'
import QuestionsDetails from './QuestionsDetails'
import { Link } from 'react-router-dom'
import Avatar from '../../components/Avatar/Avatar'

const DisplayAnswer = ({question}) => {
  return (
    <div>
      {
        question.answer.map((ans) => (
          <div className="display-ans" key={ans._id}>
            <p style={{paddingBottom:"30px"}}>{ans.answerBody}</p>
            <div className="question-actions-user">
              <div style={{paddingBottom:"14px"}}>
                <button type='button'>Share</button>
                <button type='button'>Delete</button>
              </div>
            </div>
            <div style={{float:"right", marginTop:"-63.5px"}}>
              <p style={{marginBottom:"-1px"}}>answer {ans.answeredOn}</p>
              <Link to={`/User/${question.userId}`} className='user-link' style={{color:"#0086d8"}}>
                <Avatar backgroundColor="green" px="8px" py="5px">{ans.userAnswered.charAt(0).toUpperCase()}</Avatar>
                <div>
                  {ans.userAnswered}
                </div>
              </Link>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default DisplayAnswer