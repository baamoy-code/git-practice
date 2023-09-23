import Header from "@/components/Header";
import Layout from "@/components/Layout";
import { Html, Head, Main, NextScript } from "next/document";
import {
  MdFlight,
  MdHome,
  MdSettings,
  MdGroup,
  MdInventory,
  MdInventory2,
  MdDataset,
  MdShoppingBag,
} from "react-icons/md";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className=" md:h-screen md:grid md:grid-areas-default md:grid-cols-layout md:grid-rows-layout">
        <div className="header md:grid-in-header px-4 bg-black/40">
          <Header />
        </div>
        <div className="sidebar py-2 grid-in-sidebar  bg-black/40 flex md:flex-col gap-7 items-center justify-center">
          <a href="/" className=" flex flex-col items-center">
            <MdHome className=" text-2xl"/>
            <small className=" text-xs">Home</small>
          </a>
          <a href="/users" className=" flex flex-col items-center">
            <MdGroup className=" text-2xl"/>
            <small className=" text-xs">Users</small>
          </a>
          <a href="/products" className=" flex flex-col items-center">
            <MdInventory className=" text-2xl"/>
            <small className=" text-xs">Products</small>
          </a>
          <a href="/orders" className=" flex flex-col items-center">
            <MdShoppingBag className=" text-2xl"/>
            <small className=" text-xs">Orders</small>
          </a>
        </div>
        <div className="main grid-in-main overflow-y-auto px-6">
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  );
}
