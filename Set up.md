Below is a step-by-step guide on setting up a **React** (Next.js) project with **Tailwind CSS**, **shadcn/ui**, and **Framer Motion**. We will create a basic scaffold that you can use as a portfolio or landing page for a tech company. The instructions are fairly detailed to help a junior dev get started.

> **Note**: Although you can use plain React (with CRA or Vite), shadcn’s components are specifically designed with **Next.js 13** (App Router) in mind. This setup uses Next.js for a modern, opinionated, and production-ready React framework.

---

## 1. Create a new Next.js 13 project

1. Make sure you have **Node.js** (version 16 or higher) installed on your machine.  
2. Open your terminal (or command prompt) and run:

   ```bash
   npx create-next-app@latest my-portfolio
   ```

3. When prompted, give your project a name (or accept defaults).  
4. Once this is done, navigate into your new project folder:

   ```bash
   cd my-portfolio
   ```

5. Open the project in your favorite code editor (e.g., VS Code).

---

## 2. Install and configure Tailwind CSS

1. In your project folder, install the required Tailwind packages:

   ```bash
   npm install -D tailwindcss postcss autoprefixer
   ```

2. Initialize Tailwind CSS (this creates `tailwind.config.js` and `postcss.config.js`):

   ```bash
   npx tailwindcss init -p
   ```

3. In your `tailwind.config.js`, update the `content` array so Tailwind can scan your files for class names. Make sure it includes the new **App Router** structure (`app/**/*.{js,ts,jsx,tsx}`) and any components directory:

   ```js
   /** @type {import('tailwindcss').Config} */
   module.exports = {
     content: [
       './app/**/*.{js,ts,jsx,tsx}',
       './components/**/*.{js,ts,jsx,tsx}',
       // If you have any other folders with components, include them here
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

4. In `app/layout.js` (or `app/layout.tsx` if using TypeScript), import the Tailwind CSS styles. If the file doesn’t exist yet, create it. Make sure it exports a layout component that wraps your app. For example:

   ```jsx
   // app/layout.js
   import './globals.css' // This is where we’ll import tailwind's base styles

   export const metadata = {
     title: 'My Portfolio',
     description: 'A portfolio site using Next.js, Tailwind, shadcn, and Framer Motion',
   }

   export default function RootLayout({ children }) {
     return (
       <html lang="en">
         <body>{children}</body>
       </html>
     )
   }
   ```

5. Create a `globals.css` in the `app` folder if it’s not already there, and add the Tailwind directives:

   ```css
   /* app/globals.css */
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

   That’s it for basic Tailwind setup!

---

## 3. Initialize shadcn/ui

[shadcn/ui](https://ui.shadcn.com/) is a collection of re-usable components built using Tailwind CSS and Radix UI. It’s easiest to install via the CLI.

1. Run the following command in your project folder:

   ```bash
   npx shadcn-ui init
   ```

   This command will prompt you to select various options, such as the **base directory** (default: `components`) and whether to overwrite or rename existing files. For a fresh project, you can accept defaults.

2. After installation, you’ll have a `components` folder with various pre-built components (like `button`, `dialog`, etc.) and some utility files.

3. (Optional) You can now run commands such as `npx shadcn-ui add button` to add or update specific components from the library.

4. Open up one of the shadcn components (e.g., `components/ui/button.tsx`) to see how it’s structured and how it uses Tailwind classes.

---

## 4. Install Framer Motion

[Framer Motion](https://www.framer.com/motion/) is a popular animation library for React. To install:

```bash
npm install framer-motion
```

We will demonstrate a simple usage shortly.

---

## 5. Project Structure Overview

Your folder structure might look like this after following the steps above:

```
my-portfolio/
├─ app/
│  ├─ layout.js        (Root layout for Next.js)
│  ├─ globals.css      (Tailwind imports)
│  └─ page.js          (Your main landing page)
├─ components/
│  ├─ ui/             (shadcn/ui components)
│  └─ [maybe other custom components...]
├─ public/
├─ tailwind.config.js
├─ postcss.config.js
├─ package.json
└─ ...other config files
```

---

## 6. Add a Simple “Hero” Section with Animations

Let’s add a simple “Hero” section component in our `app/page.js` to show how you might use **Framer Motion** and a **shadcn** button.

### 6.1 Example `page.js`

```jsx
// app/page.js
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      {/* Animated heading */}
      <motion.h1
        className="text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Welcome to Our Tech Company
      </motion.h1>

      <motion.p
        className="text-lg mb-4 max-w-xl text-center text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        We build innovative solutions to help grow your business.
      </motion.p>

      {/* Using a shadcn/ui button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <Button variant="default" size="lg">
          Get in Touch
        </Button>
      </motion.div>
    </main>
  )
}
```

Explanation:

- We import `motion` from **Framer Motion** to wrap our elements with animation props (`initial`, `animate`, `transition`).  
- We import `Button` from the shadcn UI components.  
- We use Tailwind classes like `flex`, `justify-center`, `items-center`, etc. to style our layout.

---

## 7. Running the Development Server

After everything is installed and configured, you can run the development server:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser to see your new portfolio scaffold in action.

---

## 8. Next Steps

1. **Explore shadcn Components**  
   - You’ll find a variety of ready-to-use components in the `components/ui/` folder.  
   - They are well-structured and can be further customized with Tailwind classes.

2. **Add Pages and Routing**  
   - With Next.js 13, you can create new routes by adding folders/files inside the `app/` directory. For example:
     ```
     app/
     ├─ about/
     │  └─ page.js
     └─ contact/
        └─ page.js
     ```
   - Each folder with a `page.js` (or `page.tsx`) becomes a route (e.g., `/about`, `/contact`).

3. **Create Reusable Components**  
   - You might want to build a `<Navbar />` or `<Footer />` in your `components/` directory.  
   - You can use Framer Motion for subtle transitions when these elements mount/dismount.

4. **Deploying**  
   - When ready, you can deploy your Next.js project to services like Vercel or Netlify easily.

---

## Recap

- **Next.js** for a modern React environment with file-based routing and server-side rendering capabilities.  
- **Tailwind CSS** for utility-first styling and rapid UI development.  
- **shadcn/ui** for pre-built, accessible, and easily customizable components.  
- **Framer Motion** for smooth, declarative animations.

With these tools, you have a powerful, production-ready scaffold for your tech portfolio site. Customize it further, add pages and sections as needed, and you’ll have a polished, responsive, and animated website ready for showcase or client presentations.

---

**Happy coding!** If you have any questions about any step, feel free to ask.