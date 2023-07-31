

export function getIdproduct(str) {
    let idProduct = str.split(' ').join('-');
    idProduct = idProduct.split('/').join('_');
    return idProduct
}
export function getClassifyPhoneName(str) {
    return str.split(' ') ;
}