import React from "react";
import { useLocation } from "react-router-dom";
import { Page, Grid, Card, Button, AppProvider } from "@shopify/polaris";
import { useEffect } from "react";

const ViewData = () => {
  const { state } = useLocation();
  console.log(state);

  useEffect(() => {
    if (state) {
      localStorage.setItem(state.id, JSON.stringify(state));
    }
  }, [state]);
  return (
    <AppProvider>
      <Page>
        <Grid>
          <Grid.Cell
            key={state.id}
            columnSpan={{ xs: 6, sm: 3, md: 12, lg: 12, xl: 12 }}
          >
            <Card title="Sales" subdued>
              <img src={state.image} style={{ height: "100px" }} />
              {/* <p>Id:{state.id}</p> */}
              <p style={{ fontWeight: "bold" }}>{state.title}</p>
              <p>
                <span style={{ fontWeight: "bold" }}>Price:</span>
                {state.price}
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Category:</span>{" "}
                {state.category}
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Descriptin:</span>{" "}
                {state.description.slice(0, 50)}...
              </p>
            </Card>
          </Grid.Cell>
        </Grid>
      </Page>
    </AppProvider>
  );
};

export default ViewData;
