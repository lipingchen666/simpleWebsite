// Select the button element
const button = document.querySelector('.revise-button');

//personalInformationTask
const personalInfoWrapper = document.getElementById('personalInformationTask');
const contactFormTemplate = document.getElementById('contactFormTemplate');
// Add an event listener to the button
button.addEventListener('click', function() {
    // Your JavaScript code goes here
    const contactFormTemplateH = Handlebars.compile(contactFormTemplate.innerHTML);
    // execute the compiled template and print the output to the console
    console.log(contactFormTemplateH);
    personalInfoWrapper.innerHTML = contactFormTemplateH({ firstName: 'Liping' });
    console.log('Button clicked!');
});