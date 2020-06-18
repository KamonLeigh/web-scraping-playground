import Twitter from "./Twitter";
import Instagram from "./Instagram";
import Main from "./styles/layouts/Main";
import SecondTitle from "./styles/SecondaryTitle";
function Data({ data }) {

    const twitter = data.twitter;
    const instagram = data.instagram;

    return (
        <Main>
            <SecondTitle>data</SecondTitle>
            <Twitter data={twitter}/>
            <Instagram data={instagram}/>
        </Main>
        
    )
}




export default Data;