import Twitter from "./Twitter";
import Instagram from "./Instagram";

function Data({ data }) {

    const twitter = data.twitter;
    const instagram = data.instagram;

    return (
        <main>
            <h2>social media data</h2>
            <Twitter data={twitter}/>
            <Instagram data={instagram}/>
        </main>
        
    )
}




export default Data;