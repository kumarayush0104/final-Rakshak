# 🚀 Rakshak – Encrypted Document Sharing System

### 🔐 Empowering Data Privacy in the Age of Digital Threats

---

## 📋 Problem Statement

Did you know that **over 70% of public printers don’t auto-delete files** after printing? This exposes sensitive documents to unauthorized access and potential data breaches. Rakshak addresses this critical cybersecurity gap by providing a secure, encrypted document sharing system that ensures your files are protected at every step.

---

## ✨ Key Features

- **Encrypted Upload:** AES-256 encryption ensures your documents are safe at rest and in transit.
- **One-Time QR Code:** Generate a unique QR code for one-time access to your document.
- **15-Second Auto-Delete:** Files are automatically deleted 15 seconds after access to prevent unauthorized retrieval.
- **Trace-Free Architecture:** No file trace left after use, ensuring confidentiality.
- **Secure Cloud Storage:** Leveraging Cloudinary for encrypted and reliable file storage.
- **JWT Authentication:** Secure user authentication and authorization.
- **User-Friendly Interface:** Built with React.js and Tailwind CSS for a smooth user experience.

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Tailwind CSS, Vite
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **File Storage:** Cloudinary
- **Deployment:** Vercel

---

## 🏗️ Architecture

```
+----------------+        +----------------+        +----------------+
|                |        |                |        |                |
|   React.js     | <----> |   Express.js   | <----> |    MongoDB     |
|  (Frontend)    |        |   (Backend)    |        |  (Database)    |
|                |        |                |        |                |
+----------------+        +----------------+        +----------------+
        |                         |
        |                         |
        v                         v
+----------------+        +----------------+
|                |        |                |
|   Cloudinary   |        |  JWT Auth      |
| (File Storage) |        | (Security)     |
|                |        |                |
+----------------+        +----------------+

QR Code Generation & One-Time Access Flow Integrated
```

---

## ⚙️ Installation

1. Clone the repository:

```bash
git clone https://github.com/kumarayush0104/final-Rakshak
cd final\ Rakshak
```

2. Install dependencies for server and client:

```bash
npm install
cd client
npm install
```

3. Run the development servers:

```bash
# In root directory (server)
npm run server

# In client directory
npm run dev
```

---

## 🌐 Live Demo

[Live Demo Link](https://rakshak-official.netlify.app/)  
*Video demo coming soon...*

---

## 🖼️ Screenshots

| Screenshot 1          | Screenshot 2          | Screenshot 3          |
|-----------------------|-----------------------|-----------------------|
| ![Screenshot1](path)  | ![Screenshot2](path)  | ![Screenshot3](path)  |
| Upload Page           | QR Code Generation    | Document Access Page  |

---

## 🚀 Future Scope

- Integration with **IoT-enabled printers** for direct secure printing.
- **Biometric QR codes** for enhanced user authentication.
- **Blockchain-based logs** for immutable audit trails.
- Development of **government modules** for secure document handling.

---

## 👥 Contributors

- **Team Name:** Learners  
- **Members:**  
  - Ayush Kumar  
  - Shyam Kumar (Leader)

- **Mentor:** None

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

*Made with ❤️ for cybersecurity and privacy.*
