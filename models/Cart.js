import fs from 'fs'
import { join } from 'path'
import __dirname from '../utils/getDirname.js'

const pathToJsonCart = join(__dirname, '..', 'data', 'cart.json')

export default class Cart {
    static addProduct(id, price) {
        fs.readFile(pathToJsonCart, (err, fileContent) => {
            let cart = { products: [], totalPrice: 0 }
            if (!err) {
                cart = JSON.parse(fileContent)
            }
            const existingProductIndex = cart.products.findIndex(p => p.id === id)
            const existingProduct = cart.products[existingProductIndex]
            let updatedProduct;
            if (existingProduct) {
                updatedProduct = { ...existingProduct }
                updatedProduct.qty += 1
                cart.products = [...cart.products]
                cart.products[existingProductIndex] = updatedProduct
            } else {
                updatedProduct = { id: id, qty: 1 }
                cart.products = [...cart.products, updatedProduct]
            }
            cart.totalPrice += +price
            fs.writeFile(pathToJsonCart, JSON.stringify(cart), (err) => {
                console.log(err)
            })
        })
    }

    static deleteProduct(id, price) {
        fs.readFile(pathToJsonCart, (err, fileContent) => {
            if (err) {
                return;
            }
            const updatedCart = { ...JSON.parse(fileContent) };
            const product = updatedCart.products.find(p => p.id === id)
            if (!product) {
                return;
            }
            const productQty = product.qty
            updatedCart.products = updatedCart.products.filter(
                prod => prod.id !== id
            );

            updatedCart.totalPrice = products.totalPrice - price * productQty
            fs.writeFile(p, JSON.stringify(updatedCart), err => {
                console.log(err);
            });
        })
    }
}