import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  function handleClick(clickedTab) {
    console.log(`Hi ${clickedTab}`);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts!</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>
            <menu>
              <TabButton onClick={() => handleClick('components')}>Components</TabButton>
              <TabButton onClick={() => handleClick('jsx')}>JSX</TabButton>
              <TabButton onClick={() => handleClick('props')} >Props</TabButton>
              <TabButton onClick={() => handleClick('state')}>State</TabButton>
            </menu>

          </h2>
        </section>
      </main>
    </div>
  );
}

export default App;
