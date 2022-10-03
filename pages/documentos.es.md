---
layout: page
title: Documentos
permalink: /documentos/
lang: es
---

<h3>Documentos</h3>

<div class="directorio">
<p class="intro">Una compilación de herramientas bibliográficas y documentos para la búsqueda y voces de la búsqueda; leyes, protocolos gubernamentales, guías básicas, testimonios e historias de búsqueda realizadas por organizaciones de sociedad civil y organismos internacionales de la mano de las familias.</p>
</div>

<div class="side">
  <a href="#" class="tag factive" data-filter="all">Mostrar todo</a>
  <a href="#" class="tag" data-filter=".Contexto">Contexto</a>
  <a href="#" class="tag" data-filter=".Legal">Legal</a>
  <a href="#" class="tag" data-filter=".Testimonios">Testimonios</a>
  <a href="#" class="tag" data-filter=".Guía">Guía</a>
  <p><a href="https://docs.google.com/forms/d/1wTp6beCzq-N1uyiQhD-_8LiB_5q0HnBOwEdxMI-kniM/edit" target="_blank">Colabora con esta selección a través de este formulario.</a></p>  
</div>

<div class="documentos">

{% assign row = site.data.documentos %}
{% for pair in row %}

<!--<div class="row animatable fadeInUp line {{ pair["etiqueta"] }}">-->
<div class="row docus {{ pair["etiqueta"] }}">

<div class="column">
  <img src="https://bulabe.com/buscadoras/documents_covers/doc{{pair["orden"]}}.png"/>
</div>
<div class="double-column">
  <h4><a href="{{ pair["source"] }}" target="_blank">{{ pair["label"] }}</a></h4>
  <p><strong>Autor:</strong> {{ pair["creator_s"] }}</p>
  <p><strong>Año:</strong> {{ pair["year "] }}</p>
  <p><strong>Tipo:</strong> {{ pair["document_category"] }}</p>
  <p>{{ pair["summaryESP"] }}</p>
  <p><a href="https://bulabe.com/buscadoras/documents_pdfs/doc{{pair["orden"]}}.pdf" target="_blank" class="web">Descarga el documento [PDF]</a></p>
</div>

</div><!-- row -->
{% endfor %}
</div><!-- card -->

<a href="#" id="top">↑</a>
