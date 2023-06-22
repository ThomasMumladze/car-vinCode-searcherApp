import { Card } from "../Card";

interface Props {
    data: any;
}
const Make = (props: Props) => {
    return (
        <Card>
            <h1>{props.data.key}</h1>

            <ul>
                <li>{props.data.value}</li>
            </ul>
        </Card>
    );
};

export default Make;
