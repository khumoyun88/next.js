import Link from "next/link"
import React from "react"



export default function page() {
    return(
        <div>
            <h2 className="mb-100 text-slate-100" >Thats About page</h2>

            <Link className="mr-20 mt-5 inline-block " href={"about/teacher"}>Teacher</Link>
            <Link  href={"about/student"}>Student</Link>
        </div>
    )
    
}

 