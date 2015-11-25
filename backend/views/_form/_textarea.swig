<textarea
  id="{{field.id}}"
  class="{{field.className}}"
  name="{{field.name}}"
  {% if field.placeholder %}
    placeholder="{{field.placeholder}}"
  {% endif %}
  value="{{field.value|default('')}}"
  rows="5">{{field.value}}</textarea>