if (stripeKey) {
    "use strict";
    let stripe = Stripe(stripeKey);
    let elements = stripe.elements();
    let style = {
        base: {
            fontSize: '16px',
            color: '#32325d',
            border: '1px solid red',
        },
    };

    let card = elements.create('card', {style: style});
    card.mount('#card-element');

    function stripe_payment() {
        //document.getElementById('payment_method').parentElement.classList.remove('has-error');
        let element = document.getElementById("payment_method");
            if (element?.parentElement?.className?.includes('has-error')) {
                element.parentElement.classList.remove('has-error');
            }

        stripe.createToken(card).then(function (result) {
            if (result.error) {
                let errorElement = document.getElementById('card-errors');
                errorElement.textContent = result.error.message;
            } else {
                stripeTokenHandler(result.token);
            }
        });
    }

    function stripeTokenHandler(token) {
        let form = document.getElementById('paymentForm');
        let hiddenInput = document.createElement('input');
        hiddenInput.setAttribute('type', 'hidden');
        hiddenInput.setAttribute('name', 'stripeToken');
        hiddenInput.setAttribute('value', token.id);
        form.appendChild(hiddenInput);
        form.submit();
    }
}
