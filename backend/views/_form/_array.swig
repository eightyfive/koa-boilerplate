
{% if field.value.length == 0 %}
  {% set field.value = [''] %}
{% endif %}

<div class="array-input">
  {% spaceless %}
    {% for val in field.value %}
  <div class="array-input__item">
    {% set field.value = val %}
    {% if not loop.first %}
      {% set field.id = false %}
    {% endif %}
    {% if field.type == 'select' %}
      {% set field.selected = val %}
      {% include './_select.swig' with {field: field} only %}
    {% else %}
      {% include './_input.swig' with {field: field} only %}
    {% endif %}
    <a class="pointer" data-remove>x</a>
  </div>
    {% endfor %}
  {% endspaceless %}
  <a class="pointer small array-input__foot" data-clone=".array-input__item">Add</a>
</div>