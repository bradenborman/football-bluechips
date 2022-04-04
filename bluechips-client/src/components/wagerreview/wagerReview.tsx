import React from "react";

export interface WagerReviewProps {
  cost: number;
  payout: number;
  from: string;
}

export const WagerReview: React.FC<WagerReviewProps> = (
  props: WagerReviewProps
) => {
  return (
    <div className="container">
      <h2>You've recived a wager offer!</h2>
      <div>
        {props.from} has offered you the following to wager:
        <div className="bet">Jamar Chase will have 2 tds and 100 rec-yards</div>
        <div className="money-details">
          <span className="spotlight cost">Cost:</span> $
          {props.cost.toLocaleString()}
          <br />
          <span className="spotlight payout">Payout:</span> $
          {props.payout.toLocaleString()}
        </div>
        <div className="warning-message">
          *If you accept this wager, ${props.cost.toLocaleString()} will be
          withdrawn from you reserves.
        </div>
      </div>
    </div>
  );
};
