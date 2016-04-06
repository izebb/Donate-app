import paymentViewController from "../controllers/paymentViewController.js";


function paymentView() {
    
    return {
        restrict: 'AE',
        templateUrl: "payment/templates/payment-view.html",
        replace: true,
        controller: ['$scope',paymentViewController]        ,
    };
}

export default paymentView;