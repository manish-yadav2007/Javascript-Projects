



let arthimaticCalculation = async (expression) => {
    return new Promise((resolve, reject) => {
        try {
            let result = eval(expression);
            resolve(result);
        } catch (err) {
            reject("Invalid Expression");
        }
    });
};

export { arthimaticCalculation };