---
layout: page
title: Directory
permalink: /directorio/
lang: en
---

<h3>Directory.</h3>


<div class="directorio">
{% assign row = site.data.directory %}
{% for pair in row %}

  <div class="line animatable fadeInUp">
  <h2>{{pair["nombre"]}}</h2>

  <p> {{ pair["address"] }} </p>
  <p> {{ pair["municipality"] }} {{ pair["state"] }} {{ pair["country"] }}</p>
  <p>{{ pair["phone"] }} {{ pair["email"] }}</p>

  <br/>
  <p><a href="{{ pair["social_media1"] }}" target="_blank" class="Fb">Facebook</a>
  <a href="{{ pair["social_media2"] }}" target="_blank" class="Tw">Twitter</a></p>
  <a href="{{ pair["web"] }}" target="_blank" class="web">Website</a>

  <span class="tag"># {{ pair["type"] }}</span>

</div>

{% endfor %}
</div><!-- directorio -->

<a href="#" id="top">↑</a>
