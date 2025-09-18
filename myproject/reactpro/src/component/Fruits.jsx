// Ek functional component banaya jiska naam Fruits hai
export default function Fruits() {
  // Array of objects banaya jisme har fruit ka naam, price aur emoji rakha hai
  const fruit = [
    { name: "apple", price: 10, emoji: "🍎" },
    { name: "banana", price: 11, emoji: "🍌" },
    { name: "orange", price: 12, emoji: "🍊" },
    { name: "mango", price: 13, emoji: "🥭" },
  ];

  return (
    <div>
      <h2>Fruit List</h2>
      <ul>
        {/* Rendering fruits array using map */}
        {fruit.map((item, index) => (
          // key prop diya (unique value honi chahiye) — yaha index use kiya hai
          <li key={index}>
            {/* Object ke andar ke values show kar rahe hai */}
            {item.name} {item.emoji} — Price: {item.price}₹
          </li>
        ))}
      </ul>
    </div>
  );
}

// React me key dena compulsory hai taki list items ko uniquely identify kare.
// Index ek backup option hai jab id available na ho.
/*
 Explanation:
1. fruit naam ka ek array of objects banaya jisme { name, price, emoji } properties hai.
   Example: { name: "apple", price: 10, emoji: "🍎" }

2. return ke andar ek <div> liya jisme heading aur <ul> banaya.

3. {fruit.map()} ka use kiya array ko loop karne ke liye.
   - map har object (fruit) ko ek–ek karke return karega.
   - har item ke liye ek <li> banega.

4. key={index} diya — React me har list item ko ek unique "key" chahiye hoti hai 
   taki React samajh sake kaun sa element add/remove/update hua hai.

5. item.name, item.emoji aur item.price ko access karke <li> ke andar dikhaya.
