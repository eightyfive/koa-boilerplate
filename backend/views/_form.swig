
{% set grid = 3 %}
{% set validMethods = 'GET|POST' %}
{% if validMethods.indexOf(method) == -1 %}
  {% set _method = method %}
  {% set method = 'POST' %}
{% endif %}
{% if errors and errors.length %}
  {% set errorKeys = errors|groupBy('key') %}
{% endif %}

<div class="content-centered">
  <form class="form form--horizontal" action="{{action}}" method="{{method|default('POST')}}"{% if _method %} data-method="{{_method}}"{% endif %}>
    {% spaceless %}
    <ul class="list-bare form__fields">
      {% for field in fields %}
        {% set field.id = 'input' + field.name|capitalize %}
        {% set field.label = field.label|default(field.name|humanize) %}
        {% set field.className = 'form__input' %}

        {% set err = false %}
        {% if errorKeys[field.name] %}
          {% set err = errorKeys[field.name][0]['message'] %}
        {% endif %}
        {% if err %}
          {% set field.className = field.className + ' is-error' %}
        {% endif %}
        {% if field.type == 'date' %}
          {% set field.value = model[field.name]|date('Y-m-d') %}
        {% else %}
          {% set field.value = model[field.name] %}
        {% endif %}

      <li class="layout"{% if field.hidden %} style="display: none;" {% endif %}>
        <div class="layout__item u-{{grid}}/12">
          <label for="{{field.id}}">
            {{field.label}}
          {% if field.optional %}
            <br>
            <small>optional</small>
          {% endif %}
          </label>
        </div>
        <div class="layout__item u-{{12-grid}}/12">
        {% if field.type == 'textarea' %}
          {% include '_form/_textarea.swig' with {field: field} only %}

        {% elseif field.isArray %}
          {% include '_form/_array.swig' with {field: field} only %}

        {% elseif field.type.indexOf('number') == 0 %}
            {% include '_form/_number.swig' with {field: field} only %}

        {% elseif field.type == 'select' %}
          {% include '_form/_select.swig' with {field: field} only %}

        {% else %}
          {% include '_form/_input.swig' with {field: field} only %}

        {% endif %}
        {% if field.help %}
          <small class="form__help">{{field.help|markdown}}</small>
        {% endif %}
        {% if err %}
          <small class="form__error">{{err}}</small>
        {% endif %}
        </div>
      </li>
      {% endfor %}
      <li class="layout">
        <div class="layout__item u-{{grid}}/12">&nbsp;</div>
        <div class="layout__item u-{{12-grid}}/12">
          <button class="btn" type="submit">{{buttonText}}</button>
          {% if cancelUrl %}
          <a href="{{cancelUrl}}" class="btn btn--link">cancel</a>
          {% endif %}
        </div>
      </li>
    </ul>
    {% endspaceless %}
  </form>
</div>