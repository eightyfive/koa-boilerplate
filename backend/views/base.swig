<!DOCTYPE html>
<html>
  <head>
    <meta charset="{{charset}}" />
    <title>{% block meta_title %}__TITLE__{% endblock %}</title>
    {# <meta name="description" content="{% block meta_descr '__DESCR__' %}"> #}
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    {# <link rel="stylesheet" href="/css/main.css" type="text/css" media="screen" /> #}
  </head>
  <body>
    {% block head %}{% endblock %}
    <div class="wrapper">
      <div id="content" data-pjax>
        {% block content %}{% endblock %}
        <script>
          function pjaxJs() {
            {% block javascripts %}
            {% endblock %}
          }
        </script>
        {% if flash.toaster %}
        <div id="toaster" class="toaster toaster--{{flash.toaster.type}}">
          {{flash.toaster.message}}
        </div>
        {% endif %}
      </div>
    </div>
    {% block foot %}{% endblock %}

    {#
    <script src="http://maps.googleapis.com/maps/api/js?sensor=false&libraries=places"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <script src="/js/main.js"></script>
    #}
    <script src="//localhost:35730/livereload.js"></script>
  </body>
</html>
