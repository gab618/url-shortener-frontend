import { Form, Input } from "@rocketseat/unform";
import React, { useState } from "react";
import * as Yup from "yup";
import api from "../../services/api";

import { Container, Header, Card, Logo } from "./styles";

const CreateUrl = () => {
  const [loading, setLoading] = useState(false);
  const [shortUrl, setShortUrl] = useState("");

  const schema = Yup.object().shape({
    url: Yup.string()
      .url("Please insert a valid URL")
      .required("Url is required"),
    slug: Yup.string(),
  });

  async function handleSubmit({ url, slug }) {
    setLoading(true);
    try {
      const response = await api.post("url", { url, slug });
      console.log(url, slug);
      if (response.data.slug) {
        setShortUrl(`${process.env.REACT_APP_API_ADDRESS}/${slug}`);
      }
    } catch (error) {
      setShortUrl(error.toString());
    }
    setLoading(false);
  }

  return (
    <Container>
      <Header>URL Shortener</Header>
      <Card>
        <Logo />
        <Form schema={schema} onSubmit={handleSubmit}>
          <Input name="url" type="text" placeholder="url" />
          <Input name="slug" type="text" placeholder="slug" />
          <button type="submit">
            {loading ? "Creating new url..." : "Short URL"}
          </button>
        </Form>
        <h3>{shortUrl}</h3>
      </Card>
    </Container>
  );
};

export default CreateUrl;
