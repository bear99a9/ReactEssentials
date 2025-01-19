import CoreConcept from './CoreConcept.jsx';
import { CORE_CONCEPTS } from '../data.js';

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core concepts!</h2>
      {}
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} /> //Key prop is used as an unique identifer under the hood by react needed to remove console errors
        ))}
      </ul>
    </section>
  );
}
