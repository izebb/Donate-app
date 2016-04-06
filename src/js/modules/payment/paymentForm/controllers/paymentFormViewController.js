'use strict';

function paymentFormViewController($scope, payment) {
    $scope.card = {};
    $scope.card.paymentBrand = "";
    $scope.pay = () => {
        let data = {};
        let expiry =
            [$scope.card.expiryMonth, $scope.card.expiryYear] = $scope.card.expiry.split(' / ');
        data.card = $scope.card;
        let postPay = payment.pay(data);
        postPay.success(() => {

        });
        postPay.error(() => {

        });
    };

}

export default paymentFormViewController;