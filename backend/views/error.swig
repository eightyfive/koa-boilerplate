{% extends 'layout.swig' %}

{% block head %}
<div class="site-head site-head--empty">

</div>
{% endblock %}

{% block content %}
<div class="wrapper">
  <h1>An error has occured</h1>
  <p>Please login again into your account <a href="/logout" data-pjax="ignore">here</a>.</p>
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
