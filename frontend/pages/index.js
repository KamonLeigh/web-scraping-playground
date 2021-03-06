import Data from "../components/Data"
import Container from "../components/styles/layouts/Container";
import Title from "../components/styles/Title";

function HomePage({data}) {


    return (
        <Container>
            <Title>social media analysis</Title>
            <Data data={data}/>
        </Container>
    )
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://localhost:3000/data`);
    const data = await res.json()

    // Pass data to the page via props
    return {
        props: {
            data
        }
    }


}

export default HomePage;
