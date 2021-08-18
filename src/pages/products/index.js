import { Fragment, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_PRODUCTS } from '../../graphql/products/Queries';
import { Section, Heading, ProductList } from '../../components';

const Index = () => {
  const { loading, data } = useQuery(LOAD_PRODUCTS);
  const [dataProducts, setDataProducts] = useState([]);

  useEffect(() => {
    if (!loading) {
      const arrProducts = [];
      const resultProducts = data.products;
      for (let i = 0; i < resultProducts.length; i++) {
        arrProducts.push({
          name: resultProducts[i].data.name,
          price: resultProducts[i].data.price,
          rating: resultProducts[i].data.rating,
          imageurl: resultProducts[i].data.image.url,
        });
      }
      setDataProducts(arrProducts);
    }
  }, [loading, data]);

  return (
    <Section>
      {loading && <p>Loading...</p>}

      {!loading && (
        <Fragment>
          <Heading title="Product List" />
          <ProductList data={dataProducts} />
        </Fragment>
      )}
    </Section>
  );
};

export default Index;
