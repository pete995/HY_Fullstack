import { useState } from 'react'

const Button = ({onClick, text}) => {
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  )
}

const StatisticLine = ({text, value, ending}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value} {ending}</td>
    </tr>
  )
}

const Statistics = (props) => {

  const good = props.good
  const neutral = props.neutral
  const bad = props.bad

  const all = good + neutral + bad

  if (all == 0){
    return (
      <div>
        <h1>statistics</h1>
        <div>
          No feedback given
        </div>
      </div>
    )
  }

  const average = all > 0 ? (good + bad * -1.0) / all : 0
  const positive = all > 0 ? 100.0 * good / all : 0

  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value = {good} />
          <StatisticLine text="neutral" value = {neutral} />
          <StatisticLine text="bad" value = {bad} />
          <StatisticLine text="all" value = {all} />
          <StatisticLine text="average" value = {average} />
          <StatisticLine text="positive" value = {positive} ending={"%"} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good"/>
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral"/>
      <Button onClick={() => setBad(bad + 1)} text="bad"/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

export default App
