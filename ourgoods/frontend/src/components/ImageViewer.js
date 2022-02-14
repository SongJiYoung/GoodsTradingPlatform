import React from 'react';
import styled from 'styled-components';

const StyledImgDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 30rem;
  max-height: 30rem;
`;

const ImageViewer = ({ image }) => {
  return (
    <StyledImgDiv>
      <strong>업로드된 이미지</strong>
      {image && <img src={image} alt="업로드 이미지" />}
      <div className="img__box"></div>
    </StyledImgDiv>
  );
};

export default ImageViewer;
