import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Produto = connection.define('produtos', 
{
    nomeProd:{
        type: Sequelize.STRING,
        allowNull:false
    },

    precoProd:{
        type: Sequelize.FLOAT(8,2),
        allowNull: false
    },
    catProd:{
        type: Sequelize.STRING,
        allowNull:false
    },
    imgProd:{
        type: Sequelize.STRING,
        allowNull:true
    }
});

Produto.sync({force:false});

export default Produto;