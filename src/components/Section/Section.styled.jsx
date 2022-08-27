import styled from '@emotion/styled';

export const SectionStyle = styled.section`
  max-width: 400px;
  font-size: ${p => p.theme.fontSizes.s};

  :not(:first-of-type) {
    margin-top: ${p => p.theme.space[6]}px;
  }
`;

export const Title = styled.h2`
  font-size: ${p => p.theme.fontSizes.l};
  font-family: ${p => p.theme.fonts.heading};
  margin-bottom: ${p => p.theme.space[4]}px;
`;
