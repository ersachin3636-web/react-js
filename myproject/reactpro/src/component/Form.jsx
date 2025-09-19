
export default function Form(){
    function handleChange(){
        console.log("hello")
    }
return (
    <div>
        <form action="">
            <input onChange={handleChange} type="text" value="Enter Full Name" />
        </form>
    </div>
)
}