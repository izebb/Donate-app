'use strict';

function paymentFormViewController($scope, payment ) {
    $scope.card = {};
    
    $scope.pay = () => {
        let postPay = payment.pay();
        postPay.success( () => {
            
        });
        postPay.error( () => {
            
        });
    };

}

export default paymentFormViewController;