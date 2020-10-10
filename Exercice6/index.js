'use strict'

/**
 * CheckPhoneNumber: A phone number
 */
var CheckPhoneNumber = function CheckPhoneNumber() {

}

/**
 * generateInput : return an input with a type and a placeholder
 * @param {string} element the html element
 * @param {string} type the type of the input or the button (text, submit ...)
 * @param {string} className the class of the element
 * @param {string | undefined} placeholder if it is an input, the placeholder
 * @param {string | undefined} textContent the text content of the element
 */
CheckPhoneNumber.prototype.generateElement = function(element, type, className, placeholder = undefined, textContent = undefined) {
  var container = document.createElement('div');
  var element = document.createElement(element);
  element.type = type;
  element.className = className;
  placeholder? element.placeholder = placeholder : null;
  textContent? element.textContent = textContent : null;
  container.appendChild(element);
  return container;
}

CheckPhoneNumber.prototype.createForm = function() {
  var form = document.createElement('form');
  var htmlElements = {
    'input': this.generateElement('input', 'number', 'input', 'phone number'),
    'button': this.generateElement('button', 'submit', 'button', null, 'Check')
  };

  for (var key in htmlElements) {
    form.appendChild(htmlElements[key]);
  }
  document.body.appendChild(form);
}

CheckPhoneNumber.prototype.run = function() {
  this.createForm()
}

var phoneNumber = new CheckPhoneNumber();
phoneNumber.run()