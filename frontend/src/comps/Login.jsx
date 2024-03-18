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
    dispatch(loginUser({ email, password }));
  };
  return (
    <>
  <form onSubmit={handleSubmit} className="mt-5">
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
  </form>
  <br />
  {user?(<h1>{user.email}</h1>):"Not found"}
  </>
  );
};
export default Login;
