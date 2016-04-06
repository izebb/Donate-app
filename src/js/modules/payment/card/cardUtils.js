
export function numericOnly() {
    let restrictNumeric = (e) => {
            const elm = angular.element(e.currentTarget);
        if (e.metaKey || e.ctrlKey || e.which === 0 || e.which < 33) {
            return;
        }
        if (e.which === 32 || !!/[\d\s]/.test(String.fromCharCode(e.which)) === false) {
            elm.val('');
            e.preventDefault();
        }
    };

    return {
        restrict: 'A',
        link(scope, element) {
            element.bind('keypress', restrictNumeric);
        }
    };
}
