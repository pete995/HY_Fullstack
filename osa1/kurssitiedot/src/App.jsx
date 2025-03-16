const Header = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.name} {props.exercises}</p>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part name={props.courses[0].name} exercises={props.courses[0].exercises}/>
      <Part name={props.courses[1].name} exercises={props.courses[1].exercises}/>
      <Part name={props.courses[2].name} exercises={props.courses[2].exercises}/>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.numExercises}</p>
    </>
  )
}

const App = () => {

  const courses = [
    {name: 'Fundamentals of React',   exercises: 10},
    {name: 'Using props to pass data',exercises: 7},
    {name: 'State of a component',    exercises: 14},
  ]

  const course = 'Half Stack application development'

  return (
    <div>
      <Header name={course}/>
      <Content courses={courses}/>
      <Total numExercises={courses[0].exercises + courses[1].exercises + courses[2].exercises}/>
    </div>
  )
}

export default App
