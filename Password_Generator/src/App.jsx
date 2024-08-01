import { useCallback, useEffect, useState } from "react"


function App() {
  const [nA, setnA] = useState(false)
  const [cA, setcA] = useState(false)
  const [length, setlength] = useState(8)
  const [Password, setPassword] = useState("")
  const [copy, setcopy] = useState(" ")

  let passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"
    let num = "0123456789"
    let char = "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
    if (nA) str += num;
    if (cA) str += char;

    for (let i = 0; i < length; i++) {
      let newValue = Math.floor(Math.random() * str.length)
      pass += str[newValue]

    }
    setPassword(pass)

  }, [length, nA, cA])

  useEffect(() => {
    passwordGenerator()
  }, [length, nA, cA, passwordGenerator])

  const handlecopy = useCallback(() => {
    navigator.clipboard.writeText(Password).then(() => {
      setcopy("Password Copied")
      setTimeout(() => {
        setcopy(" ")
      }, 1500);
    })
  }, [Password])
  return (
    <>

      <div className="grid place-content-center">


        <h1 className="text-red-700 font-bold text-7xl grid place-content-center py-4 mb-5">Password generator</h1>
        <div className="w-full max-w-screen-lg h-auto bg-slate-400 grid place-content-center py-5 rounded-3xl" >



          <span className="flex outline-none rounded-lg ">



            <input type="text"
              value={Password}

              className="outline-none  px-2 py-2 "
              readOnly

              placeholder="Password"
            />
            <button className="bg-blue-700 text-white py-2 px-2 " onClick={handlecopy}>Copy</button>

            <div className="text-black text-xl ml-2 py-1 mt-1">{copy}</div>

          </span>
          <div className="flex gap-4">
            <input type="range"
              min={8}
              max={50}
              value={length}
              onChange={(e) => {
                setlength(e.target.value)
              }}

            />
            <label htmlFor="">Length : {length}</label>

            <input type="checkbox"
              defaultChecked={nA}
              onChange={() => {
                setnA((prev) => !prev)
              }}
            />
            <label htmlFor="checkbox">Numbers</label>
            <input type="checkbox"
              defaultChecked={cA}
              onChange={() => {
                setcA((prev) => !prev)
              }}
            />
            <label htmlFor="checkbox">Charecters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
