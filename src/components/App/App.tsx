import React from "react";
import { Layout } from "../Layout";
import { Mastermind } from "../Game";

export const App = () => {
  return (
    <Layout>
      <div className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mx-auto">
              <Mastermind />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
