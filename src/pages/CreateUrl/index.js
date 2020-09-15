import { Form, Input } from "@rocketseat/unform";
import React, { useState } from "react";

import { Container, Header, Card, Logo } from "./styles";

const CreateUrl = () => {
  const [loading, setLoading] = useState(false);

  return (
    <Container>
      <Header>URL Shortener</Header>
      <Card>
        <Logo />
        <Form>
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
