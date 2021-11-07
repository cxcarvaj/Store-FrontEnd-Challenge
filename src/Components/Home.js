import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { useQuery } from "react-query";
import CardItem from "./CardItem";
import { loadAllItems } from "../../src/Redux/Shopping/Shopping-actions";

const getItems = () => {
  return useQuery("getAllItems", async () => {
    const { data } = await axios.get(
      "https://6ca3a296-b07f-40ba-927c-c0c8842c4bfa.mock.pstmn.io//api/get-all-products"
    );
    return data;
  });
};

const Home = ({ products, loadAllItems}) => {
  const { status, data, error, isFetching } = getItems();
  useEffect(() => {
    loadAllItems(data);
  }, []);
  return (
    <div className="grid gap-4 md:grid-cols-4 grid-cols-1">
      {status === "loading" ? (
        "Loading..."
      ) : status === "error" ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          {products.map((item) => {
            const {
              id,
              images,
              merchant,
              productId,
              productType,
              tags,
              title,
              variants,
            } = item;
            return (
              <React.Fragment key={id}>
                <CardItem
                  productData={item}
                  productId={productId}
                  image={images[0]}
                  title={title}
                  variants={variants}
                />
              </React.Fragment>
            );
          })}
          <div>{isFetching ? "Background Updating..." : " "}</div>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products, //state.shop refers to the reducer
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadAllItems: (products) => dispatch(loadAllItems(products)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
