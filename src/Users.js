import { useParams } from "react-router-dom";

export default function Users(){
    const p = useParams();
    console.log(p);

    return(
        <h1>User Page</h1>
    );
}