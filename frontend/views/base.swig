<!DOCTYPE html>
<html>
  <head>
    <meta charset="{{charset}}" />
    <title>{% block meta_title '__TITLE__' %}</title>
    {# <meta name="description" content="{% block meta_descr '__DESCRIPTION__' %}"> #}
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
      </div>
    </div>
    {% block foot %}{% endblock %}
    {#
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <script src="/js/main.js"></script>
    <script>

    $(document)
      .pjax('[data-pjax] a', {
        container: '#content',
        fragment: '#content'
      })
      .on('pjax:start', function() {
        NProgress.start();
      })
      .on('pjax:end', function() {
        NProgress.done();
      });
    </script>
    #}
    <script src="//localhost:35729/livereload.js"></script>
  </body>
</html>
