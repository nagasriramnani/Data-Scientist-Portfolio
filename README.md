# 🚀 Naga Sri Ram Kochetti – Data Scientist Portfolio

This is the personal portfolio website of **Naga Sri Ram Kochetti**, designed to showcase projects, skills, certifications, education, and experience in the field of **Data Science, AI, ML, and DevOps**.

🌐 **Live Website:** [https://nagasriram.com](https://nagasriram.com)

---

## 🛠️ Tech Stack

- ⚛️ React.js (Vite)
- 🎨 Tailwind CSS & Custom CSS
- 🌌 Particles.js (for animated backgrounds)
- 🧩 Lottie JSON Animations
- 📦 GitHub for Version Control
- 🚀 Netlify for Hosting & CI/CD
- 🌐 GoDaddy for Domain Management

---

## 📁 Folder Structure

```
portfolio-site/
├── public/
│   └── hero-illustration.png     # Site icon
├── src/
│   ├── assets/                   # Lottie animations, images, icons
│   ├── components/               # All page components
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html                    # Main HTML file
├── package.json
└── README.md
```

---

## 💻 Run the Project Locally

### Step 1: Clone the Repository

```bash
git clone https://github.com/nagasriramnani/Data-Scientist-Portfolio.git
cd Data-Scientist-Portfolio
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Start the Development Server

```bash
npm run dev
```

Then visit: `http://localhost:5173`

---

## 🚀 Deployment Using Netlify

### ✅ Step 1: Push Project to GitHub

```bash
git init
git remote add origin https://github.com/nagasriramnani/Data-Scientist-Portfolio.git
git add .
git commit -m "Initial commit"
git push -u origin main
```

### ✅ Step 2: Set Up Deployment on Netlify

1. Visit: [https://app.netlify.com](https://app.netlify.com)
2. Click **"Add New Site" > "Import from Git"**
3. Connect your GitHub account
4. Choose the `Data-Scientist-Portfolio` repo
5. Set build settings:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
6. Click **Deploy Site**

Netlify will build and deploy your portfolio to a unique subdomain like:
```
https://your-site-name.netlify.app
```

---

## 🌐 Connect Custom Domain (GoDaddy)

### ✅ Step 1: Add Domain in Netlify

1. In Netlify, go to **"Site settings > Domains"**
2. Click **"Add custom domain"** → enter `nagasriram.com`

### ✅ Step 2: Configure GoDaddy DNS

1. Go to [GoDaddy DNS Management](https://dcc.godaddy.com/)
2. Remove any existing **A**, **AAAA**, or **CNAME** entries that conflict
3. Add the following DNS records:

| Type | Name | Value                 | TTL     |
|------|------|------------------------|---------|
| A    | @    | 75.2.60.5             | Default |
| A    | @    | 99.83.190.102         | Default |
| CNAME | www | your-netlify-subdomain.netlify.app | Default |

> Replace `your-netlify-subdomain` with your actual Netlify subdomain.

### ✅ Step 3: Verify Domain

1. Go back to Netlify → **Domain settings**
2. Click **"Verify DNS configuration"**
3. Once verified, your site will be live on **https://nagasriram.com**

---

## 🔁 Update and Redeploy

Every time you push changes to GitHub:

```bash
git add .
git commit -m "update"
git push
```

Netlify will **automatically rebuild and deploy** your changes!

---

## 🧩 Lottie Animations

- Animations are stored in `src/assets/` as JSON files
- Integrated using the `lottie-react` library
- Used for About, Experience, and Education sections

---

## 🧠 Features

- ✅ Hero with animated particles and social links
- ✅ About with Lottie UI illustration
- ✅ Experience timeline with glowing effects
- ✅ Projects section with hover cards
- ✅ Education timeline with animation
- ✅ Certifications with grouped hover cards
- ✅ Contact form with email + social links
- ✅ Fully responsive and visually dynamic
- ✅ Custom domain connected via GoDaddy

---

## 📬 Contact

- 📧 **Email**: nagasriramkochetti@gmail.com
- 🔗 **LinkedIn**: [linkedin.com/in/naga-sri-ram-kochetti](https://www.linkedin.com/in/naga-sri-ram-kochetti-72a464189/)
- 💻 **GitHub**: [github.com/nagasriramnani](https://github.com/nagasriramnani)

---

> Built with 💙 by Naga Sri Ram Kochetti

