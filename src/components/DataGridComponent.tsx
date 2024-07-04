import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import axios from "axios";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const DataGridComponent: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data));
  }, []);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "title", headerName: "Title", width: 230 },
    { field: "body", headerName: "Body", width: 400 },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={posts} columns={columns} autoPageSize checkboxSelection />
    </div>
  );
};

export default DataGridComponent;
