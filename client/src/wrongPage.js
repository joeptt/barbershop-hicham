import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function WrongPage() {
    const history = useHistory();
    useEffect(() => {
        history.push("/");
    }, []);
    return <></>;
}
