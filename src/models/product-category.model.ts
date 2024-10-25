import { DataTypes, Model, Sequelize } from "sequelize";
import { Product } from "./product.model";
import { Category } from "./category.model";

export class ProductCategory extends Model { }

export const ProductCategoryFactory = (sequelize: Sequelize) => {
    return sequelize.define('productsCategories', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        },
        productId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: Product,
                key: 'id'
            }
        },
        categoryId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: Category,
                key: 'id'
            }
        }
    });
}
