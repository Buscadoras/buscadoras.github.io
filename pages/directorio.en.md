---
layout: page
title: Directory
permalink: /directorio/
lang: en
---

<h3>Directory.</h3>


<div class="directorio">
<p class="intro">A database with contact information for collectives, civil society organizations, international organizations, and government institutions to facilitate connection, communication and access to information.</p>
</div>


<div class="side">
  <a href="#" class="tag factive" data-filter="all">Show All</a>
  <a href="#" class="tag" data-filter=".colectivo">Collectives</a>
  <a href="#" class="tag" data-filter=".Journalism">Journalism</a>
  <a href="#" class="tag" data-filter=".NGO">NGO</a>
  <a href="#" class="tag" data-filter=".InternationalOrganization">International Organizations</a>
  <a href="#" class="tag" data-filter=".Solidarity">Solidarity</a>
  <a href="#" class="tag" data-filter=".Academia">Academia</a>
  <a href="#" class="tag" data-filter=".LocalGovernment">Local Government</a>
  <a href="#" class="tag" data-filter=".FederalGovernment">Federal Government</a>

  <p><a href="#" target="_blank">Collaborate with this section.</a></p>  
</div>



<div class="directorio">

{% assign row = site.data.directory %}
{% for pair in row %}

<!-- <div class="line animatable fadeInUp {{ pair["type"] }} {{ pair["country"] }}">-->
<div class="line {{ pair["type"] }} {{ pair["country"] }}">

  <h2>{{ pair["nombre"] }}</h2>

<!--  <p><strong>{{ pair["type"] }}</strong></p>-->
  <p><strong>Country:</strong> {{ pair["country"] }}</p>

  {% if pair["state"] != null %}
    <p><strong>State:</strong> {{ pair["state"] }}</p>
  {% endif %}

  {% if pair["address"] != null %}
    <p><strong>Address:</strong> {{ pair["address"] }} </p>
  {% endif %}

  {% if pair["phone"] != null %}
    <p><strong>Phone Number:</strong> {{ pair["phone"] }}</p>
  {% endif %}

  {% if pair["email"] != null %}
    <p><strong>E-mail:</strong> {{ pair["email"] }}</p>
  {% endif %}

  {% if pair["web"] != null %}
    <a href="{{ pair["web"] }}" target="_blank" class="web">Website</a>
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
