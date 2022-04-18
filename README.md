<h1 align="center">
  My portfolio setup
</h1>

## 🚀 Quick start

1. Check out this repository

2. Start up your page:

   ```shell
   yarn start
   ```

   or

   ```shell
   npm run start
   ```

3. **Open the code and start customizing!**

   Your site is now running at http://localhost:8000!

   Edit `src/pages/index.tsx` to see your site update in real-time!

## Used Gatsby plugins

- `gatsby-plugin-typegen`: used to dynamically generate types at build time from graphql data and queries

## More features

- `published`: flag in each content file to indicate whether the blog post should already be published and visible in the list of blog posts
- `ThemeProvider`: a React context that allows querying the current theme and setting a specific theme, themes will be rendered according to the CSS variables defined within `theme.css` (it works by setting a data-theme attribute at the div element surrounding the Gatsby DOM tree)
- `generate:css`: script in the package.json file that is using `typed-css-modules` in order to generate typescript conform css module files
