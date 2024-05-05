

export default function CoreComponent({image,description,title}){
    return(
      <li>
        <img src={image}/>
        <h3>{description}</h3>
        <p>{title}</p>
      </li>
    )
  }
  