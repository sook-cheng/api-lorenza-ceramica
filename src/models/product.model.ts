import { DataTypes, DATE, Model, Sequelize } from "sequelize";

export class Product extends Model { }

export const ProductFactory = (sequelize: Sequelize) => {
    return sequelize.define('products', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        },
        code: {
            type: DataTypes.STRING,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
        },
        variation: {
            type: DataTypes.STRING,
        },
        color: {
            type: DataTypes.STRING,
        },
        size: {
            type: DataTypes.STRING,
        },
        finish: {
            type: DataTypes.STRING,
        },
        measurement: {
            type: DataTypes.STRING,
        },
        price: {
            type: DataTypes.DOUBLE,
        },
        imagesCount: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        images: {
            type: DataTypes.STRING
        },
        createdAt: {
          allowNull: false,
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW
        },
        updatedAt: {
          allowNull: false,
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW
        }
    });
}
