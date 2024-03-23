import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from "../features/auth/loginUserApi";

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.login.loading);
  const error = useSelector((state) => state.login.error);
  const user = useSelector((state) => state.login.user);
 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
  console.log(email,password)
    dispatch(loginUser({ email, password }));
  };
  return (
    <>
  {/* <form onSubmit={handleSubmit} className="mt-5">
    <div className="mb-3">
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="form-control"
        style={{ borderRadius: '10px', padding: '10px' }}
        placeholder="Email"
      />
    </div>
    <div className="mb-3">
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        className="form-control"
        style={{ borderRadius: '10px', padding: '10px' }}
        placeholder="Password"
      />
      <br />
      <button className='btn btn-sm btn-danger' style={{ borderRadius: '10px', padding: '5px 15px', marginLeft: '5px' }}>
        Forget Password
      </button>
    </div>
    <button type="submit" className="btn btn-primary" disabled={loading} style={{ borderRadius: '10px', padding: '10px' }}>
      {loading ? 'Logging in...' : 'Login'}
    </button>
    {error && <p className="text-danger mt-2">{error}</p>}
  </form> */}
  <div className="login-form  container mt-5 pt-5">
  <section className="vh-100 ">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form onSubmit={handleSubmit}>
          <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p className="lead fw-normal mb-0 me-3">Sign in with</p>
            <button type="button" className="btn btn-primary btn-floating mx-1">
              <i className="fab fa-facebook-f" />
            </button>
            <button type="button" className="btn btn-primary btn-floating mx-1">
              <i className="fab fa-twitter" />
            </button>
            <button type="button" className="btn btn-primary btn-floating mx-1">
              <i className="fab fa-linkedin-in" />
            </button>
          </div>
          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
          </div>
          <div className="form-outline mb-4">
            <input type="text" 
            name='email'
                    value={formData.email}
                    onChange={handleChange}
            id="form3Example3" className="form-control form-control-lg" placeholder="Enter a valid email address" />
            <label className="form-label" htmlFor="form3Example3">Email address</label>
          </div>
          <div className="form-outline mb-3">
            <input type="password" 
            name='password'
                    
                    value={formData.password}
                    onChange={handleChange}
            id="form3Example4" className="form-control form-control-lg" placeholder="Enter password" />
            <label className="form-label" htmlFor="form3Example4">Password</label>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <a href="#!" className="text-body">Forgot password?</a>
          </div>
          <div className="text-center text-lg-start mt-4 pt-2">
            <button type="submit" className="btn btn-primary btn-lg" style={{paddingLeft: '2.5rem', paddingRight: '2.5rem'}}>Login</button>
            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!" className="link-danger">Register</a></p>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
    <div className="text-white mb-3 mb-md-0">
    </div>
    <div>
      <a href="#!" className="text-white me-4">
        <i className="fab fa-facebook-f" />
      </a>
      <a href="#!" className="text-white me-4">
        <i className="fab fa-twitter" />
      </a>
      <a href="#!" className="text-white me-4">
        <i className="fab fa-google" />
      </a>
      <a href="#!" className="text-white">
        <i className="fab fa-linkedin-in" />
      </a>
    </div>
  </div>
</section>

  </div>

  
  <br />
  {user?(<h1>{user.email}</h1>):"Not found"}
  </>
  );
};
export default Login;
