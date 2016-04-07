import params from "./params";

function payment($http, $httpSerializer, $localStorage) {
    'ngInject';
    
    let paymentFactory = {};

    paymentFactory.pay = (paymentParams={}) => {
        let data = paymentParams;
        data['authentication.userId'] = params.authentication.userId;
        data['authentication.password'] = params.authentication.password;
        data['authentication.entityId']  = params.authentication.entityId;
        return $http({
            url: params.paymentEndpoint,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },  
            data: $httpSerializer(data)
           
        });

    };
    
    paymentFactory.savePayment = (data) => {
        $localStorage.paymentParams = JSON.stringify(data);
    };
    
    paymentFactory.getPayment = () => {
       return  JSON.parse($localStorage.paymentParams);
    };
       

    return paymentFactory;

}
export default payment;