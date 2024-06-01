import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="center flex">
        <section className="card center">
            <div className="d-logo center flex">
                <img className="logo" src="https://www.ifatih.com/images/logos/8/4-content-0-logo-1-full-black_3x.png" alt="logo" />
            </div>
            <div className="title">
                <h2 className="center flex roboto-thin">One account</h2>
                <h2 className="center flex roboto-thin">Many possibilities</h2>
            </div>

            <form action="post">
                <section className="form">
                    <input className="center flex roboto-thin" type="email" name="email" id="email" placeholder="E-mail address or phone number" />
                    <input className="center flex roboto-thin" type="password" name="password" id="password" placeholder="Password" />
                    <div className="space-between">
                        <div className="center flex">
                            <input type="checkbox" name="rememberMe" id="rememberMe" />
                            <label className="text-size-10 roboto-thin" htmlFor="rememberMe">Remember me</label>
                        </div>
                        <div className="center flex">
                            <a className="link text-size-10 roboto-thin" href="">
                                <span>Forgot password?</span>
                            </a>
                        </div>
                    </div>
                </section>

                <section className="buttons">
                    <button className="center flex button button-primary" type="submit">Sign in</button>
                    
                </section>

                <section className="not-member center flex">
                    <span className="text-size-10 roboto-thin"> Not a member yet? <a className="link" href="">Sign up</a></span>
                </section>
            </form>
        </section>
    </div>
);
}



export default App;
