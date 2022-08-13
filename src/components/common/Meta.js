import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Better Place Living",
  description:
    "Better place living key objectives revolve around independence, we strive to make each client capable and able to get back to their feet in the community, from walks and outgoings to daily house tasks such as cleaning and cooking. We are always there for the extra little bit of support if our clients require it.",
  keywords:
    "betterplaceliving, betterlivingplace, betterplace, betterplaceliving.co.uk, betterliving, bpl",
};

export default Meta;
