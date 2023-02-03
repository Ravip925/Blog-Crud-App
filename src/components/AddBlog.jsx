import { Button, FormLabel, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { publicRequest } from "../requestMethods";
import { mobile } from "../responsive";
import Footer from "./Footer";

const Container = styled.div`
  width: 100%;
  height: 110vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    font-family: "montserrat", sans-serif;
    font-weight: 750;
    margin-top: -20px;
    margin-bottom: 20px;
  }
  ${mobile({
    width: "100%",
    height: "115vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  })}
`;
const Wrapper = styled.div`
  margin: 20px 0;
  width: 60%;
  display: flex;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);

  ${mobile({
    width: "90%",
  })}
`;

const AddBlog = () => {
  const navigate = useNavigate();
  const [inputs, setInput] = useState({
    name: "",
    auther: "",
    description: "",
    body: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sendRequest = async () => {
    await publicRequest
      .post("/blogs", {
        name: String(inputs.name),
        auther: String(inputs.auther),
        description: String(inputs.description),
        body: String(inputs.body),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => navigate("/blogs"));
  };
  return (
    <>
      <Container>
        <h2>ADD NEW BLOG</h2>
        <Wrapper>
          <form
            style={{
              width: "100%",
              borderRadius: "15px",
              backgroundColor: "white",
              padding: "15px",
            }}
            onSubmit={handleSubmit}
          >
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
              <FormLabel>Name</FormLabel>
              <TextField
                size="small"
                value={inputs.name}
                onChange={handleChange}
                margin="normal"
                fullWidth
                variant="outlined"
                name="name"
              />
              <FormLabel>Auther</FormLabel>
              <TextField
                size="small"
                value={inputs.auther}
                onChange={handleChange}
                margin="normal"
                fullWidth
                variant="outlined"
                name="auther"
              />
              <FormLabel>Description</FormLabel>
              <TextField
                size="small"
                value={inputs.description}
                onChange={handleChange}
                margin="normal"
                fullWidth
                variant="outlined"
                name="description"
              />
              <FormLabel>Body</FormLabel>
              <TextField
                size="small"
                value={inputs.body}
                onChange={handleChange}
                margin="normal"
                fullWidth
                variant="outlined"
                name="body"
              />

              <Button
                variant="contained"
                type="submit"
                sx={{ mt: "15px", mb: "50px" }}
              >
                Add Blog
              </Button>
            </Box>
          </form>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default AddBlog;
