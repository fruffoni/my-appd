import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import BasicButtons from"@/components/button"
import Layout from "@/components/layout";
import ImgMediaCard from "@/components/card";
import { Style } from "@mui/icons-material";
import ColumnSpacing from "@/components/img";
export default function Home() {
  return (
    <Layout>


    <ColumnSpacing/>

 
<container maxwidth="sm" className={Style.colore}/>
  </Layout>
  );
}





