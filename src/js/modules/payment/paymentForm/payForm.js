import paymentFormViewController from "./controllers/paymentFormViewController.js";


function payForm() {

    return {
        replace: true,
        restrict: 'AE',
        templateUrl: 'payment/paymentForm/templates/pay-form.html',
        controller: ['$scope', 'payment', paymentFormViewController]
    };


}

export default payForm;