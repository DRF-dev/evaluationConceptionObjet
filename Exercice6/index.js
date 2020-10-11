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

/**
 * Check if the phone number began with a 01, 06 or 07
 * @param {number} phoneNumber the phone number
 */
CheckPhoneNumber.prototype.regex = function(phoneNumber) {
  var regex = /^0[167]+/;
  return regex.test(phoneNumber);
}

/**
 * Create a html form
 */
CheckPhoneNumber.prototype.createForm = function() {
  var form = document.createElement('form');
  var htmlElements = {
    'input': this.generateElement('input', 'number', 'input', 'phone number'),
    'button': this.generateElement('button', 'button', 'button', null, 'Check')
  };

  htmlElements['button'].addEventListener('click', function() {
    this.check();
  }.bind(this));
  for (var key in htmlElements) {
    form.appendChild(htmlElements[key]);
  }
  document.body.appendChild(form);
}

/**
 * check the value in the input
 */
CheckPhoneNumber.prototype.check = function() {
  var phoneNumber = document.querySelector('input').value
  if (phoneNumber.length !== 10) {
    return alert('Ce numéro de téléphone ne contient pas 10 chiffres');
  }
  if (typeof Number(phoneNumber) !== 'number') {
    return alert('Ce numéro de téléphone ne contient pas que des chiffres');
  }
  return alert(this.regex(phoneNumber));
}

/**
 * Run the app
 */
CheckPhoneNumber.prototype.run = function() {
  this.createForm()
}

var phoneNumber = new CheckPhoneNumber();
phoneNumber.run()