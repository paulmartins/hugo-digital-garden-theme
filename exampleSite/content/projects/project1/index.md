---
title: "Markdown Syntax"
date: 2021-08-01
draft: false
project_tags: ["markdown"]
status: "evergreen"
weight: 2
summary: "Example of markdown syntax you can use to edit your content"
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

This is just an intro paragraph to show how the initial letter of each article or post will look.
The rest of the page shows you the markdown syntax supported by this theme: headings, typography, images, blockquote, lists, code blocks and tables.
For more markdown syntax guide, please see this [link](https://www.markdownguide.org/basic-syntax/).

--- 

# Heading level 1
## Heading level 2 {#custom-id-2}
### Heading level 3 
#### Heading level 4

---

This is the first line **with bold text**.  
This is the second line *with italic text*.  
This is the third line  ***with bold italic text***.  
This is the fourth line ~~with strikethrough text~~.  
This is the fifth line [with a link to heading level 2](#custom-id-2).  
This is the sixth line with emoji 🥳.  

First Term
: This is the definition of the first term.

Second Term
: This is one definition of the second term.
: This is another definition of the second term.

Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote.

[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.

--- 

> This is a blockquote.

> This is a blockquote
>
> with multiple paragraphs

> This is a
>
>> nested blockquote

> ### This is a header level 3
>
> - First item
> - Second item.
>
>  *Italic* and also **bold** are supported.

---

{{< figure src="jessica-weiller-GAw5wFLVWVo-unsplash.jpg" title="Just chilling on my favorite tree in San Diego Zoo" width="100%" attr="https://unsplash.com/@jweiller?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">}}


For more image processing methods, you can create your own shortcode. Check this [link](https://gohugo.io/content-management/image-processing/) to see what you can do.

--- 

Ordered list:

1. First item
2. Second item
3. Third item
    1. Indented item
    2. Indented item
4. Fourth item

Unordered lists:
- First item
- Second item
- Third item
    - Indented item
    - Indented item
- Fourth item

--- 

This is an `inline code block`. See below for a multi-line code block with syntax highlighting.

```python
# Python syntax highlighting
def it_is_true():
    return True

def it_is_false():
    return False
```

```css
/* CSS syntax highlighting */
html {
    text-align: left;
}
```

---

| Column 1 | Column 2 |
|:---------|:---------|
| Cell 1,1 | Cell 1,2 | 
| Cell 2,1 | Cell 2,2 | 
