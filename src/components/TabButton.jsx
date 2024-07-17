export default function TabButton({ children }) {
  function handleClick() {
    console.log("Hi");
  }

  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}
