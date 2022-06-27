import { Button } from "@material-ui/core";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Result = ({name,score}) => {
    const navigate =  useNavigate();

    useEffect(() => {
        if (!name) {   navigate("/");  }
      }, [name, navigate]);

  return (
    <div className="card">
      <span className="title">your Score : {score}</span>
      <Button className="submit-btn"
        variant="contained"
        
        size="large"
        style={{ alignSelf: "center", marginTop: 10 , marginBottom:10 }}
        href="/"
      >
        Go to Home
      </Button>
    </div>
  )
};

export default Result;