import { Link } from 'react-router-dom';

const Home = () => {
    return ( 
        <div className="Box1">
            <h1 className="main-title text-center"> Login/Register </h1>
            <div className="buttons">
            <Link to="/login">
                <button className="primary-button"> LOG IN </button></Link>
            <Link to="/Register">
                <button className="primary-button"> Register </button></Link>
            
        </div>
        </div>
     );
}
 
export default Home;