import styled from "styled-components";

const InnerStyle = styled.main`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding-top: var(--headerHeight);
  right: 0;
  font-size: 0.75rem;

  @media only screen and (max-width: 767px) {
    max-width: 100%;
    padding-top: calc(var(--headerHeight) / 2);
  }
`;
export default InnerStyle;