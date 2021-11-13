export default function Multiply() {
  const curriedMultiply = (a) => (b) => a * b;

  const curriedMultiplyBy5 = curriedMultiply(5);
  const element2 = console.log(curriedMultiplyBy5(4));

  const curryAddition = (a) => (b) => a + b;
  const element = console.log(curryAddition(500)(25));

  return (
    <div>
      {element} {element2}
    </div>
  );
}
