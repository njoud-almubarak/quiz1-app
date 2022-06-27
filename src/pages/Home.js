
import {useNavigate} from 'react-router-dom';
import {useState} from 'react'

const Home = ({setName,name,setQuestions,setScore,score,difficulty,setDifficulty,category,setCategory}) => {
     
    const Navigate=useNavigate();
  //  const [category,setCategory]=useState(0);
  //  const [difficulty,setDifficulty]=useState("");
    const [loading, setLoading] = useState(false);
 

    const DiffList = [
        { lable: 'Easy', value: 'easy' },
        { lable: 'Medium', value: 'medium' },
        { lable: 'Hard', value: 'hard' },
      ];
      const CatList = [
        { lable: 'General knowledge', value: 9 },
        { lable: 'Entertainment: Books', value: 10 },
        { lable: 'Entertainment: Film', value: 11 },
        { lable: 'Entertainment: Music', value: 12 },
        { lable: 'Entertainment: Musicals & Theaters', value: 13 },
        { lable: 'Entertainment: Television', value: 14 },
        { lable: 'Entertainment: Video Games', value: 15 },
        { lable: 'Entertainment: Board Games', value: 16 },
        { lable: 'Science & Nature', value: 17 },
        { lable: 'Science: Computers', value: 18 },
        { lable: 'Science: Mathematics', value: 19 },
        { lable: 'Mythology', value: 20 },
        { lable: 'Sports', value: 21 },
        { lable: 'Geography', value: 22 },
        { lable: 'History', value: 23 },
        { lable: 'Politics', value: 24 },
        { lable: 'Art', value: 25 },
        { lable: 'Celebrities', value: 26 },
        { lable: 'Animals', value: 27 },
      ];
     


      const startonclick =function(){
      
     
        setLoading(true);
      let apiurl =`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`;
      fetch(apiurl)
      .then((response)=>response.json())
       .then((json)=>{
       setLoading(false);
       console.log(json.results);
        setQuestions(json.results);
       Navigate('/quiz');

       })};


      // const startonclick =function(){
      
       //setLoading(true);
         //   const gotoQuiz = async () => {
           // const request=await fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`);
            //const data =await request.json();
            //setQuestions(data.results);
          //setLoading(false);
           // Navigate('/quiz');};
           // gotoQuiz();}; 
       
      



    
      



  return (

   <>
  

    <form className="setup-form">
    <h2 >Enter your name ..</h2>
    <input className="form-control" type="text" placeholder="your name" 
    onChange={(event) => {
        setName(event.target.value);
          }}/>
    
  

    {/* {category} */}
    <div className="form-control">
      <label htmlFor="category">Select Category</label>
      <select 
       placeholder="select category .." 
        className="form-input"
        value={category}
        onChange={(event) => {
            setCategory(event.target.value);
          }}
         >
           
      {CatList.map((cat)=>(
      <option key={cat.value} value={cat.value} >{cat.lable}</option> ))}
      </select>
     </div>



    {/* {difficulty} */}
    <div className="form-control">
      <label htmlFor="difficulty">Select Difficulty</label>
      <select className="form-input"
      value={difficulty}
      onChange={(e)=>{setDifficulty(e.target.value);}}
        >
        {DiffList.map((diff) =>( 
       <option key={diff.value} value={diff.value}>{diff.lable}</option> ))}
      </select>
    </div>


   
    
   

    {!loading ? (
    <button  onClick={startonclick} type = "submit" className="submit-btn" >
      start
    </button>

) : (
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  )}
  </form>
  
   
   
   
   </>



  );
}

export default Home