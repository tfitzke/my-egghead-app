import { NextPage } from "next"
import Link from "next/link";
const IndexPage: NextPage = () => {
    return (
        <div>
            <h1>Hello World</h1>
            <Link href='/about'>Go to AboutPage</Link>
        </div >
    )
}

export default IndexPage