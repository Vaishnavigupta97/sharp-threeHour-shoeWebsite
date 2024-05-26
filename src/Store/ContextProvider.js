import { useState } from "react"
import Context from "./Context"

const ContextProvider = ({ children }) => {
    const [shoename, setShoeName] = useState("");
    const [shoeDiscription, setShoeDiscription] = useState("");
    const [shoePrice, setShoePrice] = useState("");
    const [shoeLarge, setShoeLarge] = useState("");
    const [shoeMedium, setShoeMedium] = useState("");
    const [shoeSmall, setShoeSmall] = useState("");



    const value = {
        shoename,
        setShoeName,
        shoeDiscription,
        setShoeDiscription,
        shoePrice,
         setShoePrice,
         shoeLarge,
         setShoeLarge,
         shoeMedium,
         setShoeMedium,
         shoeSmall,
         setShoeSmall
    }
    return <Context.Provider value={value}>{children}</Context.Provider>
}

export default ContextProvider;