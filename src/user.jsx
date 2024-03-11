export default function User ({user}){
   const {name, email}= user

    return(
        <div style={{border:'2px solid tomato', margin:'15px'}}>
            <h4>name:{name}</h4>
            <p>email:{email}</p>

        </div>
    )


}