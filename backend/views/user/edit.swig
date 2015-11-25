{% extends '../layout.swig' %}

{% block content %}

  {% if clinic.id %}
    {% parent %}
  {% endif %}

  {% set fields = [
    {name: 'name', label: 'User full name', type:'text'},
  ] %}

  {% if clinic.id %}
    {% set buttonText = 'Update user' %}
    {% set cancelUrl = false %}
    {% set method = 'PUT' %}
    {% set action = path('clinic-update', {clinic: clinic.id}) %}
  {% else %}
    {% set buttonText = 'Create clinic' %}
    {% set cancelUrl = path('clinic-index', clinic.id) %}
    {% set method = 'POST' %}
    {% set action = path('clinic-create', clinic.id) %}
  {% endif %}

  {% include '../_form.swig' with {
    errors: flash.errors,
    action: action,
    method: method,
    fields: fields,
    model: clinic,
    buttonText: buttonText
  } only %}

{% endblock %}