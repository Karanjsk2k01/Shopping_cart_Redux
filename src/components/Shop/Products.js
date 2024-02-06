import ProductItem from './ProductItem';
import classes from './Products.module.css';

const dummy_data = [
  {
    id: 'p1',
    price: 10,
    title: 'This is my first book'
  },
  {
    id: 'p2',
    price: 20,
    title: 'This is my second book'
  }, {
    id: 'p3',
    price: 15,
    title: 'This is my third book'
  },


]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummy_data.map((items) => (
          <ProductItem
            key={items.id}
            id={items.id}
            title={items.title}
            price={items.price}
          />
        ))
        }
      </ul>
    </section>
  );
};

export default Products;
