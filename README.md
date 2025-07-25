# 💼 MyPortfolio – Personal Portfolio Website

This is a **modern and responsive personal portfolio website** built using **React**, **Tailwind CSS**, and **Vite** — focused entirely on frontend development. It is build to showcases my skills, Projects, works.

---

## ✅ Features Implemented

* ✅ Smooth scrolling and animated transitions using AOS
* ✅ Modular component-based structure with React
* ✅ Clean and responsive layout using Tailwind CSS
* ✅ Dynamic sections: About, Projects, Contact, and more
* ✅ Deployed live using GitHub Pages

---

## 🚀 GitHub Pages Live Hosted Link

🔗 [GitHub Pages Link](https://diya94.github.io/MyPortfolio)

---

## 📁 Folder Structure

```
MyPortfolio/
├── public/
│   └── index.html
├── src/
│   ├── Components/
│   │   ├── about.jsx
│   │   ├── contact.jsx
│   │   ├── footer.jsx
│   │   ├── header.jsx
│   │   ├── home.jsx
│   │   └── projects.jsx
│   ├── assets/               # Static files (images, icons, etc.)
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

---

## 🧰 Technologies Used

* **React** – Component-based frontend library
* **Tailwind CSS** – Utility-first CSS framework
* **Vite** – Fast build tool and dev server
* **AOS (Animate on Scroll)** – For smooth animations

---

## 🛠️ How to Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/diya94/MyPortfolio.git
   cd MyPortfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open in your browser at `http://localhost:5173`

---

## 🌐 Deployment

This project is deployed using **GitHub Pages** via the `gh-pages` branch.
Configured using the `gh-pages` package and Vite’s `base` setting:

```js
// vite.config.js
export default defineConfig({
  base: "/MyPortfolio/",
  plugins: [react()],
});
```

To deploy:

```bash
npm run build
npm run deploy
```

---

## 👩‍💻 Author

Developed by **Diya Karmakar**

* 💼 [GitHub Profile](https://github.com/diya94)
* 🔗 [LinkedIn](https://www.linkedin.com/in/diya-karmakar45/)

---

## 🙌 Acknowledgements

Project submitted for **MERN Stack Internship – Week 2 Task**, Task2:  React Portfolio Website  
**ARCOIRIS Logics Pvt. Ltd.**
---

## 📦 GitHub Repository

[GitHub Repository](https://github.com/diya94/MyPortfolio)
