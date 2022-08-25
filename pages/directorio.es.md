---
layout: page
title: Directorio
permalink: /directorio/
lang: es
---

<h3>Directorio.</h3>


<div class="side">
  <a href="#" class="tag factive" data-filter="all">Mostrar todo</a>
  <a href="#" class="tag" data-filter=".Colectivo">Colectivo</a>
  <a href="#" class="tag" data-filter=".Journalism">Journalism</a>
  <a href="#" class="tag" data-filter=".NGO">NGO</a>
  <a href="#" class="tag" data-filter=".InternationalOrganization">International Organization</a>
  <a href="#" class="tag" data-filter=".Solidarity">Solidarity</a>
  <a href="#" class="tag" data-filter=".Academia">Academia</a>
  <a href="#" class="tag" data-filter=".LocalGovernment">Local Government</a>
  <a href="#" class="tag" data-filter=".FederalGovernment">Federal Government</a>
</div>



<div class="directorio">

{% assign row = site.data.directory %}
{% for pair in row %}


<!-- <div class="line animatable fadeInUp {{ pair["type"] }} {{ pair["country"] }}">-->
<div class="line {{ pair["type"] }} {{ pair["country"] }}">

  <h2>{{ pair["nombre"] }}</h2>

  <p><strong>{{ pair["type"] }}</strong></p>
  <p><strong>País:</strong> {{ pair["country"] }}</p>

  {% if pair["state"] != null %}
    <p><strong>Estado:</strong> {{ pair["state"] }}</p>
  {% endif %}

  {% if pair["address"] != null %}
    <p><strong>Dirección:</strong> {{ pair["address"] }} </p>
  {% endif %}

  {% if pair["phone"] != null %}
    <p><strong>Teléfono:</strong> {{ pair["phone"] }}</p>
  {% endif %}

  {% if pair["email"] != null %}
    <p><strong>Correo electrónico:</strong> {{ pair["email"] }}</p>
  {% endif %}

  {% if pair["web"] != null %}
    <a href="{{ pair["web"] }}" target="_blank" class="web">Sitio Web</a>
  {% endif %}

  {% if pair["social_media1"] != null %}
    <p><a href="{{ pair["social_media1"] }}" target="_blank" class="web">Facebook</a></p>
  {% endif %}

  {% if pair["social_media2"] != null %}
    <p><a href="{{ pair["social_media2"] }}" target="_blank" class="web">Twitter</a></p>
  {% endif %}

  </div>

{% endfor %}
</div><!-- directorio -->


<a href="#" id="top">↑</a>
