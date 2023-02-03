import './App.css';
import { useState } from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Optionshow from './components/option';
// import Paper from '@mui/material/Paper';
import ReactDOM from 'react-dom/client';

function App() {
  const [quizdata, setquizdata] = useState({
    quizName: 'React Quiz',
    totalMarks: 60,
    perQuestionMarks: 10,
    questions: [
      {
        question: "Html Stands For _______",
        options: [
          "Hyper Text Makeup Language",
          "html",
          "Case Cading Style Sheet",
          "Hypertext markup language",
        ],
        correctAns: "Hypertext markup language",
      },
      {
        question: "Css Stands For _________",
        options: [
          "Hypertext markup language",
          "Java",
          "Ram",
          "Casecading Style Sheet",
        ],
        correctAns: "Casecading Style Sheet",
      },
      {
        question: "Js Stands For _________",
        options: ["Java Style", "Java Script", "Script", "Script Src"],
        correctAns: "Java Script",
      },
      {
        question: "Dom Stands For _________",
        options: ["Document Object Model", "html", "Css", "Java"],
        correctAns: "Document Object Model",
      },
      {
        question: "Ram Stands For _________",
        options: ["Read Only Memory", "Dom", "Random Acccess Memory", "For Pc"],
        correctAns: "Random Acccess Memory",
      },
      {
        question: "Rom Stands For _________",
        options: [
          "Hyper Text Markup Language",
          "html",
          "HTml",
          "Read Only Memory",
        ],
        correctAns: "Read Only Memory",
      },
    ],
  })
  // const [statusConfig, setStatusConfig] = useState([
  //   {
  //     label: 'Correct Question',
  //     value: 0,
  //     color: 'grey',
  //   },
  //   {
  //     label: 'Total Question',
  //     value: questions.length,
  //     color: 'blue',
  //   },
  //   {
  //     label: 'Attempted Value',
  //     value: 0,
  //     color: 'green'
  //   },
  // ])
  const [indexNum, setIndexNum] = useState(0);
  const { quizName, totalMarks, perQuestionMarks, questions } = quizdata;
  const [marks, setMarks] = useState(0)
  const [status, setStatus] = useState('')
  const [showScore, setShowScore] = useState(false)
  let percentage = (marks / totalMarks) * 100


  let checkAnswer = (e) => {
    let correctAnswer = questions[indexNum].correctAns
    if (e === correctAnswer) {
      setMarks(marks + 10)
      console.log(marks)
    }
    if (percentage >= 50) {
      setStatus('Pass')
    } else {
      setStatus('Fail')
    }
    console.log(status)
    setIndexNum(indexNum + 1)

    if (indexNum === 5) {
      // return <Box>
        setShowScore(true)
      //     <Typography variant="h1">sdfnjksdngjdf</Typography>
        
      //   </Box>
      // ReactDOM.render(<p>dksjfkdhgjdfhg</p>)
    }
  }


  // console.log(percentage)



  return <div>
  {showScore ? ( <Box style={{marginTop: '10px'}}>
    <Typography variant='h4'  align="center">Score Card</Typography>
    <Box style={{marginTop: '100px', marginLeft: '300px', padding: '10px', fontSize: '40px'}}>
    <Typography variant='h5'>Attempted Questions:</Typography>
    <Typography variant='body1'>{questions.length}</Typography>
    <Typography variant='h5'>Total Marks:</Typography>
    <Typography variant='body1'>{totalMarks}</Typography>
    <Typography variant='h5'>Marks Obtained:</Typography>
    <Typography variant='body1'>{marks}</Typography>
    <Typography variant='h5'>Percentage:</Typography>
    <Typography variant='body1'>{percentage}</Typography>
    <Typography variant='h5'>Status:</Typography>
    <Typography variant='body1'>{status}</Typography>

    </Box>
    </Box>
  ): 
  
  <Box className="main_div">
    <Typography variant='h3' style={{ marginTop: '10px' }}>{quizName}</Typography>

    <Typography varient="h3" style={{ display: "inline" }}>{indexNum + 1}</Typography>
    <Typography varient="span" style={{ display: "inline" }}> / </Typography>
    <Typography varient="h3" style={{ display: "inline" }}>{questions.length}</Typography>
    <Box>
      {/* <Typography variant='body1' style={{display: "inline"}}>Marks Obtained</Typography> */}
      <Typography variant='body1' style={{ display: "inline" }}>Total Marks: </Typography>
      <Typography variant='body1' style={{ display: "inline" }}>{totalMarks}</Typography>

    </Box>
    <Box style={{ marginTop: '20px' }}>
      <Typography variant="h4" >Question</Typography>

      <Typography variant='h3' style={{ margin: '10px' }}>{questions[indexNum].question}</Typography>
    </Box>
    <Box className="container" style={{ marginTop: '30px' }}>
      <Optionshow optionClick={(e) => checkAnswer(e)} data={questions[indexNum].options} />
    </Box>
    {/* <Box>
    <Typography variant='h4'>Total Questions</Typography>
    <Typography variant='h4'>Total Attempted Questions</Typography>
    <Typography variant='h4'>Total Questions</Typography>

  </Box> */}
  
  </Box>
}
  </div>


}

export default App;
