---
layout: page
title: Documents
permalink: /documentos/
lang: en
---

<h3>Documents.</h3>

<div class="directorio">
<p class="intro">Una compilación de herramientas bibliográficas y documentos para la búsqueda y voces de la búsqueda; leyes, protocolos gubernamentales, guías básicas, testimonios e historias de búsqueda realizadas por organizaciones de sociedad civil y organismos internacionales de la mano de las familias.</p>
</div>


<div class="documentos">

{% assign row = site.data.documentos %}
{% for pair in row %}

<div class="row animatable fadeInUp">

<div class="column">
  <img src="https://bulabe.com/buscadoras/documents_covers/doc{{pair["orden"]}}.png"/>
</div>

<div class="double-column">
  <h4><a href="{{ pair["source"] }}" target="_blank">{{ pair["label"] }}</a></h4>

  <p>{{ pair["summaryEN"] }}</p><br/>

  <p><strong>Type:</strong> {{ pair["document_ type"] }}</p>
  <p><strong>Audience:</strong> {{ pair["intended_audience"] }}</p>
  <p><strong>Author(s):</strong> {{ pair["creator_s"] }}, {{ pair["year"] }}</p><br/>

  <p><a href="https://bulabe.com/buscadoras/documents_pdfs/doc{{pair["orden"]}}.pdf" target="_blank" class="web">Descarga el documento [PDF]</a></p>
</div>


</div><!-- row -->
{% endfor %}
</div><!-- card -->


<a href="#" id="top">↑</a>
