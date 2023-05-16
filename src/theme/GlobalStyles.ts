import { createGlobalStyle } from 'styled-components';
import { flexColumnCenter } from './Mixins';

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
}
:root {
  --primary1: #6c757d;
  --primary2: #8b939a;
  --primary3: #a48d6b;
  --primary4: #643e26;
  --primary5: #0a0603;

  --primary6: #ffae42;
  --primary7: #00b600;
  --primary8: #fa0000;
  --primary9: #c2c5cc;
  --primary10: #0060fb;

  --transition: 0.3s;
  --radius: 5px;
}

main {
  ${flexColumnCenter}
  min-height: calc(100vh - 11rem);
}

section {
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
  margin-bottom: 5rem;

  &.full-width-section {
    max-width: 100%;
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  margin-bottom: 1.38rem;
  line-height: 1.3;
  text-transform: capitalize;
}
ul {
  list-style-type: none;
}
a {
  color: black;
}
.no-underline-a{
  text-decoration: none;
}
p {
  margin-bottom: 1.5rem;
  max-width: 90vw;
}

.btn {
  color: white;
  background: seagreen;
  padding: 1rem;
  border: 1px solid transparent;
  font-size: 16px;
  border-radius: var(--radius);
  transition: var(--transition);
}
.btn:hover {
  border: 1px solid seagreen;
  background: white;
  color: seagreen;
}

.page-heading{
  text-align: center;
  margin: 2rem;
}

.section-title,
.entity-title {
  text-align: center;
}

.page-title{
  padding-top: 2rem;
}

.section-title {
  font-size: 48px;
}
.entity-title {
  font-size: 24px;
  padding: 2rem;
}

.sign-symbol,.sign-text {
  margin-bottom: 0;
}

.entity {
  background: red;
}
`;

export default GlobalStyle;
