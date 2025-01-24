export default function Tabs({ children, buttons, ButtonsContainer = 'menu' }) {
  //const ButtonsContainer = buttonsContainer; // If it a capital letter react will treat it as a component and not a build in element as string
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
