import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/Components.png';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max));
}

function Header() {
  const description = reactDescriptions[genRandomInt(reactDescriptions.length)]

  return (
    <div>
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    </div>
  );
}

function CoreConcept(props){
  return (
    <li>
      <img src={props.img} alt="Component Img" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}
function App() {
  return (
    <div>
      <Header/>
      <main>
        <section id='core-concepts'>
          <h2>Core concepts!</h2>
          <ul>
            <CoreConcept title="Components" description="The core UI building block" img={componentsImg}/>
            <CoreConcept title="Props" description="The core UI building block" img={componentsImg}/>
            <CoreConcept title="Dynamic Values" description="The core UI building block" img={componentsImg}/>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
