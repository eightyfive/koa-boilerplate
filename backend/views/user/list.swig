{% extends '../layout.swig' %}

{% block content %}
  <h1>Clinics</h1>
  <p class="page-lead">
    <a href="{{path('clinic-create')}}" class="btn">Add new Clinic</a>
  </p>

  {% if users.length %}
  <table>
    <thead>
     <tr>
       <th>#</th>
       <th>Name</th>
        <th>Last updated</th>
     </tr>
    </thead>
    {% for user in users %}
    <tr>
      <td>{{user.id}}</td>
      <td><a href="{{ path('user-update', user.id) }}">{{user.name}}</a></td>
        <td>{{user.updated_at|moment('ddd D MMM')}} <small>{{user.updated_at|moment('HH:mm')}}</small></td>
    </tr>
    {% endfor %}
  </table>
  {% endif %}
{% endblock %}