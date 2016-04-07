import paymentViewController from "./controllers/paymentViewController.js";


function paymentView( $timeout) {
    
    return {
        restrict: 'AE',
        templateUrl: "payment/paymentForm/templates/payment-view.html",
        replace: true,
        controller: ['$scope', 'payment', paymentViewController]        ,
    };
}

export default paymentView;