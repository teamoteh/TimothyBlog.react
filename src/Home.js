import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  return (
    <div className="home">
      <p>
        <h1>
        Welcome to Mrs Mahjong!
        </h1>
      </p>
      <div>
        <div>
          <button
          className="rulesButt" 
          onClick = {'/rules'}
          style={{height: '100px', width : '100px'}}>Rules</button>
        </div>
        <div>
          <button
          className="handsButt" 
          onClick = {'/hands'}
          style={{height: '100px', width : '100px'}}>Winning Hands</button>
        </div>
      </div>
    </div>
  );
}
 
export default Home;