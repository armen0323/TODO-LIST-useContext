import type { FC, createContext } from "react";

import styles from "./TodoData.module.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useContext, useState } from "react";
import { MyContextData } from "../index";

const TodoData: FC = () => {
  const { data, setSelectedRow, selectedRow } = useContext(MyContextData);
  const [__, setIsSelected] = useState<string>("#847f7f");

  const handelSelected = (value: number) => {
    if (setSelectedRow) setSelectedRow(value);
  };

  return (
    <div className={styles.wrapper}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell align="right">Subscription</TableCell>
              <TableCell align="right">Employment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.map((element) => (
                <TableRow
                  key={element.id}
                  sx={{
                    "&": {
                      border: 0,
                      cursor: "pointer",
                      color: "snow",
                      background:
                        element.id === selectedRow ? "#847f7f" : "#160a0a",
                    },
                  }}
                  onClick={() => {
                    handelSelected(element.id);
                    setIsSelected("red");
                  }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      "&": {
                        color: "aliceblue",
                      },
                    }}
                  >
                    {element.name}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      "&": {
                        color: "aliceblue",
                      },
                    }}
                  >
                    {element.age}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      "&": {
                        color: "aliceblue",
                      },
                    }}
                  >
                    {element.subscription}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      "&": {
                        color: "aliceblue",
                      },
                    }}
                  >
                    {element.employment}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TodoData;
