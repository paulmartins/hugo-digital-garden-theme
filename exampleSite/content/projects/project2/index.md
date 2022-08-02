---
title: "Theme Documentation"
date: 2021-07-01
draft: false
project_tags: ["docs", "how-to"]
status: "seeding"
summary: "Details on how to create and update content on your site"
weight: 1
---

It is super easy to create and update the content of this theme. There are only 2 places that matters depending on waht you need to update:
* your `config.toml` file for general website content (navigation bar, footer, title, ...)
* your `content/` folder for page specific content (post, project, about, book ...)

The syntax of the `config.toml` should be straightforward. Not that you don't need to specify a `themesdir` if you already have the theme in you theme folder.

To create a new post or project, just create new markdown files in the relatives folder with the frontmatter detailed below

### Post front matter

```markdown
---
title: "Title"
date: 2019-01-01
lastmod: 2020-02-02
draft: false
garden_tags: ["tag1", "tag2"]
summary: " "
status: "evergreen"
---
```
* If you don't want any `summary` to be displayed, leave a whitespace otherwise the default summary will be the first sentence of your post.  
* The `garden_tags` are used as filter on the Digital Garden page.  
* The `status` can be one of `seeding`, `growing` or `evergreen`. You can customized those by creating a new file in `layouts/partials/status.html` (look at `themes/digital-garden/layouts/partials/status.html` for an example).

### Project front matter

```markdown
---
title: "Project Title"
date: 2021-01-01
draft: false
project_tags: ["markdown"]
status: "evergreen"
summary: "Project summary"
links:
    external_link:
        text: "Some external link"
        icon: "fas fa-external-link-alt"
        href: "#"
        weight: 1
    another_link:
        text: "Another github link"
        icon: "fab alt brands fa-github"
        href: "#"
        weight: 2
---
```
You can create a new project by creating a new folder under `content/projects/`.  
Any image in this folder with the word `feature` in its name will be used as the project illustration.  
Any `index.md` file in this folder with the front matter above will be used to create the project page.  
In addition to the post frontmatter, the project one get a `links` key if you want to have links to external source (github, ...).


### Shortcodes

Split text into columns with the `row` and `column` shortcodes.

{{< row >}}
{{< column >}}
#### Col 1 Title
column 1 text
{{< /column >}}
{{< column >}}
#### Col 2 Title
column 2 text
{{< /column >}}
{{< /row >}}

Draw mermaid graph

{{< mermaid >}}
graph LR;
   A[sheets ream<sup>-1</sup> <br> 500] -->|-1| B[thickness <br> 10<sup>-2</sup>cm <br>] 
   C[thickness ream<sup>-1</sup> <br> 5cm] --> B
   B --> D[volume <br> 1cm<sup>3</sup>]
   E[height <br> 6cm] --> D
   F[width <br> 15cm] --> D
{{< /mermaid >}}

---
<small>Red panda icon made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></small>