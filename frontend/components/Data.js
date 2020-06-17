import Twitter from "./Twitter";

function Data({ data }) {
    console.log(data);
    const twitter = data.twitter;
    const instagram = data.instagram;

    return (
        <div>
            <h2>social media data</h2>
            <Twitter data={twitter}/>
        </div>
        
    )
}




export default Data;