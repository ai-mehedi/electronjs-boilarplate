# Electron Vite React Tailwind Boilerplate

This is a boilerplate project to set up **Electron** with **Vite**, **React**, and **Tailwind CSS**. It's perfect for building desktop applications with a fast development setup.

## Requirements

- **Node.js** >= 16.0.0
- **npm** (Node Package Manager)

## Getting Started

Follow these steps to set up the project on your machine:

### 1. Clone the Repository

```bash
git clone https://github.com/ai-mehedi/electronjs-boilarplate.git
cd electronjs-boilarplate




2. Install Dependencies
Install the required dependencies with npm:

bash
Copy
Edit
npm install
3. Run the Development Server
To run the development server and start Vite:

bash
Copy
Edit
npm run dev
This will start Vite in development mode. You can open your application in a browser at http://localhost:5173/.

4. Start the Electron App
Once Vite is running, you can launch the Electron app with the following command:

bash
Copy
Edit
npm run start
This will open the Electron application with the Vite dev server running in the background.

5. Build for Production
To build the app for production:

bash
Copy
Edit
npm run build
This will create a production-ready build of your app inside the dist-electron folder.

6. Run the Production Build
To run the production build, use the following command:

bash
Copy
Edit
npm run start
This will launch your app with the production build.

Project Structure
Here's an overview of the project structure:

bash
Copy
Edit
your-project/
├── dist-electron/        # Compiled Electron files for production
├── node_modules/         # Node.js modules
├── src/                  # Source files for the app
│   ├── assets/           # Static assets (images, etc.)
│   ├── components/       # React components
│   ├── App.jsx           # Main React component
│   ├── index.html        # HTML template
│   ├── main.js           # Electron main process
│   ├── preload.js        # Electron preload script
│   ├── electron.vite.config.js  # Vite config for Electron
│   ├── tailwind.config.js  # Tailwind CSS configuration
│   ├── postcss.config.js  # PostCSS configuration
│   └── style.css         # Global styles (Tailwind)
├── package.json          # Project metadata and scripts
├── README.md             # Project documentation
└── .gitignore            # Git ignore file
Technologies Used
Electron: A framework to build cross-platform desktop apps with JavaScript, HTML, and CSS.
Vite: A fast build tool and development server for modern web projects.
React: A JavaScript library for building user interfaces.
Tailwind CSS: A utility-first CSS framework for creating custom designs.
Troubleshooting
If you face issues with dependencies or package installation, try running:
bash
Copy
Edit
npm install --force
To fix potential build issues, delete the node_modules folder and run:
bash
Copy
Edit
rm -rf node_modules
npm install
License

Feel free to replace `ai-mehedi` in the `git clone` URL with your GitHub username if you're hosting this on GitHub.

This **README.md** includes all the necessary steps to get started, the project structure, and some troubleshooting tips.
