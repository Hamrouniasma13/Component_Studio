import React, { useState } from 'react'
import { get } from 'lodash'

import Button from '../../components/Button'
import styled from '@emotion/styled'

import QuestionRadio from './QuestionRadio'
import QuestionInput from './QuestionInput'
import QuestionWrapper from './QuestionWrapper'

const SimulatorWrapper = styled('div')(({ theme }) => ({
  label: 'SimulatorWrapper',
  width: '100%',
  margin: '60px 0',
  [theme.media.desktop]: {
    width: '768px'
  }
}))

const StyledButton = styled(Button)(({ theme }) => ({
  [theme.media.tablet]: {
    marginLeft: '60px'
  }
}))

const getNextQuestionForAnswer = (question, answer) => {
  // Check for the checkbox
  const q =
    get(question, 'options') &&
    question.options.find(option => option.value === answer)

  if (q && q.next) return q.next
  // check for classic input
  else if (question.next) return question.next
  else return false
}

/**
 * Check weather or not ta question has been answered
 * @param {Object} question Question type
 * @param {Object} answers all answers
 */
const isAnswered = (question, answers) => question && answers[question.name]

/**
 * Get all the question that has need responded yet
 * @param {Array} questions Array of question to display
 * @param {Object} answers all answers
 */
const getLastAnsweredQuestions = (questions, answers) => {
  let currentQ = questions[questions.length - 1]
  let isNext =
    isAnswered(currentQ, answers) &&
    getNextQuestionForAnswer(currentQ, answers[currentQ.name])

  if (isNext) {
    questions.push(isNext)
    return getLastAnsweredQuestions(questions, answers)
  } else return questions
}

/**
 * Get the all the question to display
 * @param {Object} questions displayed questions
 * @param {Object} answers all answers
 */
const getQuestionsToDisplay = (questions, answers) => {
  const defaultQuestion = [questions]
  return getLastAnsweredQuestions(defaultQuestion, answers).filter(q => q)
}

const SimulatorView = ({
  questions,
  answers: defaultAnswers,
  onUpdate,
  onSubmit
}) => {
  if (!questions) return null

  const [answers, setAnswers] = useState(defaultAnswers || {})

  const displayedQuestions = getQuestionsToDisplay(questions, answers)

  const onAnswer = ({ name, value }) => {
    const nextQuestions = getQuestionsToDisplay(questions, {
      ...answers,
      [name]: value
    })

    const validAnswers = nextQuestions.reduce(
      (out, question) => ({
        ...out,
        ...(answers[question.name]
          ? { [question.name]: answers[question.name] }
          : {})
      }),
      {}
    )

    const newAnswers = { ...validAnswers, [name]: value }
    onUpdate && onUpdate(newAnswers)
    setAnswers(newAnswers)
  }

  return (
    <SimulatorWrapper>
      {displayedQuestions.map((question, i) => {
        const hasNext =
          getNextQuestionForAnswer(question, answers[question.name]) &&
          answers[question.name]

        if (question.type === 'radio') {
          return (
            <QuestionWrapper
              key={question.name}
              number={i + 1}
              hasNext={hasNext}
            >
              <QuestionRadio
                color="secondary"
                {...question}
                value={answers[question.name]}
                onChange={onAnswer}
              />
            </QuestionWrapper>
          )
        } else if (
          question.type === 'number' ||
          question.type === 'email' ||
          question.type === 'text'
        ) {
          return (
            <QuestionWrapper
              key={question.name}
              number={i + 1}
              hasNext={hasNext}
            >
              <QuestionInput
                {...question}
                value={answers[question.name]}
                onChange={onAnswer}
              />
            </QuestionWrapper>
          )
        }
        return null
      })}
      {!displayedQuestions[displayedQuestions.length - 1].next &&
      answers[displayedQuestions[displayedQuestions.length - 1].name] ? (
        <StyledButton
          color="secondary"
          onClick={() => onSubmit && onSubmit(answers)}
        >
          Calculer
        </StyledButton>
      ) : null}
    </SimulatorWrapper>
  )
}

export default SimulatorView
