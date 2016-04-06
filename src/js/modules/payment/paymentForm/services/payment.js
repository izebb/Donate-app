import params from "./params";

function payment($http) {
    'ngInject';
    
    let paymentFactory = {};

    paymentFactory.pay = (paymentParams={}) => {
        let data = paymentParams;
        data.authentication = params.authentication;

        return $http({
            url: params.paymentEndpoint,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },  
            data: data
        });

    };

    return paymentFactory;

}
export default payment;