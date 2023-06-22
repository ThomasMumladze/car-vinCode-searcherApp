import { useMemo } from "react";
import { Card } from "../Card";
interface Props {
    data: any;
}
const Years = (props: Props) => {
    const convertSubModule = useMemo(() => {
        const value: any = {};
        value.styles = Object.entries(props.data.value.styles || {}).map(
            ([key, value]) => ({
                key,
                value,
            })
        );
        return value;
    }, [props.data]);
    return (
        <Card>
            <h1></h1>

            <ul style={{ display: "flex", flexDirection: "column" }}>
                <li>{props.data.value.year}</li>
                <p
                    style={{
                        color: "#FFF",
                        borderBottom: "solid 1px #ccc",
                        marginTop: " 10px",
                        marginBottom: "8px",
                        fontSize: "1.2rem",
                    }}
                >
                    styles
                </p>
                {props.data.value.styles.map((styles: any) => (
                    <>
                        <ul
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            <li
                                style={{
                                    display: "flex",
                                }}
                            >
                                <h1
                                    style={{
                                        width: "max-content",
                                    }}
                                >
                                    ID:
                                </h1>
                                {styles.id}
                            </li>
                            <li style={{ display: "flex" }}>
                                <h1
                                    style={{
                                        width: "max-content",
                                    }}
                                >
                                    name:
                                </h1>
                                {styles.name}
                            </li>
                        </ul>
                    </>
                ))}
                <p
                    style={{
                        color: "#FFF",
                        borderBottom: "solid 1px #ccc",
                        marginTop: " 10px",
                        marginBottom: "8px",
                        fontSize: "1.2rem",
                    }}
                >
                    module
                </p>
                {convertSubModule.styles.map((styles: any) => (
                    <>
                        <ul
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            <li
                                style={{
                                    display: "flex",
                                }}
                            >
                                <h1
                                    style={{
                                        width: "max-content",
                                    }}
                                >
                                    body:
                                </h1>
                                {styles.value.submodel.body}
                            </li>
                            <li style={{ display: "flex" }}>
                                <h1
                                    style={{
                                        width: "max-content",
                                    }}
                                >
                                    modelName:
                                </h1>
                                {styles.value.submodel.modelName}
                            </li>
                            <li style={{ display: "flex" }}>
                                <h1
                                    style={{
                                        width: "max-content",
                                    }}
                                >
                                    niceName:
                                </h1>
                                {styles.value.submodel.niceName}
                            </li>
                        </ul>
                    </>
                ))}
            </ul>
        </Card>
    );
};

export default Years;
