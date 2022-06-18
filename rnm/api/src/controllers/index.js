const { v4: uuidv4 } = require("uuid");

class ModelCrud {
  constructor(model) {
    this.model = model;
  }

  getAllModels = async (req, res, next) => {
    try {
      return res.status(200).json(await this.model.findAll());
    } catch (error) {
      next(error);
    }
  };

  getById = async (req, res, next) => {
    const { id } = req.params;
    try {
      return res.status(200).json(await this.model.findByPk(id));
    } catch (error) {
      next(error);
    }
  };

  addModel = async (req, res, next) => {
    const model = req.body;
    try {
      return res.status(201).json(
        await this.model.create({
          ...model,
          id: uuidv4(),
        })
      );
    } catch (error) {
      next(error);
    }
  };

  updateModel = async (req, res, next) => {
    const { id } = req.params;
    const model = req.body;
    try {
      await this.model.update(model, {
        where: {
          id,
        },
      });
      return res.status(200).json("Updated");
    } catch (error) {
      next(error);
    }
  };

  deleteModel = async (req, res, next) => {
    const { id } = req.params;
    try {
      await this.model.destroy({
        where: {
          id,
        },
      });
      return res.status(200).json("Deleted");
    } catch (error) {
      next(error);
    }
  };
}

module.exports = ModelCrud;
