{% if addon %}
  <div class="input-group">
{% endif %}

  <input
    {% if field.id %}
      id="{{field.id}}"
    {% endif %}
    class="{{field.className}}{% if addon %}{{' input-group__input'}}{% endif %}"
    name="{{field.name}}"
    type="{{field.type}}"
    {% if field.min %}
      step="{{field.step}}"
    {% endif %}
    {% if field.min %}
      min="{{field.min}}"
    {% endif %}
    {% if field.max %}
      max="{{field.max}}"
    {% endif %}
    {% if field.placeholder %}
      placeholder="{{field.placeholder}}"
    {% endif %}
    value="{{field.value|default('')}}">

{% if addon %}
    <span class="input-group__addon">{{addon}}</span>
  </div>
{% endif %}