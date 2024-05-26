import { useContext } from "react";
import Context from "../Store/Context";

function ShoeForm(props) {
    const {
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
    } = useContext(Context);
    const shoenameHandler = (event) => {
        setShoeName(event.target.value)
    }
    const shoeDiscriptionHandler = (event) => {
        setShoeDiscription(event.target.value)
    }
    const shoePricehandler = (event) => {
        setShoePrice(event.target.value)
    }
    const shoeLargeHandler = (event) => {
        setShoeLarge(event.target.value)
    }
    const shoeMediumHandler = (event) => {
        setShoeMedium(event.target.value)
    }
    const shoeSmallHandler = (event) => {
        setShoeSmall(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const formObj = {
            shoename: shoename,
            shoeDes: shoeDiscription,
            shoePrice: shoePrice,
            large : shoeLarge,
            medium : shoeMedium,
            small : shoeSmall
        }
        props.showFormObj(formObj);
        // console.log(formObj);
    }
    return (
        <>
            <form onSubmit={submitHandler}>
                <div>
                    <label>ShoeName</label>
                    <input type="text" value={shoename} onChange={shoenameHandler} />
                </div>
                <div>
                    <label>Description</label>
                    <input type="text" value={shoeDiscription} onChange={shoeDiscriptionHandler} />
                </div>
                <div>
                    <label>Price</label>
                    <input type="number" value={shoePrice} onChange={shoePricehandler} />
                </div>
                <div>
                    <label>Quantity Availablle</label>
                    <div>
                        <label>L</label>
                        <input type="number" value={shoeLarge} onChange={shoeLargeHandler} />
                    </div>
                    <div>
                        <label>M</label>
                        <input type="number" value={shoeMedium} onChange={shoeMediumHandler} />
                    </div>
                    <div>
                        <label>S</label>
                        <input type="number" value={shoeSmall} onChange={shoeSmallHandler} />
                    </div>
                </div>
                <div>
                    <button type="submit">Add Product</button>
                </div>
            </form>
            <div>
                <p>Cart 0</p>
            </div>
        </>
    )
}

export default ShoeForm;