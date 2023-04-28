import { Link } from 'react-router-dom';

const Register = () => {
    return ( 
        <div className='text-center'>
            <h2> Register</h2>
            <form action="/home">
                <p>
                    <label>Name: </label>
                    <input type="text" name="first-name" required></input>
                </p>
                <p>
                    <label>Username: </label>
                    <input type="text" name="first-name" required></input>
                </p>
                <p>
                    <label>E-Mail: </label>
                    <input type="text" name="Mailid" required></input>
                </p>
                <p>
                    <label>Password: </label>
                    <input type="text" name="password" required></input>
                </p>
                <p>
                <button id="sub_btn" type="submit">Register</button>
                </p>
                <p>
                    <Link to="/login">Back to Login Page</Link>
                </p>


            </form>


        </div>
     );
}
 
export default Register ;