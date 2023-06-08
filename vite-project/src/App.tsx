import { useState } from "react";

// import "./App.css";

function App() {
    const [todo, setTodo] = useState<string>("");
    const [list, setList] = useState<string[]>([]);
    const addToList = () => {
        setList([...list, todo]);
    };
    return (
        <>
            <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button onClick={addToList}>Add</button>
            <ul>
                {list.map((ele, id) => (
                    <li key={id}>{ele}</li>
                ))}
            </ul>
        </>
    );
}

export default App;

// const myName = "raeed";
// const [name, setName] = useState(myName);
// const toggleName = (newname: string) => {
//     if (name == myName) setName(newname);
//     else setName(myName);
// };
// return (
//     <>
//         <div>
//             <button
//                 onClick={() => {
//                     toggleName("Faisal");
//                 }}
//             >
//                 Toggle
//             </button>
//             <h1>{name}</h1>
//         </div>
//     </>
// );
// const [result, setResult] = useState(0);
// const a = 1;
// const b = 2;
// return (
//     <>
//         <p>
//             A = {a} ,B = {b}
//         </p>
//         <button
//             onClick={() => {
//                 setResult(a + b);
//             }}
//         >
//             +
//         </button>
//         <button
//             onClick={() => {
//                 setResult(a - b);
//             }}
//         >
//             -
//         </button>
//         <button
//             onClick={() => {
//                 setResult(a * b);
//             }}
//         >
//             *
//         </button>
//         <button
//             onClick={() => {
//                 setResult(a / b);
//             }}
//         >
//             /
//         </button>

//         <h1>{result}</h1>
//     </>
// );
// const [rate, setRate] = useState(0);
// const Validate = () => {
//     if (rate <= 2) {
//         alert("nononono");
//     } else console.log("yeee");
// };
// return (
//     <>
//         <input
//             type="range"
//             max={10}
//             onChange={(e: any) => {
//                 setRate(e.target.value);
//             }}
//         />
//         <textarea name="" id="" cols={20} rows={10}></textarea>
//         <button onClick={Validate}>submit</button>
//     </>
// );
