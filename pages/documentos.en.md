---
layout: page
title: Documents
permalink: /documentos/
lang: en
---

<h3>Documents</h3>

<div class="directorio">
<p class="intro">A compilation tools and documents for searching, as well as voices from the search, including: laws, government protocols, basic guides, testimonies and stories of the search that is carried out by civil society organizations and international agencies working hand in hand with family members.</p>
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
  <p><strong>Author(s):</strong> {{ pair["creator_s"] }}, {{ pair["year"] }}</p>

  <p><a href="https://bulabe.com/buscadoras/documents_pdfs/doc{{pair["orden"]}}.pdf" target="_blank" class="web">Download this document [PDF]</a></p>
</div>


</div><!-- row -->
{% endfor %}
</div><!-- card -->


<a href="#" id="top">↑</a>
