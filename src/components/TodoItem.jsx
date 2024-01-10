export default function TodoItem({ content, isComplete }) {
  // Ternary operator
  // Short curcuit

  return (
    <div className="p-4 bg-blue-100 rounded-lg">
      {content}
      {/* {isComplete ? "✅" : ""}  */}
      {isComplete && "✅"}
    </div>
  );
}
