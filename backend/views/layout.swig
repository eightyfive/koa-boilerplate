{% extends 'base.swig' %}

{% block head %}
  <div class="site-head">
    <div class="wrapper clearfix">
      <div class="site-head__contact">
        <div class="contact">
          <h3 class="contact__title">Have a question? <small>Call us</small></h3>
          <a class="contact__line" href="tel:{{contact.phone}}">{{contact.phone}}</a>
          <a class="contact__line small" href="mailto:{{contact.email}}">{{contact.email}}</a>
        </div>
      </div>
      <a href="{{path('auth-logout')}}" class="site-head__logout">Logout</a>
    </div>
  </div>
{% endblock %}

{% block foot %}
<footer class="site-foot">
  <div class="wrapper clearfix">
  </div>
</footer>
{% endblock %}