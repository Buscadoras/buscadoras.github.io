---
layout: page
title: Directorio
permalink: /directorio/
lang: es
---

<h3>Directorio</h3>

<div class="directorio">
<p class="intro">Una base de datos con la información de contacto de colectivos, organizaciones de sociedad civil, organismos internacionales e instituciones de gobierno, para facilitar la conexión, comunicación y acceso a la información.</p>
</div>

<div class="side">
  <a href="#" class="tag factive" data-filter="all">Mostrar todo</a>
  <a href="#" class="tag" data-filter=".colectivo">Colectivo</a>
  <a href="#" class="tag" data-filter=".Journalism">Periodismo</a>
  <a href="#" class="tag" data-filter=".NGO">NGO</a>
  <a href="#" class="tag" data-filter=".InternationalOrganization">Organización internacional</a>
  <a href="#" class="tag" data-filter=".Solidarity">Solidaridad</a>
  <a href="#" class="tag" data-filter=".Academia">Academia</a>
  <a href="#" class="tag" data-filter=".LocalGovernment">Gobierno local</a>
  <a href="#" class="tag" data-filter=".FederalGovernment">Gobierno federal</a>

  <p><a href="#" target="_blank">Colabora con esta selección a través de este formulario.</a></p>  
</div>

<div class="directorio">

{% assign row = site.data.directory %}
{% for pair in row %}

<!-- <div class="line animatable fadeInUp {{ pair["type"] }} {{ pair["country"] }}">-->
<div class="line {{ pair["type"] }} {{ pair["country"] }}">

  <h2>{{ pair["nombre"] }}</h2>

<!--  <p><strong>{{ pair["type"] }}</strong></p>-->
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
