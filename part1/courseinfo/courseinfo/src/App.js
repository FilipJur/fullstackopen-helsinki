const Header = (props) => {
  console.log(props)
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part1 = (props) => {
  console.log(props)
  return(
    <div>
      <p>{props.part1}: {props.exercises1}</p>
    </div>
  )
}

const Part2 = (props) => {
  console.log(props)
  return(
    <div>
      <p>{props.part2}: {props.exercises2}</p>
    </div>
  )
}

const Part3 = (props) => {
  console.log(props)
  return(
    <div>
      <p>{props.part3}: {props.exercises3}</p>
    </div>
  )
}

const Content = () => {
  return(
    <div>
      <Part1 part1 = "Fundamentals of React" exercises1 =  {10} />
      <Part2 part2 = "Using props to pass data" exercises2 = {7}/>
      <Part3 part3 = "State of a component" exercises3 = {14}/>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return(
    <div>
      <p>Number of excersises: {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  )
}




const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content/>
      <Total exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3}/>
    </div>
  )
}

export default App