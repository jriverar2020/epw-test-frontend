import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {
    completed: number;
    pending: number;
    cancelled: number;
};

export default function StatusChart(props: Props) {
    const data = {
        labels: ["Completed", "Pending", "Cancelled"],
        datasets: [
            {
                data: [
                    props.completed,
                    props.pending,
                    props.cancelled,
                ],
            },
        ],
    };

    return <Doughnut data={data} />;
}
