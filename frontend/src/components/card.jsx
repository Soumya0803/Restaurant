function Card(props) {
    const { title, description,image,price } = props;
    // const title=props.title
    // props={
    //     title:"Soumya"
    // }
    return <>
        <div className="card mb-3 ms-3" style={{maxWidth:"400px"}}>
            {/* {{marginRight: spacing + 'em'}} */}
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={image} className="img-fluid rounded-start" alt="..." style={{height:"250px"} }/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                       
                        <p className="card-text"><small className="text-muted">{price}</small></p>
                        <button class="btn-secondary float-end mb-2">
                            Add to Cart
                        </button>
                        
                    </div>
                </div>
            </div>
        </div>
        </>;
}
export default Card;