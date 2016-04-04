function payForm(){
    "ngInject";
    return {
        replace: true,
        restrict: 'AE',
        templateUrl: 'templates/pay-form.html',
        controller: payFormController,
        controllerAs: payForm
    }; 
    
    function payFormController(){
        console.log(this);
    }
}

export default payForm;