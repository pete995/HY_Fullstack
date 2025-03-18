import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)

  const randInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const addVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  const getMostVoted = () => {
    let mostVotedIndex = 0

    for (let i = 0; i < votes.length; i++) {
      if (votes[i] > votes[mostVotedIndex]) {
        mostVotedIndex = i
      }
    }

    return mostVotedIndex
  }

  return (
    <>
      <div>
        <h1>Anecdote of the day</h1>
      </div>
      <div>
        {anecdotes[selected]}
      </div>
      <div>
        has {votes[selected]} votes
      </div>
      <div>
        <button onClick={() => addVote()}>vote</button>
        <button onClick={() => setSelected(randInt(0, anecdotes.length - 1))}>next anecdote</button>
      </div>
      <div>
        <h1>Anecdote with most votes</h1>
      </div>
      <div>
        {anecdotes[getMostVoted()]}
      </div>
      <div>
        has {votes[getMostVoted()]} votes
      </div>
    </>
  )
}

export default App
