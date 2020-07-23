const repository = require('../repositories/orders');


exports.getAll = async(req,res,next) =>{
  try {
      var data = await repository.get();  
      res.status(200).send(data);      
  } catch (error) {
  res.status(500).send({
      message: 'Fail to request'
  });
  }    
};


exports.getById = async(req,res,next) =>{
  try {
      var data = await repository.getById(req.params.id)
      res.status(200).send(data);     
  } catch (error) {
  res.status(500).send({
      message: 'Fail to request'
  });
  }   
};

exports.getByCustomer = async(req,res,next) =>{
  try {
      var data = await repository.getByCustomer(req.params.cpf)
      res.status(200).send(data);     
  } catch (error) {
  res.status(500).send({
      message: 'Fail to request'
  });
  }   
};

// Used by: Admin
exports.getGroup = async (req, res) => {
  return true;
};

// Used by: Customer
exports.createOne = async (req, res) => {
	await repository
	  .createOne(req.body)
	  .then(() => {
		res.status(201).send({
		  message: 'Pedido cadastrado!',
		});
	  })
	  .catch((e) => {
		res.status(400).send({
		  message: 'Falha no cadastrado',
		  data: e,
		});
	  });
  };

// Used by: Admin
exports.updateAll = async (req, res) => {
  return true;
};

// Used by: Admin
exports.updateById = async (req, res) => {
  return true;
};

// Used by: Admin
exports.deleteById = async (req, res) => {
	await repository
	  .deleteById(req.params.id)
	  .then(() => {
		res.status(200).send({
		  message: 'Produto removido',
		});
	  })
	  .catch((e) => {
		res.status(400).send({
		  message: 'Falha ao remover produto',
		  data: e,
		});
	  });
  };