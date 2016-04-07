'use strict';

function paymentFormViewController($scope, payment) {
    $scope.card = {};
    $scope.paymentBrand = "";
    $scope.showError = false;
    $scope.errorMsg = "";
    $scope.submitting = false;

    $scope.pay = () => {
        $scope.paymentBrand = $scope.paymentBrand == 'mastercard' ? 'MASTER' : $scope.paymentBrand.toUpperCase();
        let data = {};
        let expiry =
            [$scope.card.expiryMonth, $scope.card.expiryYear] = $scope.card.expiry.split(' / ');
        $scope.submitting = true;
        data['card.number'] = $scope.card.number.replace(/\s/ig, '');
        data['card.cvv'] = $scope.card.cvv;
        data['card.expiryMonth'] = $scope.card.expiryMonth;
        data['card.expiryYear'] = $scope.card.expiryYear;
        data['card.holder'] = $scope.card.holder;
        data.paymentType = "DB";
        data.paymentBrand = $scope.paymentBrand;
        data.currency = $scope.card.currency;
        data.amount = $scope.amount;
        let postPay = payment.pay(data);
        
        postPay.success((paymentReponse) => {
            $scope.submitting = false;
            payment.savePayment(paymentReponse);
        });
        
        postPay.error(() => {
            $scope.submitting = false;
            $scope.showError = true;
            $scope.errorMsg ="Transaction details is invalid. Please crosscheck and try again."
        });
    };

}

export default paymentFormViewController;