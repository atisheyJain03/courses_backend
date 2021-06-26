import React from "react";
import Helmet from "react-helmet";

export default function MetaDecorative({ title, heading, time, image, id }) {
  // console.log(
  //   "🚀 ~ file: MetaDecorative.js ~ line 5 ~ MetaDecorative ~ heading",
  //   heading
  // );
  // console.log(
  //   "🚀 ~ file: MetaDecorative.js ~ line 5 ~ MetaDecorative ~ image",
  //   image
  // );
  return (
    <Helmet>
      {/* <title>{title}</title>
      <meta name="description" content={heading} />
      <link rel="canonical" href={`https://coursesbackend.web.app/${id}`} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={title} />
      <meta
        property="og:url"
        content={`https://coursesbackend.web.app/${id}`}
      />
      <meta property="og:site_name" content="inQueue" />
      <meta property="article:published_time" content={time} />
      <meta property="article:modified_time" content={time} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="480" />
      <meta property="og:image:height" content="270" /> */}
    </Helmet>
  );
}
