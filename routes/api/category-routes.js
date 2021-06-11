const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
	// find all categories
	// be sure to include its associated Products
	try {
		const categoryData = await Category.findAll({
			include: [{ model: Product }],
		});
		res.status(200).json(categoryData);
	} catch (error) {
		res.status(500).json(error);
	}
});

router.get('/:id', async (req, res) => {
	// find one category by its `id` value
	// be sure to include its associated Products
	try {
		const categoryData = await Category.findByPk(req.params.id, {
			include: [{ model: Product }],
		});
		if (!categoryData) {
			res.status(404).json({ message: 'No category found with that id!' });
		}
		res.status(200).json(categoryData);
	} catch (error) {
		res.status(500).json(error);
	}
});

router.post('/', (req, res) => {
	console.log('post category');
	// create a new category
});

router.put('/:id', (req, res) => {
	console.log('put category');
	// update a category by its `id` value
});

router.delete('/:id', (req, res) => {
	console.log('delete category');
	// delete a category by its `id` value
});

module.exports = router;