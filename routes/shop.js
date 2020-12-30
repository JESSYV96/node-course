import express from 'express'
import *  as shopController from '../controllers/shop.js'

const ShopRoutes = express.Router();

ShopRoutes.get('/', shopController.getIndex);
ShopRoutes.get('/products', shopController.getProducts);
ShopRoutes.get('/products/:id', shopController.getProduct)
ShopRoutes.get('/cart', shopController.getCart);
ShopRoutes.post('/cart', shopController.addToCart);
ShopRoutes.get('/orders', shopController.getOrders);
ShopRoutes.get('/checkout', shopController.getCheckout);

 
export default ShopRoutes
