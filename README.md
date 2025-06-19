## PopX Account System

A responsive and mobile-friendly user authentication interface for the PopX platform, built using **React**, **React Router**, and **React-Bootstrap**.

---

## 🚀 Features

- 👤 Create Account (Signup)
- 🔐 Secure Login Page
- ✅ Required fields with validations
- 📱 Mobile-optimized layout (Adobe XD design inspired)
- 🌈 Custom styled radio buttons and buttons
- 🧠 Data persisted locally using `localStorage`

---

## 

### Welcome Screen
- Welcome message with action buttons for Signup and Login

### Signup Page
- Full name, phone number, email, password, company name
- "Are you an Agency?" with custom radio options
- Profile photo upload and optional description
- Responsive, clean form design

### Login Page
- Email and password fields
- Clean layout with central alignment

## Profile Page
- Profile picture
- You can update profile picture 
- Details that is filled by user

---

## 🛠️ Tech Stack

- [React](https://reactjs.org/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [React Router DOM](https://reactrouter.com/)
- HTML5, CSS3 (Mobile-first design)
- `localStorage` for temporary user state

---

## 📂 Project Structure
public/
└── index.html
src/
│
├── components/
│ ├── Welcome.js
│ ├── SignUp.js
│ |── Login.js
  └── Profile.js
|
│
├── App.js
├── App.css
|── index.js
└── index.css

## How to run
1. Clone the repository:
2. Install dependencies:
    - npm install
3. Start the development server:
    - npm start
    - The app will run on http://localhost:3000



## Notes:
1. This app uses localStorage to simulate backend user management.
2. No actual user authentication is implemented.
3. A deployment section for Netlify/Vercel.


## Contact
  - Made with 💜 by [Mahesh Pal]
