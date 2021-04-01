import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: '전자몰',
  description: '최저가 전자제품을 자랑합니다!',
  keywords: 'electronics, buy electronics, cheap electronics',
};

export default Meta;
