import Link from "next/link"
const AboutUs=()=>{ 
    return(
        <>
            <h1>Developers</h1>
            <ul>
                <Link href='aboutus/1'><li>Yash</li></Link>
                <Link href='aboutus/2'><li>Vaibhav</li></Link>
                <Link href='aboutus/3'><li>Suresh</li></Link>
            </ul>
        </>
    )
}
export default AboutUs