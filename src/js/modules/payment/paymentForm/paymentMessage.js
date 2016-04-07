import paymentMessageController from "./controllers/paymentMessageController.js";


function paymentMessage() {

    return {
        restrict: 'AE',
        templateUrl: "payment/paymentForm/templates/payment-message.html",
        replace: true,
        controller: ['$scope', paymentMessageController],
    };
}

export default paymentMessage;