import { Button } from "@material-ui/core";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';



const Question = ({ currQues, setCurrQues, questions,  options, correct, setScore, score, setQuestions,}) => {

  const [selected, setSelected] = useState();
  const navigate = useNavigate();

  const handleSelect = (i) => {
    if (selected === i && selected === correct) return "select";
    else if (selected === i && selected !== correct) return "wrong";
    else if (i === correct) return "select";};

  const Check = (i) => {
    setSelected(i);
    if (i === correct) setScore(score + 1); };

  const Next = () => {
    if (currQues > 5) {
      navigate("/result");
    } else if (selected) {
      setCurrQues(currQues + 1);
      setSelected(); }  };

  const Quit = () => {
    setCurrQues(0);
    setQuestions();
  };
  return  (
    <div className="question">
    

      <div className="singleQuestion">
        <h2>{currQues + 1} : {questions[currQues].question}</h2>

        <div className="options">
          {options && options.map((i) => (
              <button className={`singleOption  ${selected && handleSelect(i)}`}   key={i} onClick={() => Check(i)}   disabled={selected}>
              {i}  </button> ))}
        </div>

        <div className="controls">
        <div>
          <Button style={{ width: 200 }}  href="/"  onClick={() => Quit()}  >   Quit  </Button></div>
          <div>
          <Button  style={{ width: 200 }}  onClick={Next}  > {currQues > 20 ? "Submit" : "Next Question"} </Button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Question;