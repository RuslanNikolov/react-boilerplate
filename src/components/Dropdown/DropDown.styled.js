import styled, { css } from 'styled-components';

export const Section = styled.main`
  display: flex;
  flex-direction: column;
  background: #fff;
`;

export const Paragraph = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: #4a4a4a;
  margin-bottom: 20px;
`;

export const CoolParagraph = styled(Paragraph)`
  color: blue;
`;

export const ButtonStyles = css`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: ${p => p.theme.color};
  ${p => p && p.secondary`
    background: white;
    color: palevioletred;
  `}
 `

export const CoolerButton = styled.css`
  ${ButtonStyles}
  background: #BADA55;
`