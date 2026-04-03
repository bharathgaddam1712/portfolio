# 🚀 Portfolio - Bharath Gaddam

Modern, high-performance portfolio website built with **React**, **TypeScript**, and **Tailwind CSS**.

🔗 **Live Demo**: [https://bharathgaddam1712.github.io/portfolio](https://bharathgaddam1712.github.io/portfolio)

---

## 💻 Local Development

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

---

## 🔄 Deployment Workflow (How to Update)

Follow these steps whenever you make changes to ensure your live portfolio stays up-to-date:

### 1. Test Locally
Ensure everything looks good by running the dev server:
```bash
pnpm run dev
```

### 2. Save Your Changes (Git)
Commit your changes to your source control:
```bash
git add .
git commit -m "Update: [Brief description of what you changed]"
```

### 3. Push to GitHub
Sync your local changes with the remote repository:
```bash
git push origin main
```

### 4. Publish to Live Site
Deploy the build to GitHub Pages:
```bash
npm run deploy
```
> [!NOTE]
> It may take 1-2 minutes for the changes to appear on the live site after the "Published" message appears.

---

## 📁 Project Structure

- `src/`: Main source code
- `components/`: Reusable UI components
- `constants.ts`: Site configuration and text content
- `public/`: Static assets
