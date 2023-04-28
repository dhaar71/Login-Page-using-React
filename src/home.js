// import { Link } from 'react-router-dom';

const Home = () => {
    return ( 
        <div className="Box1">
            <h1 className="main-title text-center"> Login/Register </h1>
            <div className="buttons">
            <a href="login.js" target="_blank" rel="no referrer"><button className="primary-button"> LOG IN </button></a>
            {/* <Link to="www.google.com" target="_blank" >
                <button className="primary-button"> LOG IN </button></Link>
            <Link to="/Register" target="_blank">
                <button className="primary-button"> Register </button></Link>
             */}
        </div>
        </div>
     );
}
