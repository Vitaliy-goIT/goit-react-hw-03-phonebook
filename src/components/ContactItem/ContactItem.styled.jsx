import styled from '@emotion/styled';

export const TextStyle = styled.span`
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.text};
`;

export const DelBtnStyle = styled.button`
  font-family: ${p => p.theme.fonts.monospace};
  width: fit-content;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.primary};
  border-radius: ${p => p.theme.radii.sm};
  border: none;

  :hover {
    background-color: ${p => p.theme.colors.secondary};
  }
  :active {
    background-color: ${p => p.theme.colors.total};
  }
`;
