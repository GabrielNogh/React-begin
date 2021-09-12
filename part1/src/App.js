import React from 'react'
const Header = (props) =>{
  return(
    <div>
      <p> {props.name} </p>
    </div>
  )
}

const Content = ({props}) =>{

  const obj = {
    a:'dd',
    b:{
      c:'c',
      d:'d'
    }
  }
  const {a,b}= obj
  console.log(props)
  return(
    <div>

   {props.map((el)=>{
     return(
       <p>
         {el.name} , {el.exercises}
       </p>
     )
   })}
    
    </div>
  )
}

const Total = ({props}) =>{
  return(
    <div>
      <p> number of exercises {props[0].exercises + props[1].exercises + props[2].exercises } </p>
    </div>
  )
}

const App = () => {
  const course ={
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

  const {parts}=course;
  return (
    <div>
      <Header course={course} />
      <Content props={parts} />
      <Total props={course.parts} />
      </div>
  )
}

export default App