import _React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Image = () => {
  const imageUrls = [
    'http://heartsunitedfun.org/uploads/1/2/0/9/120929852/311835361.jpg',
    'http://heartsunitedfun.org/uploads/1/2/0/9/120929852/42229153-929486790582303-1823594894283767808-n_orig.jpg',
    'http://heartsunitedfun.org/uploads/1/2/0/9/120929852/42303220-929486560582326-9065584511881838592-n_orig.jpg',
    'http://heartsunitedfun.org/uploads/1/2/0/9/120929852/42198478-929497183914597-1446600244342030336-n_orig.jpg',
    'http://heartsunitedfun.org/uploads/1/2/0/9/120929852/33870862-836342989896684-2630064463981576192-n_orig.jpg',
    'http://heartsunitedfun.org/uploads/1/2/0/9/120929852/33872697-836343436563306-7520900142350729216-n_orig.jpg',
    'http://heartsunitedfun.org/uploads/1/2/0/9/120929852/33901259-836343986563251-845431691940986880-n_orig.jpg',
    'http://heartsunitedfun.org/uploads/1/2/0/9/120929852/33961309-836343256563324-5403926468847730688-n_orig.jpg',
    'http://heartsunitedfun.org/uploads/1/2/0/9/120929852/34014470-836342933230023-3966320551743455232-n_orig.jpg',


  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const containerStyle = {
    backgroundColor: 'gray', 
    padding: '20px', 
  };

  return (
    <div style={containerStyle}>
      <Slider {...settings}>
        {imageUrls.map((imageUrl, index) => (
          <div key={index} className="carousel-item">
            <img src={imageUrl} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
