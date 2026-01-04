# GitHub Deployment Guide

## 📋 Prerequisites
- GitHub account
- Git installed on your computer

## 🚀 Deployment Steps

### Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Fill in the details:
   - **Repository name**: `portfolio-website` (or any name you prefer)
   - **Description**: "My personal portfolio website"
   - **Visibility**: Public (required for free GitHub Pages)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click "Create repository"

### Step 2: Push Your Code to GitHub

Run these commands in your terminal (from the portfolio-website folder):

```bash
# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git

# Push your code
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. In the left sidebar, click "Pages"
4. Under "Source", you should see "GitHub Actions" - this is correct!
5. The deployment will start automatically

### Step 4: Wait for Deployment

1. Go to the "Actions" tab in your repository
2. You'll see the "Deploy to GitHub Pages" workflow running
3. Wait for it to complete (usually 1-3 minutes)
4. Once done, you'll see a green checkmark ✅

### Step 5: Access Your Portfolio

Your portfolio will be available at:
```
https://YOUR_USERNAME.github.io/portfolio-website/
```

## 🎯 Custom Domain (Optional)

If you want to use your own domain (e.g., abhisheksharma.dev):

1. Buy a domain from a registrar (Namecheap, GoDaddy, etc.)
2. In your repository Settings → Pages:
   - Enter your custom domain
   - Wait for DNS check
3. Add DNS records at your domain registrar:
   ```
   Type: CNAME
   Name: www
   Value: YOUR_USERNAME.github.io
   
   Type: A (4 records)
   Name: @
   Values:
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

## 🔄 Updating Your Portfolio

Whenever you make changes:

```bash
git add .
git commit -m "Description of your changes"
git push
```

GitHub Actions will automatically rebuild and deploy your site!

## 📝 Quick Commands Reference

```bash
# Check repository status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Your message here"

# Push to GitHub
git push

# View commit history
git log --oneline

# Create a new branch
git checkout -b feature-name

# Switch branches
git checkout main
```

## ⚙️ Troubleshooting

### Deployment Failed
- Check the Actions tab for error messages
- Ensure `npm run build` works locally
- Verify all dependencies are in package.json

### 404 Page Not Found
- Check if GitHub Pages is enabled in Settings
- Verify the correct branch is selected
- Wait a few minutes for DNS propagation

### Resume Not Downloading
- Ensure the PDF is in the `/public` folder
- Check the file path in your components
- Clear browser cache and try again

## 🎨 Alternative: Deploy to Other Platforms

### Vercel (Recommended - Very Easy!)
```bash
npm install -g vercel
vercel
```
Follow the prompts. Your site will be live in seconds!

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

Both platforms offer:
- ✅ Free hosting
- ✅ Custom domains
- ✅ Automatic HTTPS
- ✅ Faster than GitHub Pages
- ✅ Better performance

## 📧 Need Help?

If you encounter any issues:
1. Check the GitHub Actions logs
2. Ensure all files are committed
3. Verify package.json has all dependencies
4. Try building locally first: `npm run build`

---

**Your portfolio is now ready to go live! 🚀**
