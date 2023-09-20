// import { useState} from "react";
// const State = () => {
//     const [numbers, setNumbers] = useState([1,2,3])
//     const addNumber = () => {
//         const num = numbers.length + 1;
//         const newArr = [...numbers, num];
//         setNumbers(newArr)
//     }
//     const addRandNumber = () => {
//         const randNum = Math.round(Math.random() * 10);
//         const randArr = [...numbers, randNum];
//         setNumbers(randArr)
//     }
//     return(
//         <div>
//             <ul>
//                 {numbers.map((num,index) => {
//                     return(
//                         <li key={index}>{num}</li>
//                     )
//                 })}
//             </ul>
//             <button className={'add_btn'} onClick={addNumber}>Add number</button>
//             <button className={'rdm_btn'} onClick={addRandNumber}>Add random number</button>
//         </div>
//     );
// }
// export default State;