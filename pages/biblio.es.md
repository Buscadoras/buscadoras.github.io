---
layout: page
title: Bibliografía
permalink: /biblio/
lang: es
---

<h3>Materiales de lectura</h3>

<div class="directorio">
<p class="intro">Una selección de materiales de lectura, trabajos periodísticos, análisis académicos, poesía, películas, proyectos multimedia, que funciona como introducción al contexto en México, la desaparición y la búsqueda.</p>
</div>

<div class="side">
  <a href="#" class="tag factive" data-filter="all">Mostrar Todo</a>
  <a href="#" class="tag" data-filter=".libro">Libros</a>
  <a href="#" class="tag" data-filter=".periodismo">Periodismo de investigación</a>
  <a href="#" class="tag" data-filter=".audiovisual">Audiovisual</a>
  <a href="#" class="tag" data-filter=".podcast">Podcast</a>
  <a href="#" class="tag" data-filter=".multimedia">Multimedia</a>
  <p><a href="../assets/Bibliografia_selecta.pdf" target="_blank">Descarga esta selección.</a></p>
  <p><a href="https://docs.google.com/forms/d/e/1FAIpQLScy3fcad3skcbSdUyNLtZijKOVxwfsOQe7Sm-Q34D0tlGp9dw/viewform?usp=sharing" target="_blank">Colabora con esta selección a través de este formulario.</a></p>
</div>


<div class="directorio" style="background-color: #F7F6F6;">
{% assign row = site.data.biblio_es %}

{% for pair in row %}

<div class="line {{ pair["format"] }}">
  <h2>{{ pair["title"] }}</h2>
  <!--<h2>{{ pair["cat"] }}</h2>-->
  <p><strong>Autor:</strong> {{ pair["creator_s"] }}</p>
  {% if pair["language"] != null %}
    <p><strong>Idioma:</strong> {{ pair["language"] }}</p>
  {% endif %}
  {% if pair["year"] != null %}
    <p><strong>Año:</strong> {{ pair["year"] }}</p>
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
