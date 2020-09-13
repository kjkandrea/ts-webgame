String("1")

let str = "hello" as const
// str = "bye" // error

interface Profile {
  id: number;
  name: string;
  age: number;
  happy: boolean;
  language: {
      speach: string;
      programming: string;
  };
}

let obj: Profile = {
  "id": 123,
  "name": "andrea",
  "age": 29,
  "happy": true,
  "language": {
    "speach": "korean",
    "programming": "javascript"
  } 
}

enum Color { Red, Green, Blue }
let color: Color = Color.Green

obj?.age

const div = document.createElement('div')
const a = div as HTMLElement