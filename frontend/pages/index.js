import Data from "../components/Data"

function HomePage({data}) {


    return (
        <main>
            <h1>Home page!!!!</h1>
            <Data data={data}/>
        </main>
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
