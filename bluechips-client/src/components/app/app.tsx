import React from "react";
import { WagerBuilder } from "../wagerbuilder/wagerBuilder";
import { WagerReview } from "../wagerreview/wagerReview";

require("./app.scss");

export interface AppProps {}

export const App: React.FC<AppProps> = (props: AppProps) => {
  return (
    <>
      {/* <WagerBuilder /> */}
      <WagerReview cost={100} payout={1000} from={"Braden Borman"} />
    </>
  );
};
