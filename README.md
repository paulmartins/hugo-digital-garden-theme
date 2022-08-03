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

5. To demo the example site, run the server on the directory of example site
    ```bash
    cd themes/exampleSite
    hugo server
    ```

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