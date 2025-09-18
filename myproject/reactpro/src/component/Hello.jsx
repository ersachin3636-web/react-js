// Variable bana sakte hai aur usko JSX me use kar sakte hai
const name = "Sachin";

// Function bana ke usko bhi call kar sakte hai JSX me
function displayMessage() {
  return "Wow";
}

//  Ye hai ek React Functional Component
function Hello() {
  return (
    // React me return ke andar ek hi parent tag hona chahiye
    // isliye sab ko <div> ke andar wrap karte hai
    <div>
      {/* 1. Variable ko dikhana */}
      <h1>Hello {name}</h1>

      {/* 2. Function call kar ke uska result dikhana */}
      <h2>This is my first component — {displayMessage()}</h2>

      {/* 3. Direct calculation bhi kar sakte hai */}
      <p>2 + 2 = {2 + 2}</p>

      {/* 4. Conditional Rendering (ternary operator use karke) */}
      <p>{name === "Sachin" ? "Yes, it's Sachin" : "No, not Sachin"}</p>

      {/* 5. Array ko loop karke list banana */}
      <ul>
        {["Apple", "Mango", "Banana"].map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

      {/* 6. Inline CSS styling */}
      <p style={{ color: "blue", fontWeight: "bold" }}>
        This text is styled with inline CSS
      </p>

      {/* 7. Multiple elements ek sath */}
      <div>
        <h3>Inside another div</h3>
        <p>You can nest tags</p>
      </div>
    </div>
  );
}

// Component ko export karna zaruri hai taki dusri file me use kar sake
export default Hello;
