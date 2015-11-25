{% extends '../layout.swig' %}

{% block head %}
{% endblock %}

{% block content %}
  {% if flash.error %}
  <p class="alert alert--error">{{flash.error}}</p>
  {% endif %}
  <a data-pjax="ignore" class="btn btn--full btn--facebook" href="{{path('auth-facebook')}}"><small>Log in with</small> Facebook</a>
  <a data-pjax="ignore" class="btn btn--full btn--google" href="{{path('auth-google')}}"><small>Log in with</small> Google</a>
{% endblock %}

{% block javascripts %}
{% endblock %}