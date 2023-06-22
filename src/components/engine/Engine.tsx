import { Card } from "../Card";

interface Props {
    data: any;
}
const Engine = (props: Props) => {
    const { data } = props;

    const renderObjectValues: any = (data: any) => {
        if (typeof data === "object") {
            if (Array.isArray(data)) {
                // Handle array values
                return (
                    <ul>
                        {data.map((item, index) => (
                            <li key={index}>{renderObjectValues(item)}</li>
                        ))}
                    </ul>
                );
            } else {
                // Handle object values
                return (
                    <ul>
                        {Object.values(data).map((val, index) => (
                            <li key={index}>{renderObjectValues(val)}</li>
                        ))}
                    </ul>
                );
            }
        } else {
            // Handle non-object values
            return (
                <ul>
                    <li>{data}</li>
                </ul>
            );
        }
    };

    return (
        <Card>
            <h1>{props.data.key}</h1>
            {renderObjectValues(data.value)}
        </Card>
    );
};

export default Engine;
