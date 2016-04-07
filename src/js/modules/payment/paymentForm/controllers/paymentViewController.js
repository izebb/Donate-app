function paymentController($scope, payment) {
    var payment = payment.getPayment();
    $scope.isDonated = payment ? true : false;
    console.log($timeout);
    $timeout(() => {
        $scope.isDonated = false;
    }, 300);


}

export default paymentController;