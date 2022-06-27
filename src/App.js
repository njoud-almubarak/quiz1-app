import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Notfound from './pages/Notfound';
import Quiz from './pages/Quiz';
import {useState} from 'react'
import Loading from './pages/Loading';
import Result from './pages/Result'



function App() {

  const[score, setScore]= useState(0);
  const [questions, setQuestions] = useState([]);
  const [name,setName]=useState('');
  const [category,setCategory]=useState(0);
  const [difficulty,setDifficulty]=useState("");
  const [loading, setLoading] = useState(false);


  if (loading) {
    return <Loading />;}

  return (
    
    <BrowserRouter>
        <Routes>

    <Route path='/' element={<Home
     questions={questions}
     name={name}
   setName={setName}
   setQuestions={setQuestions}
     setScore={setScore}
     setCategory={setCategory}
     category={category}
     setDifficulty={setDifficulty}
     difficulty={difficulty}/>}/>

    <Route path='/quiz' element={<Quiz
    questions={questions}
    setQuestions={setQuestions}
    name={name}
    score={score}
    setScore={setScore} />}/>

    <Route path='/result' element={<Result name={name} score={score}/>}/>


    <Route path='*' element= {<Notfound/>}/>
 
   
        
   
    </Routes>
        </BrowserRouter>
  );
}

export default App;
