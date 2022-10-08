import Cta from '../components/Cta/Cta';
import { textCta } from '../helpers/text';
import Form from '../components/Form/Form';
import Button from '../components/Button/Button';
import { colors } from '../helpers/color';
import { GlobalStyles } from '../Globalstyle.style';
import { AppStyled, SectionInfoStyled, SectionFormStyled } from './app.style';

function App() {
  return (
    <AppStyled>
      <SectionInfoStyled>
        <Cta title={textCta.title} para={textCta.para}/>
      </SectionInfoStyled>

      <SectionFormStyled>
        <Button color={colors.accent.Blue} content="then $20/mo. thereafter" strong='Try it free 7 days'></Button>
        <Form></Form>
      </SectionFormStyled>

      <GlobalStyles></GlobalStyles>
    </AppStyled>
  );
}

export default App;
