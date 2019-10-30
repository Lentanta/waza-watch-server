const { Category } = require('../models/categories')

router.post('/categories',(req, res) => {
  const {pagination} = req.body
  Category.find()
  .limit(pagination.perpage)
  .skip((pagination.page-1)*pagination.perpage)
  .then((result) => {
    Category.countDocuments(Category).then(total => {
      return res.status(200).send({
        data: result,
        total
      })
    })
    
    })
    .catch((error) => console.log(error))
});

router.post('/getCategory', (req, res) => {
  Category.find({ _id: req.body.id })
    .then((result) => res.send(result))
    .catch((error) => console.log(error))
});

router.post('/addCategory', (req, res) => {
  const { name } = req.body;

  const newCategory = new Category({
    name, active: true
  });
  
  newCategory.save()
    .then((result) => {
      console.log(result);
      return res.status(200).send(result);
    })
    .catch((error) => {
      console.log(error)
      return res.status(400);
    })
});

router.post('/getCategoryByArray', (req,res) => {
    const {ids} = req.body
    Category.find({_id:ids})
    .then(Categorys => {
      return res.status(200).send(
        {data:Categorys}
      )
    }).catch((error) => {
      console.log(error)
      return res.status(400);
    })
})
