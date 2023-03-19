const express = require('express');
const router = express.Router();
const productController = require('../controllers/products');


router.get('/sort', productController.getAllWithShort);
router.get('/paginate', productController.getProductsWithPagination);

router.get('/', productController.getAll);
router.post('/', productController.create);
router.get('/:productId', productController.getById);
router.put('/:productId', productController.updateById);
router.delete('/:productId', productController.deleteById);
module.exports = router;