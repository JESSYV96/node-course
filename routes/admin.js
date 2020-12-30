import express from 'express'
import *  as adminController from '../controllers/admin.js'

const adminRoutes = express.Router();

// /admin/add-product => GET
adminRoutes.get('/add-product', adminController.getAddProduct);
adminRoutes.get('/edit-product/:id', adminController.getEditProduct);
// /admin/products => GET
adminRoutes.get('/products', adminController.getProducts);
// /admin/add-product => POST
adminRoutes.post('/add-product', adminController.addNewProduct);
adminRoutes.post('/edit-product', adminController.updateProduct);
adminRoutes.delete('/delete-product', adminController.deleteProduct) 

export default adminRoutes
 
 
