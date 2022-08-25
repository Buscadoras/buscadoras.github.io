---
layout: page
title: Documentos
permalink: /documentos/
lang: es
---

<h3>Documentos.</h3>

<p class="intro">Una compilación de herramientas bibliográficas y documentos para la búsqueda y voces de la búsqueda; leyes, protocolos gubernamentales, guías básicas, testimonios e historias de búsqueda realizadas por organizaciones de sociedad civil y organismos internacionales de la mano de las familias.</p>


<div class="documentos">

{% assign row = site.data.documentos %}
{% for pair in row %}

<div class="row animatable fadeInUp">

<div class="column">
  <img src="https://bulabe.com/buscadoras/documents_covers/doc{{pair["orden"]}}.png"/>
</div>

<div class="double-column">
  <h4><a href="{{ pair["source"] }}" target="_blank">{{ pair["label"] }}</a></h4>
  <p><strong>Autor:</strong> {{ pair["creator_s"] }}</p>
  <p><strong>Año:</strong> {{ pair["year "] }}</p>
  <p><strong>Tipo:</strong> {{ pair["document_category"] }}</p><br/>
  <p>{{ pair["summaryESP"] }}</p>

  <p><a href="https://bulabe.com/buscadoras/documents_pdfs/doc{{pair["orden"]}}.pdf" target="_blank" class="web">Descarga el documento [PDF]</a></p>
</div>


</div><!-- row -->
{% endfor %}
</div><!-- card -->



<a href="#" id="top">↑</a>
