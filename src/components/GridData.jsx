import { Page, Grid, Card, Button, Text } from "@shopify/polaris";
import React from "react";
import { useNavigate } from "react-router-dom";

function GridData(props) {
  const { product } = props;
  const navigate = useNavigate();

  return (
    <div className="griddata">
      <Page fullWidth>
        <Card sectioned>
          <Text variant="heading4xl" as="h1" fontWeight="bold">
            Show Data In Grid
          </Text>
          <Grid>
            {product.map((item) => {
              return (
                <Grid.Cell
                  key={item.id}
                  columnSpan={{ xs: 1, sm: 3, md: 10, lg: 3, xl: 12 }}
                >
                  <Card title="Sales" subdued>
                    <img src={item.image} style={{ height: "100px" }} />
                    {/* <p>{item.id}</p> */}
                    <p style={{ fontWeight: "bold" }}>
                      {item.title.slice(0, 30)}
                    </p>
                    <p>
                      <span style={{ fontWeight: "bold" }}>Price:</span>
                      {item.price}
                    </p>
                    <p>
                      <span style={{ fontWeight: "bold" }}>Category:</span>
                      {item.category}
                    </p>
                    <p>
                      <span style={{ fontWeight: "bold" }}>Descriptin:</span>
                      {item.description.slice(0, 50)}...
                    </p>
                    <Button
                      primary
                      onClick={() => {
                        navigate(`/viewdata/${item.id}`, {
                          state: item,
                        });
                      }}
                    >
                      View Data
                    </Button>
                  </Card>
                </Grid.Cell>
              );
            })}
          </Grid>
        </Card>
      </Page>
    </div>
  );
}
export default GridData;
