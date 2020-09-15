import { Form, Input } from "@rocketseat/unform";
import React, { useState } from "react";
import * as Yup from "yup";

import { Container, Header, Card, Logo } from "./styles";

const CreateUrl = () => {
  const [loading, setLoading] = useState(false);

  const schema = Yup.object().shape({
    url: Yup.string()
      .url("Please insert a valid URL")
      .required("Url is required"),
    slug: Yup.string(),
  });

  function handleSubmit({ url, slug }) {
    setLoading(!loading);
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
      </Card>
    </Container>
  );
};

export default CreateUrl;
