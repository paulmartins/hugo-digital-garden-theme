[![GitHub issues](https://img.shields.io/github/issues/paulmartins/hugo-digital-garden-theme?style=flat-square&logo=appveyor)](https://github.com/paulmartins/hugo-digital-garden-theme/issues)
[![GitHub forks](https://img.shields.io/github/forks/paulmartins/hugo-digital-garden-theme?style=flat-square&logo=appveyor)](https://github.com/paulmartins/hugo-digital-garden-theme/network)
[![GitHub stars](https://img.shields.io/github/stars/paulmartins/hugo-digital-garden-theme?style=flat-square&logo=appveyor)](https://github.com/paulmartins/hugo-digital-garden-theme/stargazers)
[![license](https://img.shields.io/github/license/paulmartins/hugo-digital-garden-theme?style=flat-square&logo=appveyor)](https://github.com/paulmartins/hugo-digital-garden-theme/blob/main/LICENSE)


# Digital Garden Theme for Hugo

A simple Hugo theme for your digital garden, inspired by Maggie Appleton [website](https://maggieappleton.com/)

[**DEMO**](https://hugo-digital-garden-demo.netlify.app/)

This theme includes:
* a digital garden / blog
* a projects portfolio
* library notes

![Home](https://github.com/paulmartins/hugo-digital-garden-theme/blob/main/images/screenshot.png)


## Getting started

1. Install hugo and create a new website: [https://gohugo.io/getting-started/quick-start/](https://gohugo.io/getting-started/quick-start/)
2. Add the theme to your website  
You can either use git submodule or clone the repo in your theme folder

    ```bash
    git submodule add https://github.com/paulmartins/hugo-digital-garden-theme.git themes/hugo-digital-garden-theme
    ```

    ```bash
    cd themes
    git clone https://github.com/paulmartins/hugo-digital-garden-theme.git
    ```

3. Customize your site in your `config.toml`. An example is given in the theme folder: `themes/digital-garden/exampleSite/config.toml`

4. Run the server and check your [localhost:1313](http://localhost:1313)
    ```bash
    hugo server
    ```

### Extra tips

You will write the content for your website in a `content` folder, for example in `content/garden/evergreen_example.md`. If you want to have your `content` folder in your root directory, you can copy that from the exampleSite folder to your root directory. In the root directory's `config.toml` you will need to  change the themesdir to have `themesdir = "./themes"`. You now run `hugo server` in the root directory of your project, and Hugo will start your website locally on an available port.

If you want to compare the website from this to the example site, you can start `hugo server` in the exampleSite directory too. Hugo will use different ports for each server, so you can compare the rendered pages with each other. 

To create custom styling, you can create `./static/css/my_style.css`. The CSS styling in here will override the theme's default styling. [Here](https://github.com/IdiosApps/IdiosApps.github.io/blob/main/static/css/my_style.css) is an example custom CSS file from a user's blog, and [here](https://idiosapps.github.io/garden/games-for-socials/) is one of their published pages looks. You can see the custom table formatting: custom header row colour, alternating row backgrounds, custom fonts, etc.


## Update to the latest version of the theme

If you used git submodule to add the theme (see Getting started) do

```bash
git submodule update --remote --rebase
```

If you clone the theme, just go in the theme folder and `pull`

```bash
cd themes/hugo-digital-garden-theme
git pull
```


[![Twitter](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Fpaulmartins%2Fhugo-digital-garden-theme)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fpaulmartins%2Fhugo-digital-garden-theme)