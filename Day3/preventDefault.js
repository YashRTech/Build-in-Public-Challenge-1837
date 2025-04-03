let link = document.querySelector('a');

link.addEventListener('click',function(event) {
    console.log('clicked');
    event.preventDefault();   // preventDefault prevents the event default behavior of an event, but does not stop the event flow.
});