import Product from '../models/Product.js'

export const getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/add-product',
    editing: false
  });
}

export const getEditProduct = (req, res, next) => {
  const editMode = req.query.edit
  if (!editMode) {
    return res.redirect('/');
  }
  const pid = req.params.id

  Product.fetchById(pid, product => {
    if (!product) return res.redirect('/')

    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/edit-product',
      editing: editMode,
      product
    });
  })
}

export const getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/products'
    });
  });
}

export const addNewProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(null, title, imageUrl, description, price);
  product.save();
  res.redirect('/');
}

export const updateProduct = (req, res, next) => {
  const pid = req.body.productId
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;

  const updProduct = new Product(pid, title, imageUrl, description, price);
  updProduct.save();
  res.redirect('/admin/products');
}

export const deleteProduct = (req, res, next) => {
  const pid = req.body.productId
  Product.deleteById(prodId);
  res.redirect('/admin/products');
}