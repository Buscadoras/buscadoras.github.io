---
layout: page
title: Bibliografía
permalink: /biblio/
lang: es
---

<h3>Bibliografía selecta.</h3>


<div class="side">
  <a href="#" class="tag factive" data-filter="all">Mostrar todo</a>
  <a href="#" class="tag" data-filter=".libro">Libro</a>
  <a href="#" class="tag" data-filter=".investigativejournalism">Investigative Journalism</a>
  <a href="#" class="tag" data-filter=".film">Filme</a>
  <a href="#" class="tag" data-filter=".podcast">Podcast</a>
  <a href="#" class="tag" data-filter=".multimedia">Multimedia</a>
</div>



<div class="directorio">
{% assign row = site.data.biblio_es %}
{% for pair in row %}

<div class="line {{ pair["format"] }}">
  <h2>{{ pair["title"] }}</h2>
  <p><strong>Autor:</strong> {{ pair["creator_s"] }}</p>

  {% if pair["year"] != null %}
    <p><strong>Year:</strong> {{ pair["year"] }}</p>
  {% endif %}

  {% if pair["organization"] != null %}
    <p><strong>Organización:</strong> {{ pair["organization"] }}</p>
  {% endif %}

  {% if pair["original_link"] != null %}
    <p><a href="{{ pair["original_link"] }}" target="_blank" class="web">Consultar fuente</a></p>
  {% endif %}

</div><!-- row -->
{% endfor %}

</div><!-- directorio -->

<a href="#" id="top">↑</a>
