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

  let parts = []

  for (let i = 0; i < props.parts.length; i++) {
    parts.push(<Part key={i} name={props.parts[i].name} exercises={props.parts[i].exercises}/>)
  }
  return (
    <>
      {parts}
    </>
  )
}

const Total = (props) => {

  let numExercises = 0;
  for (let i = 0; i < props.parts.length; i++) {
    numExercises += props.parts[i].exercises
  }
  
  return (
    <>
      <p>Number of exercises {numExercises}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header name={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App
