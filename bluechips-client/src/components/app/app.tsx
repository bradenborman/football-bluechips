import React from "react";
import { WagerBuilder } from "../wagerbuilder/wagerBuilder";
import { WagerReview } from "../wagerreview/wagerReview";
import { flatMap } from "lodash";

require("./app.scss");

export interface AppProps {}

export const App: React.FC<AppProps> = (props: AppProps) => {
  return (
    <>
      {/* <WagerBuilder /> */}
      <WagerReview
        cost={100}
        payout={1000}
        from={"Braden Borman"}
        bet={
          "Jamar Chase will have 2 tds and 100 rec-yards AND Tom Brady will throw for 5 tds"
        }
        accepted={false}
        actionDate="12/4/22"
      />
      <WagerReview
        cost={100}
        payout={1000}
        from={"Braden Borman"}
        bet={"Jamar Chase will have 2 tds and 100 rec-yards"}
        accepted={false}
        actionDate="12/4/22"
      />
    </>
  );
};
