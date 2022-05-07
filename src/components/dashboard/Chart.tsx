// components/dashboard/Chart.tsx
// https://github.com/mui/material-ui/blob/master/docs/data/material/getting-started/templates/dashboard/Chart.tsx
import { useTheme } from "@mui/material/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from "recharts";

import Title from "./Title";

const data = (
  [
    ["00:00", 0],
    ["03:00", 300],
    ["06:00", 600],
    ["09:00", 800],
    ["12:00", 1500],
    ["15:00", 2000],
    ["18:00", 2400],
    ["21:00", 2400],
    ["24:00", undefined],
  ] as [string, number?][]
).map(([time, amount]) => ({ time, amount }));

export default function Chart() {
  const theme = useTheme();

  return (
    <>
      <Title>Today</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{ top: 16, right: 16, bottom: 0, left: 24 }}
        >
          <XAxis
            dataKey="time"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: "middle",
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Sales ($)
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}
