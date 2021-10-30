import { useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import "./Login.css";

const Login = () => {
  //destructuring
  const { signInUsingGoogle, setIsLoading, } = useAuth();
  const location = useLocation();
  const history = useHistory();

  // user current location
  const redirecPath = location.state?.from || "/";

  // google sign in
  const handleGoogleSignIn = (event) => {
    event.preventDefault();
    signInUsingGoogle()
      .then((result) => {
        console.log(result.user);
        history.push(redirecPath);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <main className="form-signin text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 mx-auto">
            <form>
              <img className="mb-4" src="images/logo.webp" alt="" />
              <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
              <button
                onClick={handleGoogleSignIn}
                className="w-100 btn btn-primary">
                Sign in with Google
              </button>
              <p className="mt-5 mb-3 text-muted">© 2021–2022</p>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
