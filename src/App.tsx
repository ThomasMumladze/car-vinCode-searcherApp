import "./App.css";

import axios from "axios";
import { useState, useMemo, useEffect } from "react";

// ------------------------ component
import Header from "./components/header/Header";

function App() {
    const [data, setData] = useState<any>({});
    const [error, setError] = useState<boolean | null>(null);
    const [vinInput, setVinInput] = useState("");
    const [loading, setLoading] = useState<boolean | null>(null);

    const handleVinEncode = async () => {
        axios
            .get(`https://cors-anywhere.herokuapp.com/https://api.auto.dev/vin/${vinInput}`, {
                headers: {
                    Authorization: "sk_ad_MmwLxWQSYpfC9CuWb4eFui57",
                    "Content-Type": "application/json",
                },
            })
            .then((res) => setData(res.data))
            .catch((err) => console.error(err));
    };

    console.log(data);

    useEffect(() => {
        if (data.status === "BAD_REQUEST") {
            setError(true);
        }
    }, [data]);

    const convertedCategories = useMemo(() => {
        const value: any = {};

        value.categories = Object.entries(data.categories || {}).map(([key, value]) => ({
            key,
            value,
        }));
        return value;
    }, [data]);

    return (
        <>
            <Header
                loading={loading}
                error={error}
                vinEncoder={vinInput}
                setVinEncoder={setVinInput}
                handleVinEncode={handleVinEncode}
            />
        </>
    );
}

export default App;
