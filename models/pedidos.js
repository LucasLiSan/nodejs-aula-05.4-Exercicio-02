import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Pedido = connection.define('pedidos', 
{
    numPedido:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    valorPedido:{
        type: Sequelize.FLOAT(8,2),
        allowNull:false
    }
});

Pedido.sync({force:false});

export default Pedido;