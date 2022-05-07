// components/dashboard/Order.tsx
// https://github.com/mui/material-ui/blob/master/docs/data/material/getting-started/templates/dashboard/Orders.tsx
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import Title from "./Title";

const data = (
  [
    [
      0,
      "16 Mar, 2019",
      "Elvis Presley",
      "Tupelo, MS",
      "VISA ⠀•••• 3719",
      312.44,
    ],
    [
      1,
      "16 Mar, 2019",
      "Paul McCartney",
      "London, UK",
      "VISA ⠀•••• 2574",
      866.99,
    ],
    [2, "16 Mar, 2019", "Tom Scholz", "Boston, MA", "MC ⠀•••• 1253", 100.81],
    [
      3,
      "16 Mar, 2019",
      "Michael Jackson",
      "Gary, IN",
      "AMEX ⠀•••• 2000",
      654.39,
    ],
    [
      4,
      "15 Mar, 2019",
      "Bruce Springsteen",
      "Long Branch, NJ",
      "VISA ⠀•••• 5919",
      212.79,
    ],
  ] as [number, string, string, string, string, number][]
).map(([id, date, name, shipTo, paymentMethod, amount]) => {
  return { id, date, name, shipTo, paymentMethod, amount };
});

export default function Orders() {
  return (
    <>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(({ id, date, name, shipTo, paymentMethod, amount }) => (
            <TableRow key={id}>
              <TableCell>{date}</TableCell>
              <TableCell>{name}</TableCell>
              <TableCell>{shipTo}</TableCell>
              <TableCell>{paymentMethod}</TableCell>
              <TableCell align="right">{`$${amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link
        color="primary"
        href="#"
        onClick={e => e.preventDefault()}
        sx={{ mt: 3 }}
      >
        See more orders
      </Link>
    </>
  );
}
