import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import computer from "../../public/images/PostApiGame/computer.png";
import server from "../../public/images/PostApiGame/server.png";
import dataPack from "../../public/images/PostApiGame/packageData.png";
import mailData from "../../public/images/PostApiGame/mailData.png";

import "../styles/PostApi.css";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box } from "@mui/material";

interface DataPassProps {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

const PostApiComponent = (): React.JSX.Element => {
  const [submiter, setsubmiter] = useState(false);

  const [jsonData, setjsonData] = useState<DataPassProps[]>([]);

  const columnData: GridColDef<DataPassProps>[] = [
    { field: "id", headerName: "id" },
    { field: "title", headerName: "title" },
    { field: "userId", headerName: "userId" },
    { field: "completed", headerName: "completed" },
  ];
  const navigator = useNavigate();

  useEffect(() => {
    const fetchCall = () => {
      fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "GET",
      })
        .then((response) => response.json())
        .then((resData: DataPassProps[]) => {
          console.log("seigaina", resData);
          if (submiter) {
            setTimeout(() => {
              setjsonData(resData);
              setsubmiter(false);
            }, 2000);
          }
        });
    };
    fetchCall();
  }, [submiter]);

  return (
    <div>
      <div className="mainPost">
        <div className="headdiv">
          <div>
            <div>
              <button
                onClick={() => {
                  setsubmiter(true);
                }}
              >
                Submit data
              </button>
            </div>
            <div className="navdiv">
              <button
                onClick={() => {
                  navigator("/");
                }}
              >
                return
              </button>
            </div>
          </div>
          <div className="PostMain">
            <img src={computer} alt="computer" className="child computer"></img>
            <div className="child pipe">
              <img
                src={dataPack}
                alt="dataPack"
                className={submiter ? "rightPipe" : "rightPipestop"}
              ></img>
              <img
                src={mailData}
                alt="mailData"
                className={submiter ? "leftPipe" : "leftPipestop"}
              ></img>
            </div>
            <img src={server} alt={"server"} className={"child server"}></img>
          </div>
        </div>
        <div>
          <div className="boxTable">
            <Box
              sx={{
                height: "50%",
                width: "100%",
              }}
            >
              <DataGrid
                rows={jsonData}
                columns={columnData}
                pageSizeOptions={[5, 10]}
                initialState={{
                  pagination: {
                    paginationModel: { pageSize: 5, page: 0 },
                  },
                }}
                checkboxSelection
                disableRowSelectionOnClick
              />
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostApiComponent;
