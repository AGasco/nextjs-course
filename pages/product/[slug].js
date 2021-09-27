import { useRouter } from 'next/router';
import NextLink from 'next/link';
import Image from 'next/image';
import {
  Button,
  Card,
  Grid,
  Link,
  List,
  ListItem,
  Typography
} from '@material-ui/core';
import React from 'react';
import data from '../../utils/data';
import Layout from './../../components/Layout';
import useStyles from '../../utils/styles';

function ProductPage() {
  const classes = useStyles();
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((a) => a.slug === slug);
  if (!product) {
    return <div>Product Not Found</div>;
  }

  return (
    <Layout title={product.name} description={product.description}>
      <div className={classes.section}>
        <NextLink href="/" passHref>
          <Link>Back to products</Link>
        </NextLink>
      </div>
      <Grid container spacing={1}>
        <Grid item md={6} xs={12}>
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            layout="responsive"
          />
        </Grid>
        <Grid item md={3} xs={12}>
          <List>
            <ListItem>
              <Typography component="h1" variant="h1">
                {product.name}
              </Typography>
            </ListItem>
            <ListItem>Category: {product.category}</ListItem>
            <ListItem>Brand: {product.brand}</ListItem>
            <ListItem>
              Rating: {product.rating} stars ({product.numReviews} reviews)
            </ListItem>
            <ListItem>Description: {product.description}</ListItem>
          </List>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    Price
                  </Grid>
                  <Grid item xs={6}>
                    ${product.price}
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    Status
                  </Grid>
                  <Grid item xs={6}>
                    {product.countInStock > 0 ? 'In Stock' : 'Unavailable'}
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Add to Cart
                </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default ProductPage;
