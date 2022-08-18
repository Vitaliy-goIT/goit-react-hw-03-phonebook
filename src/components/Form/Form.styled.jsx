import styled from '@emotion/styled';

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  padding: ${p => p.theme.space[4]}px;
  gap: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.bg};
  border-radius: ${p => p.theme.radii.sm};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  font-family: ${p => p.theme.fonts.body};
`;

export const Input = styled.input`
  max-width: 200px;
  border-radius: ${p => p.theme.radii.sm};
  border: none;
  margin-top: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[2]}px;
  padding-right: ${p => p.theme.space[2]}px;

  :focus {
    outline-color: ${p => p.theme.colors.primary};
  }
`;

export const BtnStyle = styled.button`
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
