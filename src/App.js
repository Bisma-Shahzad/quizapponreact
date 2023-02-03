import './App.css';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import Input from './component/input';
import { useState } from 'react';
import Buttons from './component/buttonshow';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [indexNum, setIndexNum] = useState();
  const [mainquestions, setQuestions] = useState([])
  const [questionquiz, setQuestion] = useState("")
  const [correctAns, setCorrectAnd] = useState("")
  const [individualQuestion, setIndividualQuestion] = useState({question: '', option: '', correctAnswer: ''})

  let add = () => {
    if (indexNum > -1) {
      todos[indexNum] = text;
      setTodos([...todos]);
      setIndexNum(-1)
    } else {
      setTodos([...todos, text])
    }
    setText('')
    // console.log(todos)
  }

  let del = (i) => {
    todos.splice(i, 1)
    setTodos([...todos])
  }

  let edit = (i) => {
    setIndexNum(i)
    setText(todos[i])
  }

  let addquestion = () => {
    individualQuestion.question = questionquiz
    individualQuestion.option = todos
    individualQuestion.correctAnswer = correctAns
    setQuestion('')
    setCorrectAnd('')
    setTodos([])
    console.log(individualQuestion)
    console.log(mainquestions)
  }

  return <Box className="main-div">

    <Typography variant="h4" align="center">Quiz App Questions</Typography>
    <Box style={{marginTop: '30px'}}>
      <Typography variant="h5">Question:</Typography>
      <Input place={'Enter a value'} change={(e) => setQuestion(e.target.value)} value={questionquiz}/>
    </Box>
    <Box style={{marginTop: '30px'}}>
      <Typography variant="h5">Option:</Typography>
      <Input place={'Enter a value'} value={text} change={(e) => setText(e.target.value)}/>
      {/* <button onClick={add}>Add</button> */}
      <Buttons click={add} btnValue="Add" />

      <ul>
        {todos.map((x, i) => {
          return (<li key={i}>{x}  
          <Buttons click={() => edit(i)} btnValue="Edit" />
              <Buttons click={() => del(i)} btnValue="Delete" />
          </li>
          )
        })}
      </ul>
    </Box>
    <Box style={{marginTop: '30px'}}>
      <Typography variant="h5">Correct Answer:</Typography>
      <Input place={'Enter a value'} change={(e) => setCorrectAnd(e.target.value)} value={correctAns}/>
    </Box>
    <Buttons btnValue="Next" click={addquestion}/>
    <Buttons btnValue="Done" />

  </Box>
}

export default App;
