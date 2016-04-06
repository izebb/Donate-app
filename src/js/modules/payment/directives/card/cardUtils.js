
export function numericOnly() {
    let restrictNumeric = (e) => {
        if (e.metaKey || e.ctrlKey || e.which === 0 || e.which < 33) {
            return;
        }
        if (e.which === 32 || !!/[\d\s]/.test(String.fromCharCode(e.which)) === false) {
            e.preventDefault();
        }
    };

    return {
        restrict: 'A',
        link: (scope, element) => {
            element.bind('keypress', restrictNumeric);
        }
    };
}
