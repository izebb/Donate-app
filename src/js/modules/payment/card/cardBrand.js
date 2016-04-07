import {
    cardType } from 'stripe.js';
export function cardBrand() {
    return {
        templateUrl: "payment/card/templates/card-type.html",
        scope: {
            value: "=",
            type: "="

        },
        link($scope) {
            $scope.$watch('value', (newVal, oldVal) => {
                if (newVal) {
                    $scope.type = cardType(newVal.replace(/\s/g, ''));
                }

            });
        }
    };
}
