 // Profile.js
import React, { useEffect, useState } from 'react';

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('popx-user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const updatePhoto = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedUser = { ...user, photo: reader.result };
        localStorage.setItem('popx-user', JSON.stringify(updatedUser));
        setUser(updatedUser);
      };
      reader.readAsDataURL(file);
    }
  };

  if (!user) return <div className="container py-5">Loading...</div>;

  return (
    <div className='container-fluid bg-white justify-content-start'>
      <div>
        <h1 className='col py-4'>Account Settings</h1>
      </div>

      <div className='container ms-0 shadow-lg bg-secondary-emphasis'>
        <div className='row p-1 ms-0 text-start aline-items-center'>
          <div className='col-3 position-relative ps-0 text-start'>
            <img
              src={user.photo || 'https://randomuser.me/api/portraits/women/44.jpg'}
              alt="Profile"
              className="rounded-circle"
              width={100}
              height={100}
            />
            <label htmlFor="upload-photo" className="position-absolute" style={{ bottom: '5px', left: '90px' }}>
              <i className="camera bi-camera-fill fs-6 text-white rounded-circle p-2"></i>
            </label>
            <input
              type="file"
              accept="image/*"
              id="upload-photo"
              onChange={updatePhoto}
              style={{ display: 'none' }}
            />
          </div>

          <div className='user-details col-9 text-start ps-3'>
            <h5>{user.fullName}</h5>
            <p className="text-muted text-start">{user.email}</p>
          </div>
        </div>

        <div className='row'>
          <p className='mt-4 px-4'>{user.description || 'No description provided.'}</p>
          <p className="text-muted px-4 pb-3">Created on: {user.createdAt}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;