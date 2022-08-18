import styled from '@emotion/styled';

export const ItemStyle = styled.li`
  display: flex;
  justify-content: space-between;
`;

export const ListStyle = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[3]}px;
  margin-top: ${p => p.theme.space[4]}px;
`;
