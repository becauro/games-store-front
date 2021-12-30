import React from 'react';
import ProductList from '../../components/product/ProductList';
import Header from '../../shared_components/Header';
import './homePage.css';
/* eslint-disable */
export default function Home() {

  return (
    <div className="home-page">
      <Header />
      <ProductList />
    </div>
  )
}
