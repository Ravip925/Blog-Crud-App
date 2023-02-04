import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Button, FormLabel, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { userRequest } from "../../requestMethods";
import "./blog.css";
import Footer from "../Footer/Footer";

const BlogDetail = () => {
  const id = useParams().id;
  const navigate = useNavigate();
  const [inputs, setInputs] = useState();

  useEffect(() => {
    const fetchHandler = async () => {
      await userRequest
        .get(`/blogs/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.blog))
        .catch((err) => console.log(err));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await userRequest
      .put(`/blogs/${id}`, {
        name: String(inputs.name),
        auther: String(inputs.auther),
        description: String(inputs.description),
        body: String(inputs.body),
      })
      .then((res) => res.data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => navigate("/blogs"));
  };

  return (
    <>
      {inputs && (
        <>
          <div className="edit_data">
            <form id="detail_blog" onSubmit={handleSubmit}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent={"center"}
                maxWidth={700}
                alignContent={"center"}
                alignSelf="center"
                marginLeft={"auto"}
                marginRight={"auto"}
                marginTop={10}
              >
                <FormLabel>Title</FormLabel>
                <TextField
                  value={inputs.name}
                  onChange={handleChange}
                  margin="normal"
                  fullWidth
                  variant="outlined"
                  name="name"
                />
                <FormLabel>Auther</FormLabel>
                <TextField
                  value={inputs.auther}
                  onChange={handleChange}
                  margin="normal"
                  fullWidth
                  variant="outlined"
                  name="auther"
                />
                <FormLabel>Description</FormLabel>
                <TextField
                  value={inputs.description}
                  onChange={handleChange}
                  margin="normal"
                  fullWidth
                  variant="outlined"
                  name="description"
                />
                <FormLabel>body</FormLabel>
                <TextField
                  value={inputs.body}
                  onChange={handleChange}
                  margin="normal"
                  fullWidth
                  variant="outlined"
                  name="body"
                />
                <Button variant="contained" type="submit" sx={{ mt: "15px" }}>
                  Update Book
                </Button>
              </Box>
            </form>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default BlogDetail;
