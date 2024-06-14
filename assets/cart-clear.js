document.addEventListener('DOMContentLoaded', function() {
    var clearCartButton = document.getElementById('clear-cart-button');
    var clearSubmitted = false;

    clearCartButton.addEventListener('click', function() {
        if (clearSubmitted) {
            return false;
        }

        clearSubmitted = true;
        fetch('/cart/clear.js', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            var cart__wrapper = document.querySelector('#cart__wrapper');
            cart__wrapper.classList.add('is-empty');

            var js_contents = document.querySelector('.js-contents');
            js_contents.innerHTML = "";
            
        })
        .catch(error => {
            // Handle error
            console.error('Error clearing cart:', error.message);
        });
    });
});