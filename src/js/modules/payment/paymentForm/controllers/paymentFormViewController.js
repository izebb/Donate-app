'use strict';

function paymentFormViewController($scope, payment) {
    $scope.card = {};
    $scope.paymentBrand = "";

    $scope.pay = () => {
        $scope.paymentBrand  =   $scope.paymentBrand == 'mastercard' ? 'MASTER': $scope.paymentBrand.toUpperCase();
        let data = {};
        let expiry =
            [$scope.card.expiryMonth, $scope.card.expiryYear] = $scope.card.expiry.split(' / ');
        data['card.number'] = $scope.card.number.replace(/\s/ig, '');
        data['card.cvv']= $scope.card.cvv;
        data['card.expiryMonth'] = $scope.card.expiryMonth;
        data['card.expiryYear'] = $scope.card.expiryYear;
        data['card.holder'] = $scope.card.holder;
        data.paymentType = "DB";
        data.paymentBrand=  $scope.paymentBrand;
        data.currency = "EUR";
        data.amount= $scope.amount;
        let postPay = payment.pay(data);
        postPay.success(() => {

        });
        postPay.error(() => {

        });
    };

}

export default paymentFormViewController;