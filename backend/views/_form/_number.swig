{% set addon = false %}
{% if field.type == 'number:price' %}
  {% set addon = '฿' %}
{% elseif field.type == 'number:%' %}
  {% set addon = '%' %}
{% endif %}
{% if field.type == 'number:float' %}
  {% set field.step = 0.01 %}
{% endif %}
{% if field.type.indexOf('number:') == 0 %}
  {% set field.type = 'number' %}
{% endif %}
{% include '_input.swig' with {field: field, addon: addon} only %}