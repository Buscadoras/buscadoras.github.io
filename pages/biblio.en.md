---
layout: page
title: Bibliografía
permalink: /biblio/
lang: en
---

<h3>Reference Materials</h3>

<div class="directorio">
<p class="intro">A selection of literature, journalistic work, academic analysis, poetry, films, multimedia projects, which serves as an introduction to the context of disappearance and the search in Mexico.</p>
</div>

<div class="side">
  <a href="#" class="tag factive" data-filter="all">Show All</a>
  <a href="#" class="tag" data-filter=".book">Books</a>
  <a href="#" class="tag" data-filter=".journalism">Investigative journalism</a>
  <a href="#" class="tag" data-filter=".multimedia">Multimedia</a>
  <a href="#" class="tag" data-filter=".film">Film</a>
  <a href="#" class="tag" data-filter=".podcast">Podcast</a>

  <p><a href="../../assets/Bibliografia_selecta.pdf" target="_blank">Download this selection.</a></p>
  <p><a href="https://docs.google.com/forms/d/e/1FAIpQLScy3fcad3skcbSdUyNLtZijKOVxwfsOQe7Sm-Q34D0tlGp9dw/viewform?usp=sharing" target="_blank">Contribute to this section.</a></p>
</div>

<div class="directorio" style="background-color: #F7F6F6;">
{% assign row = site.data.biblio_en %}

{% for pair in row %}

<div class="line {{ pair["format"] }}">
  <h2>{{ pair["title"] }}</h2>
  <p><strong>Author:</strong> {{ pair["creator_s"] }}</p>
  {% if pair["language"] != null %}
    <p><strong>Language:</strong> {{ pair["language"] }}</p>
  {% endif %}
  {% if pair["year"] != null %}
    <p><strong>Year:</strong> {{ pair["year"] }}</p>
  {% endif %}
  {% if pair["organization"] != null %}
    <p><strong>Organization:</strong> {{ pair["organization"] }}</p>
  {% endif %}
  {% if pair["original_link"] != null %}
    <p><a href="{{ pair["original_link"] }}" target="_blank" class="web">Source</a></p>
  {% endif %}
</div><!-- row -->
{% endfor %}

</div><!-- directorio -->

<a href="#" id="top">↑</a>
