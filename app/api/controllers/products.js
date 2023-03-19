const productModel = require('../models/products');
const getById = async (req, res, next) => {
  try{
    console.log(req.params)
    const productById = await productModel.findById(req.params.productId);
    res.json({status:"success", message: "Product found!!!", data:{products: productById}});
  }catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}

const getAll = async (req, res, next)=> {
  let productsList = [];
  const allproduct = [];
  const products = await productModel.find({});
  for (let product of products) {
  productsList.push({id: product._id, title: product.title, type: product.type,description: product.description,price: product.price, rating: product.rating});
  }
  res.json({status:"success", message: "products list found!!!", data:{products: productsList}});
 }

 const getAllWithShort = async (req, res, next)=> {
  const sort  = {}
  if(req.query.sortBy && req.query.OrderBy){
    sort[req.query.sortBy]   = req.query.OrderBy === 'desc' ? -1 : 1
  }
  const products = await productModel.find({}).select().sort(sort);
  res.json({status:"success", message: "products list found!!!", products});
 }
 
const getProductsWithPagination = async (req, res, next)=> {
const products = await productModel.find({}).limit(req.query.limit).skip(req.query.skip);
res.json({status:"success", message: "products list found!!!", products});
}

const updateById = async (req, res, next) => {
try{
  const productById = await productModel.findByIdAndUpdate(req.params.productId,req.body);
  res.json({status:"success", message: "Product updated successfully!!!", data:null});
  }catch(err){
    console.log(err);
      res.status(500).json(err);
  }
}
const deleteById = async(req, res, next) => {
  try{
    console.log(req.params.productId)
    const deletedproduct =await productModel.findByIdAndDelete(req.params.productId);
    res.json({status:"success", message: "Product deleted successfully!!!", data:null});
  }catch(err){
    console.log(err);
      res.status(500).json(err);
  }
 }
const create = async(req, res, next) => {
  try{
    const newProduct = await new productModel(req.body);
    const product = await newProduct.save();
    res.status(200).json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
 }


module.exports = {getById, getAll, updateById ,deleteById, create ,getAllWithShort, getProductsWithPagination}