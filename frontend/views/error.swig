{% extends 'layout.swig' %}

{% block content %}

<div class="wrapper">
  <h1>Error</h1>
  <p>Looks like something broke!</p>
    {% if env == 'development' %}
  <h2>Message:</h2>
  <pre>
    <code>{{error}}</code>
  </pre>
  <h2>Stack:</h2>
  <pre>
    <code>{{stack}}</code>
  </pre>
    {% endif %}
</div>
{% endblock %}