import { Link } from 'react-router-dom';
const Password = () => {
    return ( 
        <div classNane="reset">
            <h2>Reset Password</h2>
            <form action="/home">
                <p>
                    <label>New Password: </label>
                    <input type="text" name="password" required></input>
                </p>
                <p>
                    <label>Enter Password again: </label>
                    <input type="text" name="againpass" required></input>
                </p>
                <p>
                    <Link to='/'>Back to home page</Link>
                </p>

            </form>
        </div>
     );
}
 
export default Password ;