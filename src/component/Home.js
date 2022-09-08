
import { Link } from "react-router-dom"; import './Style.css';
import Nav from "./Nav";
import './Style.css'



const Home = () => {


  return (
    <>
      <Nav />

      <div className="home-link">


        <Link to="/about" >About </Link>
        <div className="head-txt">
          <Link to="/headtail">  Head & Tails</Link>
        </div>

      </div>

    </>
  )
}
export default Home;