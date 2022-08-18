import styled from '@emotion/styled';

export const FilterStyle = styled.input`
  display: block;
  width: 200px;
  border-radius: ${p => p.theme.radii.sm};
  border: 1px solid ${p => p.theme.colors.primary};
`;
