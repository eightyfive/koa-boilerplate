
<select id="{{field.id}}" name="{{field.name}}" class="{{field.className}}">
{% if not field.noblank %}
  <option value="">Choose...</option>
{% endif %}
{% if field.models %}
  {% for mod in field.models %}
    <option value="{{mod.id}}"{% if field.selected == mod.id %} selected{% endif %}>{{mod[field.modKey]}}</option>
  {% endfor %}
{% else %}
  {% for _choice in field.choices %}
    {% set choice = _choice.split(':') %}
    <option value="{{choice[0]}}"{% if field.selected == choice[0] %} selected{% endif %}>{{choice[1]|default(choice[0])}}</option>
  {% endfor %}
{% endif %}
</select>
