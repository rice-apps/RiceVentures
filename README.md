<h1 align="center">
  Rice Ventures Website
</h1>

# Client FAQs & Troubleshooting
*I just updated an item on Contentful, but I don't see it showing up on the website.* 

**There could be a few possibilities in this situation:**
1. Ensure that you published the changes on Contentful; the rebuilding process for the website is only set to occur after publish events on Contentful.
2. Make sure to wait 2-3 minutes after publishing your changes, as the rebuilding process requires this much time to rebuild.
3. If the content you changed includes a rich text field or image (ex: Rice Ventures Leadership members), make sure these fields are completed; if they are not, the rebuilding process will fail. This will be fixed soon.


# 🚀 Quick start for Developers

1.  **Pull the latest version from here or clone the repo for the first time.**

    To pull the latest version, just run `git pull origin`. To clone the repo, find the HTTPS link above and use it with `git clone <link>`.

2.  **Start developing.**

    If you're not already inside the project folder, navigate inside and then run `npm run develop`.

    ```shell
    cd rice-ventures/
    npm run develop
    ```
    
    Your site should now be running at http://localhost:8000! 
    
3.  **Create a new branch**

    Now that everything is setup, shut down the `npm run develop` with a <kbd>ctrl-c</kbd>. Next, run `git checkout -b feature/<branch name>` with <branch name> being an appropriate name for your task.

3.  **Finally, push this new branch upstream and then feel free to start working on your task!**

    Push the branch upstream with `git push -u origin/feature/<branch name>` and then run `npm run develop` again to see your changes live throughout development.
    
    Edit `src/pages/index.js` to see your site update in real-time!

4.  **Learn more**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
