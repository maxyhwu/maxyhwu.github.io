---
layout: default
show_news: false
show_pubs: true
show_experience: false
show_draft: false
---

I am a Computer Science PhD student at Purdue University, advised by Prof. [Yuxiang Peng](https://pickspeng.github.io). I am broadly interested in programming languages.

Prior to that, I was a full-time research assistant at the [Institute of Information Science, Academia Sinica](https://www.iis.sinica.edu.tw/en/index.html), supervised by Prof. [Yu-Fang Chen](https://guluchen.github.io).

I received my BBA in [Information Management](https://management.ntu.edu.tw/en/IM) from [National Taiwan University](https://www.ntu.edu.tw/english/) in 2024.

{% if page.show_news %}
### News
{% include_relative news.md %}
{% endif %}

{% if page.show_pubs %}
### Talks and Publications
{% include_relative pubs.md %}

<!--
{% for pub in site.data.publication %}
1. {{ pub.title }}
   {% if pub.links %}
     {% for item in pub.links %}
     <a href="{{ item.url }}">{{ item.name }}</a>
     {% unless forloop.last %} | {% endunless %}
     {% endfor %}
   {% endif %}
   {% for author_id in pub.authors %}
     {% assign author = site.data.author[author_id] %}
     {{ author.name }}{% unless forloop.last %}, {% endunless %}
   {% endfor %}
   *{{ pub.venue }}*
{% endfor %}
-->
{% endif %}

{% if page.show_experience %}

### Experience

- Teaching Assistant: IM2009 Algorithms (F24), EMBA7003 Business Decision Making (S24), IM1003 Programming Design (F23, F22), IM2010 Operations Research (S23)
- Student Instructor: IM Dept. Calculus Remedial Session (S23, F22, S22, F21)
{% endif %}

### Misc.
I enjoy playing and watching baseball.

I am also a classical music enthusiast and love attending concerts.

<!--On a more personal note, I live with [Peanut](./peanut){: .peanut } -- my super-cute, (almost) one-year-old, Taiwan-born cat.-->
On a more personal note, I live with [Peanut](./peanut){: .peanut }, my super-cute, one-year-old, Taiwan-born cat.

Please feel free to reach out if we share similar interests :)

{% if show_draft %}

<!--Text can be **bold**, _italic_, or ~~strikethrough~~.

[Link to another page](./another-page.html).

There should be whitespace between paragraphs.

There should be whitespace between paragraphs. We recommend including a README, or a file with information about your project.

# Header 1

This is a normal paragraph following a header. GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.

## Header 2

> This is a blockquote following a header.
>
> When something is important enough, you do it even if the odds are not in your favor.

### Header 3

```js
// Javascript code with syntax highlighting.
var fun = function lang(l) {
  dateformat.i18n = require('./lang/' + l)
  return true;
}
```

```ruby
# Ruby code with syntax highlighting
GitHubPages::Dependencies.gems.each do |gem, version|
  s.add_dependency(gem, "= #{version}")
end
```

#### Header 4

*   This is an unordered list following a header.
*   This is an unordered list following a header.
*   This is an unordered list following a header.

##### Header 5

1.  This is an ordered list following a header.
2.  This is an ordered list following a header.
3.  This is an ordered list following a header.

###### Header 6

| head1        | head two          | three |
|:-------------|:------------------|:------|
| ok           | good swedish fish | nice  |
| out of stock | good and plenty   | nice  |
| ok           | good `oreos`      | hmm   |
| ok           | good `zoute` drop | yumm  |

### There's a horizontal rule below this.

* * *

### Here is an unordered list:

*   Item foo
*   Item bar
*   Item baz
*   Item zip

### And an ordered list:

1.  Item one
1.  Item two
1.  Item three
1.  Item four

### And a nested list:

- level 1 item
  - level 2 item
  - level 2 item
    - level 3 item
    - level 3 item
- level 1 item
  - level 2 item
  - level 2 item
  - level 2 item
- level 1 item
  - level 2 item
  - level 2 item
- level 1 item

### Small image

![Octocat](https://github.githubassets.com/images/icons/emoji/octocat.png)

### Large image

![Branching](https://guides.github.com/activities/hello-world/branching.png)


### Definition lists can be used with HTML syntax.

<dl>
<dt>Name</dt>
<dd>Godzilla</dd>
<dt>Born</dt>
<dd>1952</dd>
<dt>Birthplace</dt>
<dd>Japan</dd>
<dt>Color</dt>
<dd>Green</dd>
</dl>

```
Long, single-line code blocks should not wrap. They should horizontally scroll if they are too long. This line should be long enough to demonstrate this.
```

```
The final element.
```-->

{% endif %}
