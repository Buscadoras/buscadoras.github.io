---
layout: page
title: Documents
permalink: /documentos/
lang: en
---

<h3>Documents.</h3>

<p class="intro">About this documents. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed risus non sapien consectetur vulputate. Donec sit amet dapibus ex. Fusce ullamcorper porttitor diam, at egestas purus hendrerit in. Donec et ultricies nulla, eget semper nisl.</p>

<div class="documentos">

{% assign row = site.data.documentos %}
{% for pair in row %}

<div class="row animatable fadeInUp">

<div class="column">
  <img src="../../assets/documents_covers/doc{{pair["orden"]}}.png"/>
</div>

<div class="double-column">
  <h4><a href="{{ pair["source"] }}" target="_blank">{{ pair["label"] }}</a></h4>

  <p>{{ pair["summaryEN"] }}</p><br/>

  <p><strong>Tipo de documento:</strong> {{ pair["document_ type"] }}</p>
  <p><strong>Dirigido a:</strong> {{ pair["intended_audience"] }}</p>
  <p><strong>Creado por:</strong> {{ pair["creator_s"] }}, {{ pair["year"] }}</p><br/>

  <p><a href="{{ pair["source"] }}" target="_blank" class="web">Source</a></p>
  <span class="tag"># {{ pair["document_category"] }}</span>
</div>


</div><!-- row -->
{% endfor %}
</div><!-- card -->


<a href="#" id="top">↑</a>
