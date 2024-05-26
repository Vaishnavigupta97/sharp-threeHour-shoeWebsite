const ShowShoeItem = (props) => {
    return(
        <>
        {
            props.showItem.map((item, index) => {
                return(
                    <>
                    <p>{item.shoename}</p>
                    <p>{item.shoeDes}</p>
                    <p>{item.shoePrice}</p>
                    <p>{item.large}</p>
                    <p>{item.medium}</p>
                    <p>{item.small}</p>
                    </>
                )
            })
        }
        <p>this is ShowShoeItem</p>
        </>
    )
}

export default ShowShoeItem;