import React, { useState } from "react";

const Signup = () => {
  const [avatarUrl, setAvatarUrl] = useState('');
  const [avatarFile, setAvatarFile] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    role: 'User'
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    password: '',
    address: ''
  });

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatarUrl(imageUrl);
      setAvatarFile(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.name.trim() === '') {
      alert('Please enter your name');
      return;
    }
    if (formData.address.trim() === '') {
      alert('Please enter your address');
      return;
    }
    if (formData.email.trim() === '') {
      alert('Please enter your email');
      return;
    }
    if (formData.password.trim() === '') {
      alert('Please enter your password');
      return;
    }
     const formDataToSend = new FormData();
     formDataToSend.append('name', formData.name);
     formDataToSend.append('email', formData.email);
     formDataToSend.append('password', formData.password);
     formDataToSend.append('address', formData.address);
     formDataToSend.append('role', formData.role);
     formDataToSend.append('image', avatarFile);

     try {
   console.log(formDataToSend)
      const response = await fetch('http://localhost:8000/auth/register', {
        method: 'POST',
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          address: formData.address,
          role:formData.role,   
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
       const data = await response.json();
       console.log('Form submitted successfully:', data);
     } catch (error) {
       console.error('Error submitting form:', error);
     }
// console.log(formData)
};

  return (
    <div className="body">
      <section className="background-radial-gradient overflow-hidden">
        <style dangerouslySetInnerHTML={{ __html: "\n    .background-radial-gradient {\n      background-color: hsl(218, 41%, 15%);\n      background-image: radial-gradient(650px circle at 0% 0%,\n          hsl(218, 41%, 35%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%),\n        radial-gradient(1250px circle at 100% 100%,\n          hsl(218, 41%, 45%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%);\n    }\n\n    #radius-shape-1 {\n      height: 220px;\n      width: 220px;\n      top: -60px;\n      left: -130px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n\n    #radius-shape-2 {\n      border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;\n      bottom: -60px;\n      right: -110px;\n      width: 300px;\n      height: 300px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n\n    .bg-glass {\n      background-color: hsla(0, 0%, 100%, 0.9) !important;\n      backdrop-filter: saturate(200%) blur(25px);\n    }\n  " }} />
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
              <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: 'hsl(218, 81%, 95%)' }}>
                The best offer <br />
                <span style={{ color: 'hsl(218, 81%, 75%)' }}>for your business</span>
              </h1>
              <p className="mb-4 opacity-70" style={{ color: 'hsl(218, 81%, 85%)' }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus, expedita iusto veniam atque, magni tempora mollitia
                dolorum consequatur nulla, neque debitis eos reprehenderit quasi
                ab ipsum nisi dolorem modi. Quos?
              </p>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong" />
              <div id="radius-shape-2" className="position-absolute shadow-5-strong" />
              <div className="card bg-glass">
                <div className="card-body px-4 py-5 px-md-5">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input type="text"
                            name="name" value={formData.name} onChange={handleChange} placeholder="Your Name "
                            id="form3Example1" className="form-control" />
                          <label className="form-label" htmlFor="form3Example1">Name</label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input type="text"
                            name="address" value={formData.address} onChange={handleChange} placeholder="Your Address "
                            id="form3Example2" className="form-control" />
                          <label className="form-label" htmlFor="form3Example2">Address</label>
                        </div>

                      </div>
                    </div>
                    <div className="form-outline row mb-4">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input type="email"
                            name="email" value={formData.email} onChange={handleChange} placeholder="Your Email "
                            id="form3Example3" className="form-control" />
                          <label className="form-label" htmlFor="form3Example3">Email</label>

                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">

                          <input
                            type="file"
                            id="avatar"
                            name="image"
                            accept="image/*"
                            className="form-control"
                            onChange={handleAvatarChange}
                            multiple
                          />
                          <label htmlFor="avatar" className="form-label">
                            Uplaod Your Avatar
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-outline mb-4">
                      <input type="password"
                        name="password" value={formData.password} onChange={handleChange} placeholder="Your Password"

                        id="form3Example4" className="form-control" />
                      <label className="form-label" htmlFor="form3Example4">Password</label>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block mb-4">
                      Sign up
                    </button>
                    <div className="text-center">
                      <p>or sign up with:</p>
                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-facebook-f" />
                      </button>
                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-google" />
                      </button>
                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-twitter" />
                      </button>
                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-github" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Signup;
