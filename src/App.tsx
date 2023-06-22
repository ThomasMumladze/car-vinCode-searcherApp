import "./App.css";

import axios from "axios";
import { useState, useMemo, useEffect } from "react";

// ------------------------ component
import Header from "./components/header/Header";
import Categories from "./components/categories/Categories";
import Engine from "./components/engine/Engine";
import Make from "./components/make/Make";
import CarModel from "./components/carModel/CarModel";
import CarPrice from "./components/carPrice/CarPrice";
import { Card } from "./components/Card";
import Transmission from "./components/transmission/Transmission";
import Years from "./components/years/Years";

function App() {
    const [data, setData] = useState<any>({});
    const [error, setError] = useState<boolean | null>(null);
    const [vinEncoder, setVinEncoder] = useState("");
    const [loading, setLoading] = useState<boolean | null>(null);

    const handleVinEncode = () => {
        setLoading(true);
        try {
            setTimeout(() => {
                axios
                    .get(
                        `https://auto.dev/api/vin/${vinEncoder}?apikey=ZrQEPSkKdGVhbW1hdHJpeGVzcEBnbWFpbC5jb20=`
                    )
                    .then((response) => {
                        setData(response.data);
                        setError(null);
                        setLoading(false);
                    })
                    .catch(() => {
                        setError(true);
                        setLoading(null);
                    });
            }, 556);
        } catch (error) {
            throw new Error();
        }
    };

    useEffect(() => {
        if (data.status === "BAD_REQUEST") {
            setError(true);
        }
    }, [data]);

    const convertedCategories = useMemo(() => {
        const value: any = {};

        value.categories = Object.entries(data.categories || {}).map(
            ([key, value]) => ({
                key,
                value,
            })
        );
        return value;
    }, [data]);

    const convertedEngineData = useMemo(() => {
        const value: any = {};

        value.engine = Object.entries(data.engine || {}).map(
            ([key, value]) => ({
                key,
                value,
            })
        );
        return value;
    }, [data]);

    const convertedMakeData = useMemo(() => {
        const value: any = {};

        value.make = Object.entries(data.make || {}).map(([key, value]) => ({
            key,
            value,
        }));
        return value;
    }, [data]);

    const convertedModelData = useMemo(() => {
        const value: any = {};

        value.model = Object.entries(data.model || {}).map(([key, value]) => ({
            key,
            value,
        }));
        return value;
    }, [data]);

    const convertedPriceData = useMemo(() => {
        const value: any = {};
        value.price = Object.entries(data.price || {}).map(([key, value]) => ({
            key,
            value,
        }));
        return value;
    }, [data]);

    const convertTransmissionData = useMemo(() => {
        const value: any = {};
        value.transmission = Object.entries(data.transmission || {}).map(
            ([key, value]) => ({ key, value })
        );
        return value;
    }, [data]);

    const convertYearsData = useMemo(() => {
        const value: any = {};
        value.years = Object.entries(data.years || {}).map(([key, value]) => ({
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
                vinEncoder={vinEncoder}
                setVinEncoder={setVinEncoder}
                handleVinEncode={handleVinEncode}
            />

            <div className="cars">
                <div className="cars-data_Wrapper categories">
                    <h1>Categories</h1>
                    {convertedCategories.categories.map((categories: any) => (
                        <Categories data={categories} />
                    ))}
                </div>

                <div className="cars-data_Wrapper engine">
                    <h1>Engine</h1>
                    {convertedEngineData.engine.map((engine: any) => (
                        <Engine data={engine} />
                    ))}
                </div>

                <div className="cars-data_Wrapper make">
                    <h1>make</h1>
                    {convertedMakeData.make.map((make: any) => (
                        <Make data={make} />
                    ))}
                </div>

                <div className="cars-data_Wrapper model">
                    <h1>model</h1>
                    {convertedModelData.model.map((model: any) => (
                        <CarModel data={model} />
                    ))}
                </div>

                <div className="cars-data_Wrapper price">
                    <h1>price</h1>
                    {convertedPriceData.price.map((model: any) => (
                        <CarPrice data={model} />
                    ))}
                </div>
            </div>

            <div className="cars">
                <div className="cars-data_Wrapper drivenWheels">
                    <Card>
                        <h1>drivenWheels</h1>
                        <ul>
                            <li>{data.drivenWheels}</li>
                        </ul>
                    </Card>
                </div>

                <div className="cars-data_Wrapper manufacturerCode">
                    <Card>
                        <h1>manufacturerCode</h1>
                        <ul>
                            <li style={{ color: "lawngreen" }}>
                                {data.manufacturerCode}
                            </li>
                        </ul>
                    </Card>
                </div>

                <div className="cars-data_Wrapper matchingType">
                    <Card>
                        <h1>matchingType</h1>
                        <ul>
                            <li>{data.matchingType}</li>
                        </ul>
                    </Card>
                </div>

                <div className="cars-data_Wrapper numOfDoors">
                    <Card>
                        <h1>numOfDoors</h1>
                        <ul>
                            <li>{data.numOfDoors}</li>
                        </ul>
                    </Card>
                </div>

                <div className="cars-data_Wrapper squishVin">
                    <Card>
                        <h1>squishVin</h1>
                        <ul>
                            <li style={{ color: "lawngreen" }}>
                                {data.squishVin}
                            </li>
                        </ul>
                    </Card>
                </div>
            </div>

            <div className="cars">
                <div className="cars-data_Wrapper transmission">
                    <h1>transmission</h1>
                    {convertTransmissionData.transmission.map(
                        (transmission: any) => (
                            <Transmission data={transmission} />
                        )
                    )}
                </div>

                <div className="cars-data_Wrapper years">
                    <h1>years</h1>
                    {convertYearsData.years.map((years: any) => (
                        <Years data={years} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default App;
