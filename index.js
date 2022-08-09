const app = require('express')();
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
    swaggerDefinition: {
      info: {
        version: "1.0.0",
        title: "Customer API",
        description: "Customer API Information",
        contact: {
          name: "Amazing Developer"
        },
        servers: ["http://localhost:3000"]
      }
    },
    // ['.routes/*.js']
    apis: ["index.js"]
  };
  
  const swaggerDocs = swaggerJsDoc(swaggerOptions);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  
  // Routes
  /**
   * @swagger
   * /customers:
   *  get:
   *    description: Use to request all customers
   *    responses:
   *      '200':
   *        description: A successful response
   */
  app.get("/customers", (req, res) => {
    res.status(200).send("Customer results");
  });
  
  /**
   * @swagger
   * /customers:
   *    put:
   *      description: Use to return all customers
   *    parameters:
   *      - name: customer
   *        in: query
   *        description: Name of our customer
   *        required: false
   *        schema:
   *          type: string
   *          format: string
   *    responses:
   *      '201':
   *        description: Successfully created user
   */
  app.put("/customer", (req, res) => {
    res.status(200).send("Successfully updated customer");
  });
  


app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
}
);