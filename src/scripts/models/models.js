import { basicURI } from '../utils/utils';
export default class MainModel {
    get() {

    }
    getCategories() {
        return fetch(basicURI + '/categories')
            .then((result) => {
                return result.json();
            })
            .then((result) => {
                var data = {};
                data.categories = result;
                return data;
            })
            .then((data) => {
                var promises = [];
                for (let i = 0; i < data.categories.length; i++) {
                    promises.push(fetch(basicURI + '/products?categoryID=' + data.categories[i].id)
                        .then((result) => {
                            return result.json();
                        })
                        .then((result) => {
                            data.categories[i].amount = result.length;
                            return data;
                        })
                    )
                }
                return Promise.all(promises)
                    .then((data) => {
                        return data[0];
                    })

            })
    }
    getCategoryProducts(categoryId) {
        return fetch(basicURI + '/products?categoryID=' + categoryId)
            .then((result) => {
                return result.json();
            })
            .then((result) => {
                var data = {};
                data.goods = result;
                return data;
            })
    }
    getProduct(productId) {
        return fetch(basicURI + '/products/' + productId)
            .then((result) => {
                return result.json();
            })
    }
    addCategory(categoryData) {
        fetch(basicURI + '/categories', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(categoryData)
            })
            .then((result) => { console.log(result.status) });
    }
    addProduct(productData) {
        fetch(basicURI + '/products', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(productData)
            })
            .then((result) => { console.log(result.status) });
    }
    updateCategory(categoryId, newCategoryData) {
        fetch(basicURI + '/categories/' + categoryId, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newCategoryData)
            })
            .then((result) => { console.log(result.status) });
    }
    updateProduct(productId, newProductData) {
        fetch(basicURI + '/categories/' + productId, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newProductData)
            })
            .then((result) => { console.log(result.status) });
    }
    deleteCategory(categoryId) {
        fetch(basicURI + '/categories/' + categoryId, {method: 'DELETE'})
            .then((result) => { console.log(result.status) });
    }
    deleteProduct(productId) {
        fetch(basicURI + '/categories/' + productId, { method: 'DELETE' })
            .then((result) => { console.log(result.status) });
    }

};