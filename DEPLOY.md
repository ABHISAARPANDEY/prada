# Deploying PRADA Financial Dashboard to Netlify

## Prerequisites
- A Netlify account (sign up at https://www.netlify.com)
- Your code pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### Option 1: Deploy via Netlify Dashboard (Recommended)

1. **Push your code to GitHub/GitLab/Bitbucket**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Connect your Git provider (GitHub/GitLab/Bitbucket)
   - Select your repository

3. **Configure Build Settings**
   - **Build command**: `npm run build` (or leave empty - netlify.toml handles it)
   - **Publish directory**: Leave empty (the Next.js plugin handles this automatically)
   - **Node version**: 18 (or latest LTS)

4. **Deploy**
   - Click "Deploy site"
   - Wait for the build to complete (usually 2-5 minutes)

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Initialize and Deploy**
   ```bash
   netlify init
   # Follow the prompts to create a new site or link to existing
   
   # Build the project
   npm run build
   
   # Deploy
   netlify deploy --prod
   ```

### Option 3: Drag & Drop (Not Recommended for Next.js)

⚠️ **Note**: Drag & drop doesn't work well with Next.js apps. Use Option 1 or 2 instead.

## Important Notes

- The `netlify.toml` file is already configured for Next.js with the official plugin
- Make sure your Node version is 18 or higher
- The `@netlify/plugin-nextjs` plugin automatically handles Next.js routing and optimization
- Environment variables (if any) should be set in Netlify dashboard under Site settings → Environment variables

## Post-Deployment

After deployment, you can:
- Set up a custom domain in Netlify dashboard
- Configure environment variables if needed
- Enable automatic deployments on git push
- Set up form handling, redirects, etc.

## Troubleshooting

If you encounter issues:
1. Check build logs in Netlify dashboard
2. Ensure Node version is 18+
3. Verify all dependencies are in `package.json`
4. Check that `netlify.toml` is in the root directory

