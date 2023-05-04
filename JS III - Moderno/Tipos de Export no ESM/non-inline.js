function grup(){
    console.log('Export nomeado não-inline (agrupado)')
}

function a(){}
function b(){}
function c(){}
function d(){}

function exportDefault(){
    console.log('Export default não-inline')
}

//você consegue agrupar varias variavel/function em vez de colocar export na frente de cada um
export {grup, a, b, c, d}

export default exportDefault