import { DataTypes, Model, Sequelize } from "sequelize";

export class Category extends Model { }

export const CategoryFactory = (sequelize: Sequelize) => {
    return sequelize.define('categories', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
        },
        mainCategoryId: {
            type: DataTypes.UUID,
            references: {
                model: Category,
                key: 'id'
            }
        }
    });
}
