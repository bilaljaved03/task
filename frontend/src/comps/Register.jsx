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
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.password.trim()) {
      errors.password = 'Password is required';
    }
    if (!formData.address.trim()) {
      errors.address = 'Address is required';
    }
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('password', formData.password);
      formDataToSend.append('address', formData.address);
      formDataToSend.append('role', formData.role);
      formDataToSend.append('image', avatarFile);

      try {
        const response = await fetch('http://localhost:8000/auth/register', {
          method: 'POST',
          body: formDataToSend,
        });
        const data = await response.json();
        console.log('Form submitted successfully:', data);
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
  };

  return (
    <div className="body">
      <div className="form-style-5">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="avatar-container"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}

          >
            <img
              style={{
                height: 200,
                borderRadius: '50%'
              }}
              src={avatarUrl}
              alt=""
            />
          </div>
          <legend>
            <span className="number">1</span>
            <h1 className="text-center">
              Register
            </h1>
            <input type="file" name="image" accept="image/*" onChange={handleAvatarChange} multiple />
          </legend>
          <fieldset>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name *" />
            {formErrors.name && <span className="error">{formErrors.name}</span>}
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email *" />
            {formErrors.email && <span className="error">{formErrors.email}</span>}
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Your Password *" />
            {formErrors.password && <span className="error">{formErrors.password}</span>}
            <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Your Address *" />
            {formErrors.address && <span className="error">{formErrors.address}</span>}
            <label htmlFor="role">Role:</label>
            <select id="role" name="role" value={formData.role} onChange={handleChange}>
              <optgroup label="Roles">
                <option value="Admin">Admin</option>
                <option value="User">User</option>
              </optgroup>
            </select>
          </fieldset>
          <input type="submit" defaultValue="Apply" />
        </form>
      </div>
    </div>
  );
};

export default Signup;
