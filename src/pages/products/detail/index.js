import { Fragment, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_DETAIL_PRODUCTS } from '../../../graphql/products/Queries';
import { ReplaceToStartUpperCase } from '../../../utils/replace';
import { Section, Heading, ProductDetail } from '../../../components';

const Index = ({ match }) => {
  const { loading, data } = useQuery(LOAD_DETAIL_PRODUCTS, {
    variables: { slug: ReplaceToStartUpperCase(match.params.slug) },
  });
  const [productsDetail, setProductsDetail] = useState({});

  useEffect(() => {
    if (!loading) {
      setProductsDetail({
        name: data.products[0].data.name,
        price: data.products[0].data.price,
        rating: data.products[0].data.rating,
        imageurl: data.products[0].data.image.url,
      });
    }
  }, [loading, data]);

  return (
    <Section>
      {loading && <p>Loading...</p>}

      {!loading && (
        <Fragment>
          <Heading title="Product Detail" />
          <ProductDetail data={productsDetail} />
        </Fragment>
      )}
    </Section>
  );
};

export default Index;
