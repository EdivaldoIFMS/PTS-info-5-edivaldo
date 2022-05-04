'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  usuario.init({
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'usuario',
  });
  return usuario;
};
//http://luizpicolo.com.br/inserir?id-123 req.query.id
//http://luizpicolo.com.br/inserir/123 req.params.id
//http://luizpicolo.com.br/inserir req.body.id