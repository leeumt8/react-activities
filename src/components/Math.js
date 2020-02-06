import React from "react";

const Math = props => {
    const computeResult = (op, x, y) => {
        let returnValue = 0

        switch(op) {
            case('+'):
                returnValue = x+y
                break
            case('-'):
                returnValue = x-y
                break
            case('*'):
                returnValue = x*y
                break
            case('/'):
                returnValue = x/y
                break
            default:
                returnValue = NaN;
        }
        return returnValue
    }
    console.log(props)
    return <>{computeResult(props.operator, props.num1, props.num2)}</>
}

export default Math