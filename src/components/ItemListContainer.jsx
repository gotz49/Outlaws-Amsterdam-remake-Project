
const ItemListContainer= (props) => {
     return (
          <article className="ListContainer">
               <h2>{props.greeting}</h2>
               <h3>{props.text}</h3>
               <div>
                    <p>Soy un prop : {props.relleno}: Fin del prop</p>
               </div>
          </article>
     )
}

export default ItemListContainer;