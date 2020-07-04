import Repository from "../repository.ts";
import Product from "../../models/product.ts";
import Database from "../../database/database.ts";

class ProductRepository implements Repository<number, Product> {
  async getAll(): Promise<Product[]> {
    const result = await Database.query("select * from products;");

    const products = result.rowsOfObjects() as Product[];

    return products;
  }

  async get(identifier: number): Promise<Product> {
    const result = await Database.query({
      text:
        `select id, name, price, barcode, description from products where id=$1;`,
      args: [identifier],
    });

    return result.rowsOfObjects()[0] as Product;
  }

  async post(product: Product): Promise<Product> {
    const result = await Database.query({
      text: "insert into products (id, name, price, barcode, description)" +
        " values ($1, $2, $3, $4, $5) returning name, price, barcode;",
      args: [
        product.id,
        product.name,
        product.price,
        product.barcode,
        product.description,
      ],
    });

    return result.rowsOfObjects()[0] as Product;
  }

  async put(product: Product): Promise<Product> {
    console.log(product)
    const result = await Database.query({
      text: "update products set name=$2, price=$3, description=$4 where id=$1",
      args: [
        product.id,
        product.name,
        product.price,
        product.description,
      ],
    });

    return result.rowsOfObjects()[0] as Product;
  }

  async delete(identifier: number): Promise<Product> {
    const result = await Database.query({
      text: "delete from products where id=$1 returning id, name, description;",
      args: [
        identifier,
      ],
    });

    return result.rowsOfObjects()[0] as Product;
  }
}

export default new ProductRepository();
