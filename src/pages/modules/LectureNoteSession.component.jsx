import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import {useState} from 'react'
export default function App() {
  const [convertedText, setConvertedText] = useState("Some default content");
  console.log(convertedText)
  return (
    <div>
      <ReactQuill
        theme='snow'
        value={convertedText}
        onChange={setConvertedText}
        style={{minHeight: '300px'}}
      />
    </div>
  );
}